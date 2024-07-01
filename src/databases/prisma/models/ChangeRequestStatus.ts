import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/ChangeRequestStatus';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { changeRequest, serviceChangeOfficer } from '.';

export default createModel(
  MODEL_NAME.CHANGE_REQUEST_STATUS,
  (ChangeRequestStatusModel) => {
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
    // defined Relations
    const changeRequestsRelation = oneToMany({
      model: changeRequest,
      relation: RELATION.changeRequests,
    });
    const serviceChangeOfficersRelation = oneToMany({
      model: serviceChangeOfficer,
      relation: RELATION.serviceChangeOfficers,
    });

    // defined Model
    process.nextTick(() => {
      ChangeRequestStatusModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_45,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(changeRequestsRelation)
        .mixin(serviceChangeOfficersRelation)

        // table name
        .map(TABLE_NAME.CHANGE_REQUEST_STATUS);
    });
  },
);
