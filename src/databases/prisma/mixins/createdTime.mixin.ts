import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default (
  attribute: string = ATTRIBUTE_DEFAULT.createdTime,
  column: string = COLUMN_DEFAULT.createdTime,
) => {
  return createMixin((createdTimeMixin) => {
    createdTimeMixin.dateTime(attribute, {
      default: { now: true },
      map: column,
    });
  });
};
