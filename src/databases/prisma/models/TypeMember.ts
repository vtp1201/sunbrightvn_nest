import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/TypeMember';
import { deleted, oneToMany } from '../mixins';
import {
  companyMember,
  fileTemplateHasCompanyMemberType,
  historyCompanyMember,
} from '.';

export default createModel(MODEL_NAME.TYPE_MEMBER, (TypeMemberModel) => {
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
  const fileTemplateHasCompanyMemberTypesRelation = oneToMany({
    model: fileTemplateHasCompanyMemberType,
    relation: RELATION.fileTemplateHasCompanyMemberTypes,
  });
  const historyCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.historyCompanyMembers,
  });

  // defined Model
  process.nextTick(() => {
    TypeMemberModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(companyMembersRelation)
      .mixin(fileTemplateHasCompanyMemberTypesRelation)
      .mixin(historyCompanyMembersRelation)

      // table name
      .map(TABLE_NAME.TYPE_MEMBER);
  });
});
