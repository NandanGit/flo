import { z } from 'zod';
import { flo } from '../shared/third-party/axios';
import { APIGetOptions, APIPaginationOptions } from '../shared/types/api';
import { ZodObjectSchema } from '../shared/types/zod';
import { ExcludeId } from '../shared/types/common';

export class ApiService<S extends ZodObjectSchema, D = z.infer<S>> {
	constructor(
		protected baseUrl: string,
		protected schema: S,
		protected defaultPaginationOptions: Required<APIPaginationOptions>,
		protected preValidationProcessor: (
			data: Record<string, string | number | boolean>
		) => object = (_) => _
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
		return await this.get({ q: query } as APIGetOptions<D>, paginationOptions);
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
			throw error;
		}
	}

	protected async get(
		// options?: APIGetOptions,
		options?: APIGetOptions<D>,
		paginationOptions?: APIPaginationOptions,
		isArrayResult: boolean = true
	): Promise<D[] | null> {
		const { start, limit } = {
			...this.defaultPaginationOptions,
			...paginationOptions,
		};
		try {
			let queryString = '?';
			for (const key in options) {
				queryString += `${key}=${options[key as keyof APIGetOptions<D>]}&`;
			}

			queryString += `_start=${start}&_limit=${limit}`;

			const { data } = await flo.get(this.baseUrl + queryString);

			// Process before validation
			if (!Array.isArray(data) && isArrayResult) {
				throw new Error('Data is not an array');
			}
			const processedData = isArrayResult
				? data.map(this.preValidationProcessor)
				: this.preValidationProcessor(data);
			// Validate the data
			(isArrayResult ? this.schema.array() : this.schema).parse(processedData);

			return processedData as D[];
		} catch (error) {
			console.error('Error:', (error as Error).message);
			throw error;
		}
	}

	protected async add<T>(data: ExcludeId<D>): Promise<T> {
		this.schema.omit({ id: true }).array().parse(data);
		const { data: responseData } = await flo.post(this.baseUrl, data);
		return responseData as T;
	}

	protected async addMany<T>(data: ExcludeId<D>[]): Promise<T> {
		this.schema.omit({ id: true }).array().parse(data);
		const { data: responseData } = await flo.post(this.baseUrl, data);
		return responseData as T;
	}

	protected async update<T>(id: string, data: Partial<D>): Promise<T> {
		this.schema.partial().parse(data);
		const { data: responseData } = await flo.patch(
			`${this.baseUrl}/${id}`,
			data
		);
		return responseData as T;
	}

	protected async addOrUpdate<T>(id: string, data: D): Promise<T> {
		this.schema.parse(data);
		const { data: responseData } = await flo.put(`${this.baseUrl}/${id}`, data);
		return responseData as T;
	}

	protected async remove<T>(id: string): Promise<T> {
		const { data: responseData } = await flo.delete(`${this.baseUrl}/${id}`);
		return responseData as T;
	}

	protected async removeMany<T>(ids: string[]): Promise<T> {
		const { data: responseData } = await flo.delete(this.baseUrl, {
			data: ids,
		});
		return responseData as T;
	}
}
