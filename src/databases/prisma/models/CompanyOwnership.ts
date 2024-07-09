import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_DATE_TIME, RAW_NUMBER } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyOwnership';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { company, companyMember, companyPosition, task } from '.';

export default createModel(
  MODEL_NAME.COMPANY_OWNERSHIP,
  (CompanyOwnershipModel) => {
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
    const companyRelation = oneToOne({
      attribute: ATTRIBUTE.companyId,
      model: company,
      relation: RELATION.company,
    });
    const companyMemberRelation = oneToOne({
      attribute: ATTRIBUTE.companyMemberId,
      model: companyMember,
      relation: RELATION.companyMember,
      isNeedName: true,
    });
    const corporationCompanyMemberRelation = oneToOne({
      attribute: ATTRIBUTE.corporationCompanyMemberId,
      model: companyMember,
      relation: RELATION.corporationCompanyMember,
      isNeedName: true,
      option: { optional: true },
    });
    const companyPositionRelation = oneToOne({
      attribute: ATTRIBUTE.companyPositionId,
      model: companyPosition,
      relation: RELATION.companyPosition,
      option: { optional: true },
    });
    const taskRelation = oneToOne({
      attribute: ATTRIBUTE.taskId,
      model: task,
      relation: RELATION.task,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      CompanyOwnershipModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.taskId, {
          map: COLUMN.taskId,
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
        .mixin(corporationCompanyMemberRelation)
        .mixin(companyPositionRelation)
        .mixin(taskRelation)

        // table name
        .map(TABLE_NAME.COMPANY_OWNERSHIP);
    });
  },
);
