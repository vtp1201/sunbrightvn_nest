import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/ProcessLog';
import { createdTime, deleted } from '../mixins';

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
