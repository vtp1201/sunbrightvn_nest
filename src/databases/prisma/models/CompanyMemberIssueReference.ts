import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyMemberIssueReference';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_ISSUE_REFERENCE,
  (CompanyMemberIssueReferenceModel) => {
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
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.COMPANY_MEMBER_ISSUE_REFERENCE);
  },
);
