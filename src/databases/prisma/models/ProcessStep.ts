import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/ProcessStep';
import { deleted, oneToMany, oneToOne } from '../mixins';
import {
  Process,
  actionProcessStep,
  emailTemplate,
  emailTrigger,
  note,
  notificationTemplate,
  processStep,
  processStepHasFileTemplate,
  processStepHasRole,
  processStepType,
} from '.';
import { RELATION_DEFAULT } from '../utils/enums/default';

export default createModel(MODEL_NAME.PROCESS_STEP, (ProcessStepModel) => {
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
  const nextActionProcessStepsRelation = oneToMany({
    model: actionProcessStep,
    relation: RELATION.nextActionProcessSteps,
    fromRelation: RELATION_DEFAULT.processStepChildren,
  });
  const actionProcessStepsRelation = oneToMany({
    model: actionProcessStep,
    relation: RELATION.actionProcessSteps,
    fromRelation: RELATION_DEFAULT.processStepParent,
  });
  const emailTemplatesRelation = oneToMany({
    model: emailTemplate,
    relation: RELATION.emailTemplates,
  });
  const emailTriggersRelation = oneToMany({
    model: emailTrigger,
    relation: RELATION.emailTriggers,
  });
  const notesRelation = oneToMany({
    model: note,
    relation: RELATION.notes,
  });
  const notificationTemplatesRelation = oneToMany({
    model: notificationTemplate,
    relation: RELATION.notificationTemplates,
  });
  const processesRelation = oneToMany({
    model: Process,
    relation: RELATION.processes,
  });
  const processStepTypeRelation = oneToOne({
    attribute: ATTRIBUTE.processStepTypeId,
    model: processStepType,
    relation: RELATION.processStepType,
  });
  const parentRelation = oneToOne({
    attribute: ATTRIBUTE.parentId,
    model: processStep,
    relation: RELATION.parent,
    isNeedName: true,
    option: { optional: true },
  });
  const childrenRelation = oneToMany({
    model: processStep,
    relation: RELATION.children,
    fromRelation: RELATION.parent,
  });
  const processStepHasFileTemplatesRelation = oneToMany({
    model: processStepHasFileTemplate,
    relation: RELATION.processStepHasFileTemplates,
  });
  const processStepHasRolesRelation = oneToMany({
    model: processStepHasRole,
    relation: RELATION.processStepHasRoles,
  });

  // defined Model
  process.nextTick(() => {
    ProcessStepModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.processStepTypeId, {
        map: COLUMN.processStepTypeId,
      })
      .int(ATTRIBUTE.value, {
        map: COLUMN.value,
        unique: true,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.left, {
        map: COLUMN.left,
        optional: true,
      })
      .int(ATTRIBUTE.right, {
        map: COLUMN.right,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .string(ATTRIBUTE.descriptionDisplay, {
        map: COLUMN.descriptionDisplay,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .boolean(ATTRIBUTE.isGeneratedFile, {
        map: COLUMN.isGeneratedFile,
        default: false,
      })
      .boolean(ATTRIBUTE.isSendLinkSigned, {
        map: COLUMN.isSendLinkSigned,
        default: false,
      })
      .int(ATTRIBUTE.order, {
        map: COLUMN.order,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(nextActionProcessStepsRelation)
      .mixin(actionProcessStepsRelation)
      .mixin(emailTemplatesRelation)
      .mixin(emailTriggersRelation)
      .mixin(notesRelation)
      .mixin(notificationTemplatesRelation)
      .mixin(processesRelation)
      .mixin(processStepTypeRelation)
      .mixin(parentRelation)
      .mixin(childrenRelation)
      .mixin(processStepHasFileTemplatesRelation)
      .mixin(processStepHasRolesRelation)

      // indexes
      // .raw(INDEX.parentId)
      // .raw(INDEX.processStepTypeId)

      // table name
      .map(TABLE_NAME.PROCESS_STEP);
  });
});
