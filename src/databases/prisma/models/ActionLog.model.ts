import { createModel } from 'schemix';

import { ATTRIBUTE, COLUMN_NAME } from 'src/utilities/enums/actionLog';
import { MODEL_NAME } from '@utilities';
// import PostModel from './Post.model';
// import UUIDMixin from '../mixins/UUID.mixin';

export default createModel('actionLog', (ActionLogModel) => {
  ActionLogModel.int(ATTRIBUTE.id, {
    map: COLUMN_NAME.id,
  });
});
