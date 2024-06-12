import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  fileTemplateId = 'fileTemplateId',
  rankingPartnerTypeId = 'rankingPartnerTypeId',
}

export enum COLUMN {
  fileTemplateId = 'file_template_id',
  rankingPartnerTypeId = 'ranking_partner_type_id',
}

export enum RELATION {
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  rankingPartnerType = RELATION_DEFAULT.rankingPartnerType,
}

export default {
  ATTRIBUTE,
  RELATION,
};
