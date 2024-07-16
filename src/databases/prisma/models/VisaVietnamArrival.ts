import { createModel } from 'schemix';

import { country } from '.';
import { deleted, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/VisaVietnamArrival';

export default createModel(MODEL_NAME.VISA_VIETNAM_ARRIVAL, (VisaVietnamArrivalModel) => {
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
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    VisaVietnamArrivalModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.countryId, {
        optional: true,
        map: COLUMN.countryId,
      })
      .int(ATTRIBUTE.dayFree, {
        optional: true,
        map: COLUMN.dayFree,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(countryRelation)

      // indexes
      // .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.VISA_VIETNAM_ARRIVAL);
  });
});
