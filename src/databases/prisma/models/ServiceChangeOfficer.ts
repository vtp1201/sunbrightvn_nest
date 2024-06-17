import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ServiceChangeOfficer';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.SERVICE_CHANGE_OFFICER,
  (ServiceChangeOfficerModel) => {
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

    // defined Model
    process.nextTick(() => {
      ServiceChangeOfficerModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.companyMemberTypeId, {
          map: COLUMN.companyMemberTypeId,
        })
        .int(ATTRIBUTE.changeRequestStatusId, {
          map: COLUMN.changeRequestStatusId,
        })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.TEXT,
        })
        .string(ATTRIBUTE.description, {
          map: COLUMN.description,
          raw: RAW_STRING.TEXT,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.changeRequestStatusId)
        .raw(INDEX.companyMemberTypeId)

        // table name
        .map(TABLE_NAME.SERVICE_CHANGE_OFFICER);
    });
  },
);
