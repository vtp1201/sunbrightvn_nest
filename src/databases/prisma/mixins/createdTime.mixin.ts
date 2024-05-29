import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default createMixin((createdTimeMixin) => {
  createdTimeMixin.dateTime(ATTRIBUTE_DEFAULT.createdTime, {
    default: { now: true },
    map: COLUMN_DEFAULT.createdTime,
  });
});
