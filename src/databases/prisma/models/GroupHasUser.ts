import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/GroupHasUser';
import { manyToMany } from '../mixins';

export default createModel(MODEL_NAME.GROUP_HAS_USER, (GroupHasUserModel) => {
  // relations
  const groupHasUser = manyToMany({
    attributeA: ATTRIBUTE.groupId,
    attributeB: ATTRIBUTE.userId,
    modelNameA: MODEL_NAME.TEAM_GROUP,
    modelNameB: MODEL_NAME.USER,
  });

  // defined Model
  process.nextTick(() => {
    GroupHasUserModel.int(ATTRIBUTE.userId, {
      map: COLUMN.userId,
    })
      .int(ATTRIBUTE.groupId, {
        map: COLUMN.groupId,
      })
      .mixin(groupHasUser);
  });
});
