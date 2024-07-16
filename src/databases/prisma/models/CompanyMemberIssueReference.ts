import { createModel } from 'schemix';

import { companyMemberReference } from '.';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyMemberIssueReference';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_ISSUE_REFERENCE,
  (CompanyMemberIssueReferenceModel) => {
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

    // defined relations
    const companyMemberReferencesRelation = oneToMany({
      model: companyMemberReference,
      relation: RELATION.companyMemberReferences,
    });

    // defined Model
    process.nextTick(() => {
      CompanyMemberIssueReferenceModel.int(ATTRIBUTE.id, {
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
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(companyMemberReferencesRelation)

        // table name
        .map(TABLE_NAME.COMPANY_MEMBER_ISSUE_REFERENCE);
    });
  },
);
