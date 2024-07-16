import { createModel } from 'schemix';

import { Process, agent, companyMember, fileTemplate } from '.';
import { createdTime, deleted, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/ProcessLog';

export default createModel(MODEL_NAME.PROCESS_LOG, (ProcessLogModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
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
  const agentRelation = oneToOne({
    attribute: ATTRIBUTE.agentId,
    model: agent,
    relation: RELATION.agent,
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    isNeedName: true,
    option: { optional: true },
  });
  const belongToCompanyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.belongToCompanyMemberId,
    model: companyMember,
    relation: RELATION.belongToCompanyMember,
    isNeedName: true,
    option: { optional: true },
  });
  const fileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.fileTemplateId,
    model: fileTemplate,
    relation: RELATION.fileTemplate,
    option: { optional: true },
  });
  const processRelation = oneToOne({
    attribute: ATTRIBUTE.processId,
    model: Process,
    relation: RELATION.process,
  });

  // defined Model
  process.nextTick(() => {
    ProcessLogModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.processId, {
        map: COLUMN.processId,
      })
      .boolean(ATTRIBUTE.isFinished, {
        map: COLUMN.isFinished,
        default: false,
      })
      .dateTime(ATTRIBUTE.finishedTime, {
        map: COLUMN.finishedTime,
        optional: true,
      })
      .boolean(ATTRIBUTE.isLogMail, {
        map: COLUMN.isLogMail,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemind, {
        map: COLUMN.isRemind,
        default: false,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.agentId, {
        map: COLUMN.agentId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.belongToCompanyMemberId, {
        map: COLUMN.belongToCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.emailTemplateId, {
        map: COLUMN.emailTemplateId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(agentRelation)
      .mixin(companyMemberRelation)
      .mixin(belongToCompanyMemberRelation)
      .mixin(fileTemplateRelation)
      .mixin(processRelation)

      // indexes
      // .raw(INDEX.agentId)
      // .raw(INDEX.belongToCompanyMemberId)
      // .raw(INDEX.companyMemberId)
      // .raw(INDEX.fileTemplateId)
      // .raw(INDEX.processId)

      // table name
      .map(TABLE_NAME.PROCESS_LOG);
  });
});
