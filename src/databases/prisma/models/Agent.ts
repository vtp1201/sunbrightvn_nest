import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Agent';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.AGENT, (AgentModel) => {
  AgentModel.int(ATTRIBUTE.id, {
    map: COLUMN.id,
    id: true,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.name, {
      map: COLUMN.name,
      raw: RAW_STRING.LENGTH_200,
      optional: true,
    })
    .string(ATTRIBUTE.email, {
      map: COLUMN.email,
      raw: RAW_STRING.LENGTH_200,
      optional: true,
    })
    .int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
      optional: true,
    })
    .int(ATTRIBUTE.agencyId, {
      map: COLUMN.agencyId,
    })
    .int(ATTRIBUTE.agentTypeId, {
      map: COLUMN.agentTypeId,
    })
    .int(ATTRIBUTE.bankId, {
      map: COLUMN.bankId,
      optional: true,
    })
    .boolean(ATTRIBUTE.isHasNominee, {
      map: COLUMN.isHasNominee,
      default: false,
      optional: true,
    })

    // dateTime marks
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.AGENT);
});
