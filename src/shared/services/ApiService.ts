import { ZodSchema, z } from 'zod';
import { flo } from './axios';
import { APIGetOptions, APIPaginationOptions } from '../types/api';

export class ApiService<S extends ZodSchema, D = z.infer<S>> {
	constructor(
		protected baseUrl: string,
		protected schema: S,
		protected defaultPaginationOptions: Required<APIPaginationOptions>,
		protected preValidationProcessor: (data: object) => object = (_) => _
	) {
		this.baseUrl = baseUrl;
		this.schema = schema;
		this.defaultPaginationOptions = defaultPaginationOptions;
		this.preValidationProcessor = preValidationProcessor;
	}

	protected async search(
		query: string,
		paginationOptions?: APIPaginationOptions
	): Promise<D[] | null> {
		return await this.get({ q: query }, paginationOptions);
	}

	protected async getById(id: string): Promise<D | null> {
		try {
			const { data } = await flo.get(`${this.baseUrl}/${id}`);
			// Process before validation
			const processedData = this.preValidationProcessor(data);
			// Validate the data
			this.schema.parse(processedData);

			return processedData as D;
		} catch (error) {
			console.error('Error:', (error as Error).message);
			return null;
		}
	}

	protected async get(
		options?: APIGetOptions,
		paginationOptions?: APIPaginationOptions
	): Promise<D[] | null> {
		const { start, limit } = {
			...this.defaultPaginationOptions,
			...paginationOptions,
		};
		try {
			let queryString = '?';
			for (const key in options) {
				queryString += `${key}=${options[key]}&`;
			}

			queryString += `_start=${start}&_limit=${limit}`;

			const { data } = await flo.get(this.baseUrl + queryString);
			// Process before validation
			if (!Array.isArray(data)) {
				throw new Error('Data is not an array');
			}
			const processedData = data.map(this.preValidationProcessor);
			// Validate the data
			this.schema.array().parse(processedData);

			return processedData as D[];
		} catch (error) {
			console.error('Error:', (error as Error).message);
			return null;
		}
	}
}
