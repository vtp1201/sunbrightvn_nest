import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Agent';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  agency,
  country,
  agentType,
  bank,
  processLog,
  token,
  email,
  task,
  taskHasAgent,
} from './';

export default createModel(MODEL_NAME.AGENT, (AgentModel) => {
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
  const agencyRelation = oneToOne({
    attribute: ATTRIBUTE.agencyId,
    model: agency,
    relation: RELATION.agency,
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const agentTypeRelation = oneToOne({
    attribute: ATTRIBUTE.agentTypeId,
    model: agentType,
    relation: RELATION.agentType,
  });
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: bank,
    relation: RELATION.bank,
    option: { optional: true },
  });
  const processLogsRelation = oneToMany({
    model: processLog,
    relation: RELATION.processLogs,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });
  const emailsRelation = oneToMany({
    model: email,
    relation: RELATION.emails,
  });
  const taskHasAgentsRelation = oneToMany({
    model: taskHasAgent,
    relation: RELATION.taskHasAgents,
  });

  // defined Model
  process.nextTick(() => {
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
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(agencyRelation)
      .mixin(countryRelation)
      .mixin(agentTypeRelation)
      .mixin(bankRelation)
      .mixin(processLogsRelation)
      .mixin(tokensRelation)
      .mixin(emailsRelation)
      .mixin(taskHasAgentsRelation)

      // table name
      .map(TABLE_NAME.AGENT);
  });
});
