import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Syslog';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.SYSLOG, (SyslogModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
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
    SyslogModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.apiMethodId)
      .raw(INDEX.countryId)
      .raw(INDEX.syslogTypeId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.SYSLOG);
  });
});
