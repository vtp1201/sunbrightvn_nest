import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/ServiceTypeHasDepartment';

export default createModel(
  MODEL_NAME.SERVICE_TYPE_HAS_DEPARTMENT,
  (ServiceTypeHasDepartmentModel) => {
    // defined Model
    process.nextTick(() => {
      ServiceTypeHasDepartmentModel.int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
      })
        .int(ATTRIBUTE.departmentId, {
          map: COLUMN.departmentId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.departmentId, ATTRIBUTE.serviceTypeId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_TYPE_HAS_DEPARTMENT);
    });
  },
);
