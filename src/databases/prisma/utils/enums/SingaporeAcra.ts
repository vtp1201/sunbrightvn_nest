export enum ATTRIBUTE {
  id = 'id',
  entityName = 'entityName',
}

export enum COLUMN {
  id = 'id',
  entityName = 'entity_name',
}

export enum RELATION {}

// const tableName = TABLE_NAME.CLICK;
// export enum INDEX_NAME {
//   voucherTypeId = `"${tableName}_${COLUMN.voucherTypeId}_fkey"`,
// }

export enum INDEX {
  entityName = `@@index([${ATTRIBUTE.entityName}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
