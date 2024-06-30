import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/AgentType';
import { deleted, oneToMany } from '../mixins';
import Agent from './Agent';

export default createModel(MODEL_NAME.AGENT_TYPE, (AgentTypeModel) => {
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

  // defined Relation
  const agentsRelation = oneToMany({
    model: Agent,
    relation: RELATION.agents,
  });

  // defined Model
  process.nextTick(() => {
    AgentTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(agentsRelation)

      // table name
      .map(TABLE_NAME.AGENT_TYPE);
  });
});
