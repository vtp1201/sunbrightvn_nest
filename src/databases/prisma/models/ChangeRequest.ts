import { createModel } from 'schemix';

import {
  changeRequestItem,
  changeRequestStatus,
  company,
  companyMember,
  companyPosition,
  file,
  task,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ChangeRequest';

export default createModel(MODEL_NAME.CHANGE_REQUEST, (ChangeRequestModel) => {
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
  // defined Relations
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    map: INDEX_NAME.companyId,
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    map: INDEX_NAME.companyMemberId,
    isNeedName: true,
    option: { optional: true },
  });
  const companyPositionRelation = oneToOne({
    attribute: ATTRIBUTE.companyPositionId,
    model: companyPosition,
    relation: RELATION.companyPosition,
    map: INDEX_NAME.companyPositionId,
    isNeedName: true,
    option: { optional: true },
  });
  const toCompanyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.toCompanyMemberId,
    model: companyMember,
    relation: RELATION.toCompanyMember,
    map: INDEX_NAME.toCompanyMemberId,
    isNeedName: true,
    option: { optional: true },
  });
  const toCompanyPositionRelation = oneToOne({
    attribute: ATTRIBUTE.toCompanyPositionId,
    model: companyPosition,
    relation: RELATION.toCompanyPosition,
    map: INDEX_NAME.toCompanyPositionId,
    isNeedName: true,
    option: { optional: true },
  });
  const changeRequestStatusRelation = oneToOne({
    attribute: ATTRIBUTE.changeRequestStatusId,
    model: changeRequestStatus,
    relation: RELATION.changeRequestStatus,
    map: INDEX_NAME.changeRequestStatusId,
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    map: INDEX_NAME.taskId,
  });
  const changeRequestItemsRelation = oneToMany({
    model: changeRequestItem,
    relation: RELATION.changeRequestItems,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });

  // defined Model
  process.nextTick(() => {
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
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyRelation)
      .mixin(companyMemberRelation)
      .mixin(companyPositionRelation)
      .mixin(toCompanyMemberRelation)
      .mixin(toCompanyPositionRelation)
      .mixin(changeRequestStatusRelation)
      .mixin(taskRelation)
      .mixin(changeRequestItemsRelation)
      .mixin(filesRelation)

      // indexes
      .raw(INDEX.changeRequestStatusId)
      .raw(INDEX.companyId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.companyPositionId)
      .raw(INDEX.taskId)
      .raw(INDEX.toCompanyMemberId)
      .raw(INDEX.toCompanyPositionId)

      // table name
      .map(TABLE_NAME.CHANGE_REQUEST);
  });
});
