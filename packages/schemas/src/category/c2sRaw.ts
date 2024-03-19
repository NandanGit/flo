import s2cCategorySchemaRaw from './s2cRaw';

const c2sCategorySchemaRaw = s2cCategorySchemaRaw.omit({
	id: true,
	createdBy: true,
	createdAt: true,
	updatedAt: true,
});
// .refine((data) => {
// 	return true;
// });

export default c2sCategorySchemaRaw;
