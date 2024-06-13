import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/PackageHasService';
import { deleted } from '../mixins';

export default createModel(
  MODEL_NAME.PACKAGE_HAS_SERVICE,
  (PackageHasServiceModel) => {
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
      PackageHasServiceModel.int(ATTRIBUTE.packageId, {
        map: COLUMN.packageId,
      })
        .int(ATTRIBUTE.serviceId, {
          map: COLUMN.serviceId,
        })
        .int(ATTRIBUTE.typeId, {
          map: COLUMN.typeId,
          default: 1,
        })

        // dateTime marks
        .mixin(initDeleted)

        // ids
        .id({
          fields: [ATTRIBUTE.packageId, ATTRIBUTE.serviceId, ATTRIBUTE.typeId],
        })

        // table name
        .map(TABLE_NAME.PACKAGE_HAS_SERVICE);
    });
  },
);
