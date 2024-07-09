import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  serviceTypeId = 'serviceTypeId',
  departmentId = 'departmentId',
  isMain = 'isMain',
}

export enum COLUMN {
  serviceTypeId = 'service_type_id',
  departmentId = 'department_id',
  isMain = 'is_main',
}

export enum RELATION {
  serviceType = RELATION_DEFAULT.serviceType,
  department = RELATION_DEFAULT.department,
}

export default {
  ATTRIBUTE,
  RELATION,
};
