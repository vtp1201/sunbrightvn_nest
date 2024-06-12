import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/GroupHasUser';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.GROUP_HAS_USER, (GroupHasUserModel) => {
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
    GroupHasUserModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.groupId, {
        map: COLUMN.groupId,
      })

      // dateTime marks
      .mixin(initDeleted)

      // ids
      .id({ fields: [ATTRIBUTE.groupId, ATTRIBUTE.userId] })

      // table name
      .map(TABLE_NAME.GROUP_HAS_USER);
  });
});
