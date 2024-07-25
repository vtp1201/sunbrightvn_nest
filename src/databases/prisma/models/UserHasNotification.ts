import { createModel } from 'schemix';

import { notification, user } from '.';
import { oneToOne } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/UserHasNotification';

export default createModel(MODEL_NAME.USER_HAS_NOTIFICATION, (UserHasNotificationModel) => {
  // defined Relations
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
  });
  const notificationRelation = oneToOne({
    attribute: ATTRIBUTE.notificationId,
    map: INDEX_NAME.notificationId,
    model: notification,
    relation: RELATION.notification,
  });

  // defined Model
  process.nextTick(() => {
    UserHasNotificationModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.notificationId, {
        map: COLUMN.notificationId,
      })
      .boolean(ATTRIBUTE.isRead, {
        map: COLUMN.isRead,
        default: false,
      })
      .dateTime(ATTRIBUTE.readAt, {
        map: COLUMN.readAt,
        raw: RAW_DATE_TIME.DATE_CURRENT,
      })

      // relations
      .mixin(userRelation)
      .mixin(notificationRelation)

      // ids
      .id({
        fields: [ATTRIBUTE.userId, ATTRIBUTE.notificationId],
      })

      // indexes
      .raw(INDEX.notificationId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.USER_HAS_NOTIFICATION);
  });
});
