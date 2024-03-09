/**
 * A class named RGBA
 * It takes one param of type string. It will be in the format of 'rgb({red}, {green}, {blue})' or 'rgba({red}, {green}, {blue}, {alpha})'.
 * If the provided string is not in the correct format, it should throw an error.
 * When the alpha is not provided, it should be considered as 1.
 *
 *
 * It should have the following methods
 * - withOpacity(opacity: number): string | opacity is a number between 0 and 1 (both inclusive)
 * - withRed(red: number): string | red is a number between 0 and 255 (both inclusive)
 * - withGreen(green: number): string | green is a number between 0 and 255 (both inclusive)
 * - withBlue(blue: number): string | blue is a number between 0 and 255 (both inclusive)
 * All the above methods should return another instance of RGBA.
 *
 * It should have the following getters
 * - red: number
 * - green: number
 * - blue: number
 * - alpha: number
 *
 * When used toString() it should return the RGBA string
 *
 * Note: The class is written in TypeScript following all the types and method signatures
 */

export class RGBA {
	private _red: number;
	private _green: number;
	private _blue: number;
	private _alpha: number;

	constructor(color: string) {
		[this._red, this._green, this._blue, this._alpha] = this.parseColor(color);
	}

	private parseColor(color: string): [number, number, number, number] {
		if (color.startsWith('#')) {
			return this.parseHex(color);
		} else {
			return this.parseRGBA(color);
		}
	}

	private parseHex(color: string): [number, number, number, number] {
		const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
		const match = color.match(hexRegex);
		if (!match) {
			throw new Error('Invalid input');
		}
		return [
			parseInt(match[1], 16),
			parseInt(match[2], 16),
			parseInt(match[3], 16),
			match[4] ? parseInt(match[4], 16) / 255 : 1,
		];
	}

	private parseRGBA(color: string): [number, number, number, number] {
		const rgbaRegex =
			/rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})(?:, (\d(?:\.\d+)?))?\)/;
		const match = color.match(rgbaRegex);
		if (!match) {
			throw new Error('Invalid input');
		}
		return [
			parseInt(match[1]),
			parseInt(match[2]),
			parseInt(match[3]),
			match[4] ? parseFloat(match[4]) : 1,
		];
	}

	withOpacity(opacity: number): string {
		return `rgba(${this._red}, ${this._green}, ${this._blue}, ${opacity})`;
	}

	withRed(red: number): string {
		return `rgba(${red}, ${this._green}, ${this._blue}, ${this._alpha})`;
	}

	withGreen(green: number): string {
		return `rgba(${this._red}, ${green}, ${this._blue}, ${this._alpha})`;
	}

	withBlue(blue: number): string {
		return `rgba(${this._red}, ${this._green}, ${blue}, ${this._alpha})`;
	}

	get red(): number {
		return this._red;
	}

	get green(): number {
		return this._green;
	}

	get blue(): number {
		return this._blue;
	}

	get alpha(): number {
		return this._alpha;
	}

	toString(): string {
		return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
	}
}
