import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceHasCompanyMemberType';

export default createModel(
  MODEL_NAME.SERVICE_HAS_COMPANY_MEMBER_TYPE,
  (ServiceHasCompanyMemberTypeModel) => {
    // defined Model
    process.nextTick(() => {
      ServiceHasCompanyMemberTypeModel.int(ATTRIBUTE.serviceChangeOfficerId, {
        map: COLUMN.serviceChangeOfficerId,
      })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.serviceChangeOfficerId, ATTRIBUTE.fileTemplateId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_HAS_COMPANY_MEMBER_TYPE);
    });
  },
);
