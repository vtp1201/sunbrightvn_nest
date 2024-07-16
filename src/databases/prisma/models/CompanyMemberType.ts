import { createModel } from 'schemix';

import {
  companyMemberType,
  companyPosition,
  fileTemplateHasCompanyMemberType,
  service,
  serviceChangeOfficer,
} from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyMemberType';

export default createModel(MODEL_NAME.COMPANY_MEMBER_TYPE, (CompanyMemberTypeModel) => {
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
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    model: companyMemberType,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: companyMemberType,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const companyPositionsRelation = oneToMany({
    model: companyPosition,
    relation: RELATION.companyPositions,
  });
  const fileTemplateHasCompanyMemberTypesRelation = oneToMany({
    model: fileTemplateHasCompanyMemberType,
    relation: RELATION.fileTemplateHasCompanyMemberTypes,
  });
  const serviceChangeOfficersRelation = oneToMany({
    model: serviceChangeOfficer,
    relation: RELATION.serviceChangeOfficers,
  });
  const servicesRelation = oneToMany({
    model: service,
    relation: RELATION.services,
  });

  // defined Model
  process.nextTick(() => {
    CompanyMemberTypeModel.int(ATTRIBUTE.id, {
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
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRequired, {
        map: COLUMN.isRequired,
        default: false,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(companyPositionsRelation)
      .mixin(fileTemplateHasCompanyMemberTypesRelation)
      .mixin(serviceChangeOfficersRelation)
      .mixin(servicesRelation)

      // table name
      .map(TABLE_NAME.COMPANY_MEMBER_TYPE);
  });
});
