import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/DeclarationTax';
import { deleted, oneToOne } from '../mixins';
import { country, fatca } from '.';

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

    // defined relations
    const countryRelation = oneToOne({
      attribute: ATTRIBUTE.countryId,
      model: country,
      relation: RELATION.country,
    });
    const fatcaRelation = oneToOne({
      attribute: ATTRIBUTE.fatcaId,
      model: fatca,
      relation: RELATION.fatca,
    });

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

        // relations
        .mixin(countryRelation)
        .mixin(fatcaRelation)

        // table name
        .map(TABLE_NAME.DECLARATION_TAX);
    });
  },
);
