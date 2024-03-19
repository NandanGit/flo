import { AccountSchemaConstants } from './account';
import { CategorySchemaConstants } from './category';
import { PaymentProcessorSchemaConstants } from './payment-processor';
import { ProductSchemaConstants } from './product';
import { SharedSchemaConstants } from './shared';
import { TransactionSchemaConstants } from './transaction';

export class SchemaConstants {
	public static readonly shared = SharedSchemaConstants;

	public static readonly transaction = TransactionSchemaConstants;
	public static readonly account = AccountSchemaConstants;
	public static readonly category = CategorySchemaConstants;
	public static readonly product = ProductSchemaConstants;
	public static readonly paymentProcessor = PaymentProcessorSchemaConstants;

	// public static readonly merchant = MerchantSchemaConstants;
	// public static readonly person = PersonSchemaConstants;
	// public static readonly user = UserSchemaConstants;
}
