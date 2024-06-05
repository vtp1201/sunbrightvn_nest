import { createModel } from 'schemix';

import {
  MODEL_NAME,
  TABLE_NAME,
  RAW_DATE_TIME,
  RAW_NUMBER,
  RAW_STRING,
} from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyPosition';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.COMPANY_POSITION,
  (CompanyPositionModel) => {
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
      .mixin(createdTime)
      .mixin(updatedTime)
      .mixin(deleted)

      // table name
      .map(TABLE_NAME.COMPANY_POSITION);
  },
);
