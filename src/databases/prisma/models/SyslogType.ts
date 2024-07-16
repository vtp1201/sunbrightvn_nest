import { createModel } from 'schemix';

import { syslog } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/SyslogType';

export default createModel(MODEL_NAME.SYSLOG_TYPE, (SyslogTypeModel) => {
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

  // defined Relations
  const syslogsRelation = oneToMany({
    model: syslog,
    relation: RELATION.syslogs,
  });

  // defined Model
  process.nextTick(() => {
    SyslogTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_200,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(syslogsRelation)

      // table name
      .map(TABLE_NAME.SYSLOG_TYPE);
  });
});
