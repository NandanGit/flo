import { LocalStorageKey } from './LocalStorageKey';
import { LocalStorageValue } from './LocalStorageValue';

export class LocalStorage {
	// Setters
	private static _set<V = LocalStorageValue>(key: LocalStorageKey, value: V) {
		localStorage.setItem(key, JSON.stringify(value));
		console.log('LocalStorage._set', key, value);
	}
	public static setArray = LocalStorage._set<LocalStorageValue[]>;
	public static setBoolean = LocalStorage._set<boolean>;
	public static setObject = LocalStorage._set<object>;
	public static setNumber = LocalStorage._set<number>;
	public static setString = LocalStorage._set<string>;

	// Getters
	private static _get<V = LocalStorageValue>(key: LocalStorageKey): V | null {
		const value = localStorage.getItem(key);
		const returnVal = value ? JSON.parse(value) : null;
		console.log('LocalStorage._get', key, returnVal);
		return returnVal;
	}
	public static getArray = LocalStorage._get<LocalStorageValue[]>;
	public static getBoolean = LocalStorage._get<boolean>;
	public static getObject = LocalStorage._get<object>;
	public static getNumber = LocalStorage._get<number>;
	public static getString = LocalStorage._get<string>;

	// Remover
	public static remove(key: LocalStorageKey) {
		localStorage.removeItem(key);
	}
}
