import { createModel } from 'schemix';

import { company, companyMember, companyPosition, task } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_NUMBER, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/CompanyInterest';

export default createModel(MODEL_NAME.COMPANY_INTEREST, (CompanyInterestModel) => {
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
  });
  const companyPositionRelation = oneToOne({
    attribute: ATTRIBUTE.companyPositionId,
    model: companyPosition,
    relation: RELATION.companyPosition,
    map: INDEX_NAME.companyPositionId,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    map: INDEX_NAME.taskId,
    option: { optional: true },
  });
  const corporationCompanyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.corporationCompanyMemberId,
    model: companyMember,
    relation: RELATION.corporationCompanyMember,
    map: INDEX_NAME.corporationCompanyMemberId,
    isNeedName: true,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    CompanyInterestModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.no, {
        map: COLUMN.no,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
      })
      .int(ATTRIBUTE.companyPositionId, {
        map: COLUMN.companyPositionId,
        optional: true,
      })
      .int(ATTRIBUTE.corporationCompanyMemberId, {
        map: COLUMN.corporationCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.startNumber, {
        map: COLUMN.startNumber,
        optional: true,
      })
      .int(ATTRIBUTE.endNumber, {
        map: COLUMN.endNumber,
        optional: true,
      })
      .float(ATTRIBUTE.value, {
        map: COLUMN.value,
        raw: RAW_NUMBER.FLOAT,
      })
      .boolean(ATTRIBUTE.isValid, {
        map: COLUMN.isValid,
        default: false,
      })
      .boolean(ATTRIBUTE.isApproved, {
        map: COLUMN.isApproved,
        default: false,
      })
      .int(ATTRIBUTE.issuedFileId, {
        map: COLUMN.issuedFileId,
        optional: true,
      })
      .dateTime(ATTRIBUTE.issuedDated, {
        map: COLUMN.issuedDated,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.expiredDated, {
        map: COLUMN.expiredDated,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyRelation)
      .mixin(companyMemberRelation)
      .mixin(companyPositionRelation)
      .mixin(taskRelation)
      .mixin(corporationCompanyMemberRelation)

      // indexes
      .raw(INDEX.companyId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.companyPositionId)
      .raw(INDEX.corporationCompanyMemberId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.COMPANY_INTEREST);
  });
});
