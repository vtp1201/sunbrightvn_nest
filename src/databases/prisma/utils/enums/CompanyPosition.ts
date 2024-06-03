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
  isDeleted = 'isDeleted',
  isContactPerson = 'isContactPerson',
  relationshipWithCompany = 'relationshipWithCompany',
  isHandleRelationshipContactPerson = 'isHandleRelationshipContactPerson',
  positionDetail = 'positionDetail',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
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
  isDeleted = 'is_deleted',
  isContactPerson = 'is_contact_person',
  relationshipWithCompany = 'relationship_with_company',
  isHandleRelationshipContactPerson = 'is_handle_relationship_contact_person',
  positionDetail = 'position_detail',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  companyMemberType = RELATION_DEFAULT.companyMemberType,
  corporationCompanyMember = RELATION_DEFAULT.corporationCompanyMember,
  changeRequest = RELATION_DEFAULT.changeRequest,
  companyInterests = RELATION_DEFAULT.companyInterests,
  companyOwnerships = RELATION_DEFAULT.companyOwnerships,
  companyShares = RELATION_DEFAULT.companyShares,
}

export default {
  ATTRIBUTE,
  RELATION,
};
