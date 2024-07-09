import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/NotificationTemplateHasRole';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.NOTIFICATION_TEMPLATE_HAS_ROLE,
  (NotificationTemplateHasRoleModel) => {
    // relations
    const notificationTemplateHasRole = manyToMany({
      attributeA: ATTRIBUTE.notificationTemplateId,
      attributeB: ATTRIBUTE.roleId,
      modelNameA: MODEL_NAME.NOTIFICATION_TEMPLATE,
      modelNameB: MODEL_NAME.ROLE,
    });

    // defined Model
    process.nextTick(() => {
      NotificationTemplateHasRoleModel.int(ATTRIBUTE.roleId, {
        map: COLUMN.roleId,
      })
        .int(ATTRIBUTE.notificationTemplateId, {
          map: COLUMN.notificationTemplateId,
        })
        .mixin(notificationTemplateHasRole);
    });
  },
);
