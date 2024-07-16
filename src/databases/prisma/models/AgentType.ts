import { createModel } from 'schemix';

import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/AgentType';
import { agent } from './';

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
    model: agent,
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
