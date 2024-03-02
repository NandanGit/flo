import { LocaleCode } from '../../shared/enums/Locale';

export interface Locale {
	code: LocaleCode;
	name: string;
	nativeName: string;
	isDownloaded: boolean;
}
