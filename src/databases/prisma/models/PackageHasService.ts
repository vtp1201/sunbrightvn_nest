import { createModel } from 'schemix';

import { Package, service } from '.';
import { deleted, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/PackageHasService';

export default createModel(MODEL_NAME.PACKAGE_HAS_SERVICE, (PackageHasServiceModel) => {
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
  const packageRelation = oneToOne({
    attribute: ATTRIBUTE.packageId,
    map: INDEX_NAME.packageId,
    model: Package,
    relation: RELATION.package,
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    map: INDEX_NAME.serviceId,
    model: service,
    relation: RELATION.service,
  });

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

      // relations
      .mixin(packageRelation)
      .mixin(serviceRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.packageId, ATTRIBUTE.serviceId, ATTRIBUTE.typeId],
      })

      // indexes
      .raw(INDEX.packageId)
      .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.PACKAGE_HAS_SERVICE);
  });
});
