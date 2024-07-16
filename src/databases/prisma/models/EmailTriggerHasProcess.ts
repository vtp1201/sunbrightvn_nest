import { createModel } from 'schemix';

import { Process, emailTemplate, emailTrigger } from '.';
import { createdTime, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/EmailTriggerHasProcess';

export default createModel(MODEL_NAME.EMAIL_TRIGGER_HAS_PROCESS, (EmailTriggerHasProcessModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });

  // defined relations
  const emailTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.emailTemplateId,
    model: emailTemplate,
    relation: RELATION.emailTemplate,
  });
  const emailTriggerRelation = oneToOne({
    attribute: ATTRIBUTE.emailTriggerId,
    model: emailTrigger,
    relation: RELATION.emailTrigger,
  });
  const processRelation = oneToOne({
    attribute: ATTRIBUTE.processId,
    model: Process,
    relation: RELATION.process,
  });

  // defined Model
  process.nextTick(() => {
    EmailTriggerHasProcessModel.int(ATTRIBUTE.emailTriggerId, {
      map: COLUMN.emailTriggerId,
    })
      .int(ATTRIBUTE.processId, {
        map: COLUMN.processId,
      })
      .int(ATTRIBUTE.emailTemplateId, {
        map: COLUMN.emailTemplateId,
      })
      .int(ATTRIBUTE.isRemind, {
        map: COLUMN.isRemind,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)

      // relations
      .mixin(emailTemplateRelation)
      .mixin(emailTriggerRelation)
      .mixin(processRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.emailTemplateId, ATTRIBUTE.emailTriggerId, ATTRIBUTE.processId],
      })

      // indexes
      // .raw(INDEX.emailTriggerId)
      // .raw(INDEX.emailTemplateId)
      // .raw(INDEX.processId)

      // table name
      .map(TABLE_NAME.EMAIL_TRIGGER_HAS_PROCESS);
  });
});
