import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/ServiceHasFileTemplate';
import { oneToOne } from '../mixins';
import { fileTemplate, service } from '.';

export default createModel(
  MODEL_NAME.SERVICE_HAS_FILE_TEMPLATE,
  (ServiceHasFileTemplateModel) => {
    // defined Relations
    const serviceRelation = oneToOne({
      attribute: ATTRIBUTE.serviceId,
      relation: RELATION.service,
      model: service,
    });
    const fileTemplateRelation = oneToOne({
      attribute: ATTRIBUTE.fileTemplateId,
      relation: RELATION.fileTemplate,
      model: fileTemplate,
    });

    // defined Model
    process.nextTick(() => {
      ServiceHasFileTemplateModel.int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
        .int(ATTRIBUTE.fileTemplateId, {
          map: COLUMN.fileTemplateId,
        })
        .json(ATTRIBUTE.typeConfigs, {
          map: COLUMN.typeConfigs,
          optional: true,
        })

        // relations
        .mixin(serviceRelation)
        .mixin(fileTemplateRelation)

        // ids
        .id({
          fields: [ATTRIBUTE.serviceId, ATTRIBUTE.fileTemplateId],
        })

        // table name
        .map(TABLE_NAME.SERVICE_HAS_FILE_TEMPLATE);
    });
  },
);
