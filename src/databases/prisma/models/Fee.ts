import { createModel } from 'schemix';

import { feeType, service } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_NUMBER, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Fee';

export default createModel(MODEL_NAME.FEE, (FeeModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // defined Relations
  const feeTypeRelation = oneToOne({
    attribute: ATTRIBUTE.feeTypeId,
    model: feeType,
    relation: RELATION.feeType,
    map: INDEX_NAME.feeTypeId,
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    model: service,
    relation: RELATION.service,
    map: INDEX_NAME.serviceId,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    FeeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
        optional: true,
      })
      .int(ATTRIBUTE.feeTypeId, {
        map: COLUMN.feeTypeId,
      })
      .float(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
        raw: RAW_NUMBER.FLOAT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(feeTypeRelation)
      .mixin(serviceRelation)

      // indexes
      .raw(INDEX.feeTypeId)
      .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.FEE);
  });
});
