import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ChangeRequest';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.CHANGE_REQUEST, (ChangeRequestModel) => {
  ChangeRequestModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .int(ATTRIBUTE.taskId, {
      map: COLUMN.taskId,
    })
    .int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
    })
    .int(ATTRIBUTE.changeRequestStatusId, {
      map: COLUMN.changeRequestStatusId,
    })
    .int(ATTRIBUTE.companyMemberId, {
      map: COLUMN.companyMemberId,
      optional: true,
    })
    .int(ATTRIBUTE.companyPositionId, {
      map: COLUMN.companyPositionId,
      optional: true,
    })
    .int(ATTRIBUTE.toCompanyMemberId, {
      map: COLUMN.toCompanyMemberId,
      optional: true,
    })
    .int(ATTRIBUTE.toCompanyPositionId, {
      map: COLUMN.toCompanyPositionId,
      optional: true,
    })
    .int(ATTRIBUTE.changeRequestRelatedId, {
      map: COLUMN.changeRequestRelatedId,
      optional: true,
    })
    .boolean(ATTRIBUTE.isApproved, {
      map: COLUMN.isApproved,
      default: false,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.CHANGE_REQUEST);
});
