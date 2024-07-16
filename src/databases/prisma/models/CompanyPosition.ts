import { createModel } from 'schemix';

import {
  changeRequest,
  companyInterest,
  companyMember,
  companyMemberType,
  companyOwnership,
  companyShare,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_NUMBER, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyPosition';
import { RELATION_DEFAULT } from '../utils/enums/default';

export default createModel(MODEL_NAME.COMPANY_POSITION, (CompanyPositionModel) => {
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
  const companyMemberTypeRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberTypeId,
    model: companyMemberType,
    relation: RELATION.companyMemberType,
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
  const changeRequestsRelation = oneToMany({
    model: changeRequest,
    relation: RELATION.changeRequests,
    fromRelation: RELATION_DEFAULT.companyPosition,
  });
  const toCompanyPositionForChangeRequestsRelation = oneToMany({
    model: changeRequest,
    relation: RELATION.toCompanyPositionForChangeRequests,
    fromRelation: RELATION_DEFAULT.toCompanyPosition,
  });
  const companyInterestsRelation = oneToMany({
    model: companyInterest,
    relation: RELATION.companyInterests,
  });
  const companyOwnershipsRelation = oneToMany({
    model: companyOwnership,
    relation: RELATION.companyOwnerships,
  });
  const companySharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyShares,
  });

  // defined Model
  process.nextTick(() => {
    CompanyPositionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
      })
      .int(ATTRIBUTE.companyMemberTypeId, {
        map: COLUMN.companyMemberTypeId,
      })
      .int(ATTRIBUTE.corporationCompanyMemberId, {
        map: COLUMN.corporationCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.numberAllotted, {
        map: COLUMN.numberAllotted,
        default: 0,
      })
      .float(ATTRIBUTE.percentOfInterest, {
        map: COLUMN.percentOfInterest,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })
      .float(ATTRIBUTE.ownPercent, {
        map: COLUMN.ownPercent,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })
      .dateTime(ATTRIBUTE.dateOfAppointment, {
        map: COLUMN.dateOfAppointment,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateOfResign, {
        map: COLUMN.dateOfResign,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .boolean(ATTRIBUTE.isAppointed, {
        map: COLUMN.isAppointed,
        default: false,
      })
      .boolean(ATTRIBUTE.isApproved, {
        map: COLUMN.isApproved,
        default: false,
      })
      .boolean(ATTRIBUTE.isContactPerson, {
        map: COLUMN.isContactPerson,
        default: false,
      })
      .boolean(ATTRIBUTE.isHandleRelationshipContactPerson, {
        map: COLUMN.isHandleRelationshipContactPerson,
        default: false,
      })
      .string(ATTRIBUTE.positionDetail, {
        map: COLUMN.positionDetail,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .json(ATTRIBUTE.relationshipWithCompany, {
        map: COLUMN.relationshipWithCompany,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyMemberTypeRelation)
      .mixin(companyMemberRelation)
      .mixin(corporationCompanyMemberRelation)
      .mixin(changeRequestsRelation)
      .mixin(toCompanyPositionForChangeRequestsRelation)
      .mixin(companyInterestsRelation)
      .mixin(companyOwnershipsRelation)
      .mixin(companySharesRelation)

      // table name
      .map(TABLE_NAME.COMPANY_POSITION);
  });
});
