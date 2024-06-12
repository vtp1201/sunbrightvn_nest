import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/GrantSchemeHasGrantTypeAttribute';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE,
  (GrantSchemeHasGrantTypeAttributeModel) => {
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
      GrantSchemeHasGrantTypeAttributeModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.grantSchemeId, {
          map: COLUMN.grantSchemeId,
        })
        .int(ATTRIBUTE.needsBasedId, {
          map: COLUMN.needsBasedId,
          optional: true,
        })
        .int(ATTRIBUTE.industryId, {
          map: COLUMN.industryId,
          optional: true,
        })
        .int(ATTRIBUTE.businessStageId, {
          map: COLUMN.businessStageId,
          optional: true,
        })
        .int(ATTRIBUTE.yearsOperationId, {
          map: COLUMN.yearsOperationId,
          optional: true,
        })
        .int(ATTRIBUTE.businessSizeId, {
          map: COLUMN.businessSizeId,
          optional: true,
        })
        .int(ATTRIBUTE.localShareholdingId, {
          map: COLUMN.localShareholdingId,
          optional: true,
        })
        .int(ATTRIBUTE.numberEmployeesId, {
          map: COLUMN.numberEmployeesId,
          optional: true,
        })
        .int(ATTRIBUTE.typeId, {
          map: COLUMN.typeId,
          optional: true,
        })
        .int(ATTRIBUTE.agencyId, {
          map: COLUMN.agencyId,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.agencyId)
        .raw(INDEX.businessSizeId)
        .raw(INDEX.businessStageId)
        .raw(INDEX.grantSchemeId)
        .raw(INDEX.industryId)
        .raw(INDEX.localShareholdingId)
        .raw(INDEX.needsBasedId)
        .raw(INDEX.numberEmployeesId)
        .raw(INDEX.typeId)
        .raw(INDEX.yearsOperationId)

        // table name
        .map(TABLE_NAME.GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE);
    });
  },
);
