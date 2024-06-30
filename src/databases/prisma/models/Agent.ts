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
import Agency from './Agency';
import Country from './Country';
import AgentType from './AgentType';
import Bank from './Bank';
import ProcessLog from './ProcessLog';
import Token from './Token';
import Email from './Email';
import Task from './Task';

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
    model: Agency,
    relation: RELATION.agency,
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: Country,
    relation: RELATION.country,
  });
  const agentTypeRelation = oneToOne({
    attribute: ATTRIBUTE.agentTypeId,
    model: AgentType,
    relation: RELATION.agentType,
  });
  const bankRelation = oneToOne({
    attribute: ATTRIBUTE.bankId,
    model: Bank,
    relation: RELATION.bank,
  });
  const processLogsRelation = oneToMany({
    model: ProcessLog,
    relation: RELATION.processLogs,
  });
  const tokensRelation = oneToMany({
    model: Token,
    relation: RELATION.tokens,
  });
  const emailsRelation = oneToMany({
    model: Email,
    relation: RELATION.emails,
  });
  const tasksRelation = oneToMany({
    model: Task,
    relation: RELATION.tasks,
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
      .mixin(tasksRelation)

      // table name
      .map(TABLE_NAME.AGENT);
  });
});
