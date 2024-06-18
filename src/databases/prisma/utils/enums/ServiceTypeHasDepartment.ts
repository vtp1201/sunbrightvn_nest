import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceTypeId = 'serviceTypeId',
  departmentId = 'departmentId',
}

export enum COLUMN {
  serviceTypeId = 'service_type_id',
  departmentId = 'department_id',
}

export enum RELATION {
  serviceType = RELATION_DEFAULT.serviceType,
  department = RELATION_DEFAULT.department,
}

export default {
  ATTRIBUTE,
  RELATION,
};
