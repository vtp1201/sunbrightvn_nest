import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Department';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { serviceTypeHasDepartment } from '.';

export default createModel(MODEL_NAME.DEPARTMENT, (DepartmentModel) => {
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
  const serviceTypeHasDepartmentsRelation = oneToMany({
    model: serviceTypeHasDepartment,
    relation: RELATION.serviceTypeHasDepartments,
  });

  // defined Model
  process.nextTick(() => {
    DepartmentModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        default: '',
        raw: RAW_STRING.LENGTH_45,
      })
      .json(ATTRIBUTE.config, {
        map: COLUMN.config,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(serviceTypeHasDepartmentsRelation)

      // table name
      .map(TABLE_NAME.DEPARTMENT);
  });
});
