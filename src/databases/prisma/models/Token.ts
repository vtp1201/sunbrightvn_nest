import { createModel } from 'schemix';

import { agent, companyMember, fileTemplate, task, user, website } from '.';
import { createdTime, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Token';

export default createModel(MODEL_NAME.TOKEN, (TokenModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });

  // defined Relations
  const agentRelation = oneToOne({
    attribute: ATTRIBUTE.agentId,
    map: INDEX_NAME.agentId,
    model: agent,
    relation: RELATION.agent,
    option: { optional: true },
  });
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    map: INDEX_NAME.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    isNeedName: true,
    option: { optional: true },
  });
  const belongToCompanyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.belongToCompanyMemberId,
    map: INDEX_NAME.belongToCompanyMemberId,
    model: companyMember,
    relation: RELATION.belongToCompanyMember,
    isNeedName: true,
    option: { optional: true },
  });
  const fileTemplateRelation = oneToOne({
    attribute: ATTRIBUTE.fileTemplateId,
    map: INDEX_NAME.fileTemplateId,
    model: fileTemplate,
    relation: RELATION.fileTemplate,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    map: INDEX_NAME.taskId,
    model: task,
    relation: RELATION.task,
    option: { optional: true },
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
    option: { optional: true },
  });
  const websiteRelation = oneToOne({
    attribute: ATTRIBUTE.websiteId,
    map: INDEX_NAME.websiteId,
    model: website,
    relation: RELATION.website,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    TokenModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .string(ATTRIBUTE.accessToken, {
        map: COLUMN.accessToken,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.accessTokenExp, {
        map: COLUMN.accessTokenExp,
      })
      .int(ATTRIBUTE.accessTokenIat, {
        map: COLUMN.accessTokenIat,
      })
      .string(ATTRIBUTE.refreshToken, {
        map: COLUMN.refreshToken,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.refreshTokenExp, {
        map: COLUMN.refreshTokenExp,
      })
      .int(ATTRIBUTE.refreshTokenIat, {
        map: COLUMN.refreshTokenIat,
      })
      .string(ATTRIBUTE.scope, {
        map: COLUMN.scope,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.tokenType, {
        map: COLUMN.tokenType,
        optional: true,
      })
      .string(ATTRIBUTE.xeroTokenType, {
        map: COLUMN.xeroTokenType,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.xeroIdToken, {
        map: COLUMN.xeroIdToken,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.xeroSessionState, {
        map: COLUMN.xeroSessionState,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .int(ATTRIBUTE.agentId, {
        map: COLUMN.agentId,
        optional: true,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
        optional: true,
      })
      .int(ATTRIBUTE.belongToCompanyMemberId, {
        map: COLUMN.belongToCompanyMemberId,
        optional: true,
      })
      .string(ATTRIBUTE.ipAddress, {
        map: COLUMN.ipAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.countRequest, {
        map: COLUMN.countRequest,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)

      // relations
      .mixin(agentRelation)
      .mixin(companyMemberRelation)
      .mixin(belongToCompanyMemberRelation)
      .mixin(fileTemplateRelation)
      .mixin(taskRelation)
      .mixin(userRelation)
      .mixin(websiteRelation)

      // indexes
      .raw(INDEX.agentId)
      .raw(INDEX.belongToCompanyMemberId)
      .raw(INDEX.companyMemberId)
      .raw(INDEX.fileTemplateId)
      .raw(INDEX.taskId)
      .raw(INDEX.userId)
      .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.TOKEN);
  });
});
