import { createModel } from 'schemix';

import { changeRequestStatus, companyMemberType, fileTemplate } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/ServiceChangeOfficer';

export default createModel(MODEL_NAME.SERVICE_CHANGE_OFFICER, (ServiceChangeOfficerModel) => {
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
  const changeRequestStatusRelation = oneToOne({
    attribute: ATTRIBUTE.changeRequestStatusId,
    map: INDEX_NAME.changeRequestStatusId,
    model: changeRequestStatus,
    relation: RELATION.changeRequestStatus,
    option: { optional: true },
  });
  const companyMemberTypeRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberTypeId,
    map: INDEX_NAME.companyMemberTypeId,
    model: companyMemberType,
    relation: RELATION.companyMemberType,
    option: { optional: true },
  });
  const fileTemplatesRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.fileTemplates,
  });

  // defined Model
  process.nextTick(() => {
    ServiceChangeOfficerModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyMemberTypeId, {
        map: COLUMN.companyMemberTypeId,
      })
      .int(ATTRIBUTE.changeRequestStatusId, {
        map: COLUMN.changeRequestStatusId,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(changeRequestStatusRelation)
      .mixin(companyMemberTypeRelation)
      .mixin(fileTemplatesRelation)

      // indexes
      .raw(INDEX.changeRequestStatusId)
      .raw(INDEX.companyMemberTypeId)

      // table name
      .map(TABLE_NAME.SERVICE_CHANGE_OFFICER);
  });
});
