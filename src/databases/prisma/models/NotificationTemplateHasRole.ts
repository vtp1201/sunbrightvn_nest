import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/NotificationTemplateHasRole';

export default createModel(
  MODEL_NAME.NOTIFICATION_TEMPLATE_HAS_ROLE,
  (NotificationTemplateHasRoleModel) => {
    // defined Model
    process.nextTick(() => {
      NotificationTemplateHasRoleModel.int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })
        .int(ATTRIBUTE.notificationTemplateId, {
          map: COLUMN.notificationTemplateId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.notificationTemplateId, ATTRIBUTE.roleId],
        })

        // table name
        .map(TABLE_NAME.NOTIFICATION_TEMPLATE_HAS_ROLE);
    });
  },
);
