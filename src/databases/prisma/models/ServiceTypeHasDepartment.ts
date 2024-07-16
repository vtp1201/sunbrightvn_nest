import { createModel } from 'schemix';

import { department, serviceType } from '.';
import { oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ServiceTypeHasDepartment';

export default createModel(
  MODEL_NAME.SERVICE_TYPE_HAS_DEPARTMENT,
  (ServiceTypeHasDepartmentModel) => {
    // defined Relations
    const serviceTypeRelation = oneToOne({
      attribute: ATTRIBUTE.serviceTypeId,
      model: serviceType,
      relation: RELATION.serviceType,
    });
    const departmentRelation = oneToOne({
      attribute: ATTRIBUTE.departmentId,
      model: department,
      relation: RELATION.department,
    });

    // defined Model
    process.nextTick(() => {
      ServiceTypeHasDepartmentModel.int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
      })
        .int(ATTRIBUTE.departmentId, {
          map: COLUMN.departmentId,
        })
        .boolean(ATTRIBUTE.isMain, {
          map: COLUMN.isMain,
          default: false,
        })

        // relations
        .mixin(serviceTypeRelation)
        .mixin(departmentRelation)

        // ids
        .id({
          fields: [ATTRIBUTE.departmentId, ATTRIBUTE.serviceTypeId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_TYPE_HAS_DEPARTMENT);
    });
  },
);
