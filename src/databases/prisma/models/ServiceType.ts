import { createModel } from 'schemix';

import {
  actionProcessStep,
  Package,
  service,
  serviceType,
  serviceTypeHasDepartment,
  website,
} from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ServiceType';

export default createModel(MODEL_NAME.SERVICE_TYPE, (ServiceTypeModel) => {
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

  // defined Relations
  const actionProcessStepsRelation = oneToMany({
    model: actionProcessStep,
    relation: RELATION.actionProcessSteps,
  });
  const packagesRelation = oneToMany({
    model: Package,
    relation: RELATION.packages,
  });
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });
  const websiteRelation = oneToOne({
    attribute: ATTRIBUTE.websiteId,
    map: INDEX_NAME.websiteId,
    model: website,
    relation: RELATION.website,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    map: INDEX_NAME.parentId,
    model: serviceType,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: serviceType,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const serviceTypeHasDepartmentsRelation = oneToMany({
    model: serviceTypeHasDepartment,
    relation: RELATION.serviceTypeHasDepartments,
  });

  // defined Model
  process.nextTick(() => {
    ServiceTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.left, {
        map: COLUMN.left,
        optional: true,
      })
      .int(ATTRIBUTE.right, {
        map: COLUMN.right,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: true,
      })
      .boolean(ATTRIBUTE.isRequired, {
        map: COLUMN.isRequired,
        default: false,
      })
      .boolean(ATTRIBUTE.isOnly, {
        map: COLUMN.isOnly,
        default: false,
      })
      .json(ATTRIBUTE.processStepTypes, {
        map: COLUMN.processStepTypes,
        optional: true,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(actionProcessStepsRelation)
      .mixin(packagesRelation)
      .mixin(servicesRelation)
      .mixin(websiteRelation)
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(serviceTypeHasDepartmentsRelation)

      // indexes
      .raw(INDEX.parentId)
      .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.SERVICE_TYPE);
  });
});
