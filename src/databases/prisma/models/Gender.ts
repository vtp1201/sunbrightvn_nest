import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Gender';
import { deleted, oneToMany } from '../mixins';
import { companyMember, customer, historyCompanyMember, person } from '.';

export default createModel(MODEL_NAME.GENDER, (GenderModel) => {
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
  const companyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.companyMembers,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const historyCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.historyCompanyMembers,
  });
  const personsRelation = oneToMany({
    model: person,
    relation: RELATION.persons,
  });

  // defined Model
  process.nextTick(() => {
    GenderModel.int(ATTRIBUTE.id, {
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
      .string(ATTRIBUTE.prefix, {
        map: COLUMN.prefix,
        raw: RAW_STRING.LENGTH_45,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(companyMembersRelation)
      .mixin(customersRelation)
      .mixin(historyCompanyMembersRelation)
      .mixin(personsRelation)

      // table name
      .map(TABLE_NAME.GENDER);
  });
});
