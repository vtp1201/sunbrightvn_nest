import { createModel } from 'schemix';

import { company, website } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Currency';

export default createModel(MODEL_NAME.CURRENCY, (CurrencyModel) => {
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
  const companiesRelation = oneToMany({
    model: company,
    relation: RELATION.companies,
  });
  const websitesRelation = oneToMany({
    model: website,
    relation: RELATION.websites,
  });

  // defined Model
  process.nextTick(() => {
    CurrencyModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.code, {
        map: COLUMN.code,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.symbol, {
        map: COLUMN.symbol,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .float(ATTRIBUTE.exchangeRate, {
        map: COLUMN.exchangeRate,
        raw: RAW_NUMBER.FLOAT,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(companiesRelation)
      .mixin(websitesRelation)

      // table name
      .map(TABLE_NAME.CURRENCY);
  });
});
