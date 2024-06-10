import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/DeclarationTax';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.DECLARATION_TAX,
  (DeclarationTaxModel) => {
    const initDeleted = deleted(
      {
        attribute: ATTRIBUTE.deletedTime,
        column: COLUMN.deletedTime,
      },
      {
        attribute: ATTRIBUTE.deletedTime,
        column: COLUMN.deletedTime,
      },
    );

    // defined Model
    process.nextTick(() => {
      DeclarationTaxModel.int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
        .int(ATTRIBUTE.fatcaId, {
          map: COLUMN.fatcaId,
        })
        .string(ATTRIBUTE.taxReferenceType, {
          map: COLUMN.taxReferenceType,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.taxReferenceNumber, {
          map: COLUMN.taxReferenceNumber,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })

        // ids
        .id({ fields: [ATTRIBUTE.countryId, ATTRIBUTE.fatcaId] })

        // dateTime marks
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME.DECLARATION_TAX);
    });
  },
);
