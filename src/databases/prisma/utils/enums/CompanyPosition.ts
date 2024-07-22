import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyMemberId = 'companyMemberId',
  companyMemberTypeId = 'companyMemberTypeId',
  corporationCompanyMemberId = 'corporationCompanyMemberId',
  numberAllotted = 'numberAllotted',
  percentOfInterest = 'percentOfInterest',
  ownPercent = 'ownPercent',
  dateOfAppointment = 'dateOfAppointment',
  dateOfResign = 'dateOfResign',
  isAppointed = 'isAppointed',
  isApproved = 'isApproved',
  isContactPerson = 'isContactPerson',
  relationshipWithCompany = 'relationshipWithCompany',
  isHandleRelationshipContactPerson = 'isHandleRelationshipContactPerson',
  positionDetail = 'positionDetail',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  companyMemberId = 'company_member_id',
  companyMemberTypeId = 'company_member_type_id',
  corporationCompanyMemberId = 'corporation_company_member_id',
  numberAllotted = 'number_allotted',
  percentOfInterest = 'percent_of_interest',
  ownPercent = 'own_percent',
  dateOfAppointment = 'date_of_appointment',
  dateOfResign = 'date_of_resign',

  isAppointed = 'is_appointed',
  isApproved = 'is_approved',
  isContactPerson = 'is_contact_person',
  relationshipWithCompany = 'relationship_with_company',
  isHandleRelationshipContactPerson = 'is_handle_relationship_contact_person',
  positionDetail = 'position_detail',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  companyMemberType = RELATION_DEFAULT.companyMemberType,
  corporationCompanyMember = RELATION_DEFAULT.corporationCompanyMember,
  changeRequests = RELATION_DEFAULT.changeRequests,
  toCompanyPositionForChangeRequests = RELATION_DEFAULT.toCompanyPositionForChangeRequests,
  companyInterests = RELATION_DEFAULT.companyInterests,
  companyOwnerships = RELATION_DEFAULT.companyOwnerships,
  companyShares = RELATION_DEFAULT.companyShares,
}

const tableName = TABLE_NAME.COMPANY_POSITION;
export enum INDEX_NAME {
  companyMemberTypeId = `"${tableName}_${COLUMN.companyMemberTypeId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  corporationCompanyMemberId = `"${tableName}_${COLUMN.corporationCompanyMemberId}_fkey"`,
}

export enum INDEX {
  companyMemberTypeId = `@@index([${ATTRIBUTE.companyMemberTypeId}], map: ${INDEX_NAME.companyMemberTypeId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  corporationCompanyMemberId = `@@index([${ATTRIBUTE.corporationCompanyMemberId}], map: ${INDEX_NAME.corporationCompanyMemberId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
