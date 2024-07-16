import { createModel } from 'schemix';

import { company, companySuffix, task } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/ProposedName';

export default createModel(MODEL_NAME.PROPOSED_NAME, (ProposedNameModel) => {
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
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    option: { optional: true },
  });
  const companySuffixRelation = oneToOne({
    attribute: ATTRIBUTE.companySuffixId,
    model: companySuffix,
    relation: RELATION.companySuffix,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    model: task,
    relation: RELATION.task,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    ProposedNameModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.companySuffixId, {
        map: COLUMN.companySuffixId,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isApprove, {
        map: COLUMN.isApprove,
        default: false,
      })
      .boolean(ATTRIBUTE.isSentAgent, {
        map: COLUMN.isSentAgent,
        default: false,
      })
      .boolean(ATTRIBUTE.isSentCustomer, {
        map: COLUMN.isSentCustomer,
        default: false,
      })
      .boolean(ATTRIBUTE.isConfirmed, {
        map: COLUMN.isConfirmed,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyRelation)
      .mixin(companySuffixRelation)
      .mixin(taskRelation)

      // indexes
      // .raw(INDEX.companyId)
      // .raw(INDEX.companySuffixId)
      // .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.PROPOSED_NAME);
  });
});
