import { AccountSchemaConstants } from './account';
import { SharedSchemaConstants } from './shared';
import { TransactionSchemaConstants } from './transaction';

export class SchemaConstants {
	public static readonly shared = SharedSchemaConstants;

	public static readonly transaction = TransactionSchemaConstants;
	public static readonly account = AccountSchemaConstants;

	// public static readonly merchant = MerchantSchemaConstants;
	// public static readonly person = PersonSchemaConstants;
	// public static readonly category = CategorySchemaConstants;
	// public static readonly user = UserSchemaConstants;
}
