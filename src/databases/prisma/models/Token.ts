import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Token';
import { createdTime, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.TOKEN, (TokenModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
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
