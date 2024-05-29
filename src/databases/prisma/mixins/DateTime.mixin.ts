import { createMixin } from 'schemix';

export default createMixin((DateTimeMixin) => {
  DateTimeMixin.dateTime('createdTime', { default: { now: true } }).dateTime(
    'updatedTime',
    { updatedAt: true },
  );
});
