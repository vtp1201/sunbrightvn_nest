import { createModel } from 'schemix';

import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Agent';
import { agency, agentType, bank, country, email, processLog, taskHasAgent, token } from './';

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
    map: INDEX_NAME.agencyId,
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    map: INDEX_NAME.countryId,
    option: { optional: true },
  });
  const agentTypeRelation = oneToOne({
    attribute: ATTRIBUTE.agentTypeId,
    model: agentType,
    relation: RELATION.agentType,
    map: INDEX_NAME.agentTypeId,
  });
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: bank,
    relation: RELATION.bank,
    map: INDEX_NAME.bankId,
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

      // indexes
      .raw(INDEX.agencyId)
      .raw(INDEX.agentTypeId)
      .raw(INDEX.bankId)
      .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.AGENT);
  });
});
