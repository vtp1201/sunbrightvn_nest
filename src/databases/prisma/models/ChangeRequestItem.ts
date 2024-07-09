import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ChangeRequestItem';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { changeRequest } from '.';

export default createModel(
  MODEL_NAME.CHANGE_REQUEST_ITEM,
  (ChangeRequestItemModel) => {
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
    const changeRequestRelation = oneToOne({
      attribute: ATTRIBUTE.changeRequestId,
      model: changeRequest,
      relation: RELATION.changeRequest,
    });

    // defined Model
    process.nextTick(() => {
      ChangeRequestItemModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.changeRequestId, {
          map: COLUMN.changeRequestId,
        })
        // TODO: switch to enum
        .string(ATTRIBUTE.model, {
          map: COLUMN.model,
          raw: RAW_STRING.LENGTH_100,
        })
        .string(ATTRIBUTE.fieldName, {
          map: COLUMN.fieldName,
          raw: RAW_STRING.LENGTH_100,
        })
        .string(ATTRIBUTE.value, {
          map: COLUMN.value,
          raw: RAW_STRING.TEXT,
        })
        .boolean(ATTRIBUTE.isFee, {
          map: COLUMN.isFee,
          default: true,
        })
        .string(ATTRIBUTE.dataType, {
          map: COLUMN.dataType,
          raw: RAW_STRING.LENGTH_45,
        })
        .int(ATTRIBUTE.targetId, {
          map: COLUMN.targetId,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(changeRequestRelation)

        // table name
        .map(TABLE_NAME.CHANGE_REQUEST_ITEM);
    });
  },
);
