import { createModel } from 'schemix';

import { Process, answer, country, customer, gender, titleName, user } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Person';

export default createModel(MODEL_NAME.PERSON, (PersonModel) => {
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
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    isNeedName: true,
    option: { optional: true },
  });
  const genderRelation = oneToOne({
    attribute: ATTRIBUTE.genderId,
    model: gender,
    relation: RELATION.gender,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    model: country,
    relation: RELATION.phoneCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const titleNameRelation = oneToOne({
    attribute: ATTRIBUTE.titleNameId,
    model: titleName,
    relation: RELATION.titleName,
    option: { optional: true },
  });
  const processesRelation = oneToMany({
    model: Process,
    relation: RELATION.processes,
  });
  const usersRelation = oneToMany({
    model: user,
    relation: RELATION.users,
  });

  // defined Model
  process.nextTick(() => {
    PersonModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .string(ATTRIBUTE.firstName, {
        map: COLUMN.firstName,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .string(ATTRIBUTE.lastName, {
        map: COLUMN.lastName,
        optional: true,
        raw: RAW_STRING.LENGTH_200,
      })
      .int(ATTRIBUTE.genderId, {
        map: COLUMN.genderId,
        optional: true,
      })
      .string(ATTRIBUTE.phone, {
        map: COLUMN.phone,
        optional: true,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.phoneNumber, {
        map: COLUMN.phoneNumber,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.email, {
        map: COLUMN.email,
        optional: true,
        raw: RAW_STRING.LENGTH_45,
      })
      .dateTime(ATTRIBUTE.birthday, {
        map: COLUMN.birthday,
        optional: true,
        raw: RAW_DATE_TIME.DATE_ONLY,
      })
      .int(ATTRIBUTE.titleNameId, {
        map: COLUMN.titleNameId,
        optional: true,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.ssn, {
        map: COLUMN.ssn,
        optional: true,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.image, {
        map: COLUMN.image,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        optional: true,
        default: 1,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(customersRelation)
      .mixin(countryRelation)
      .mixin(genderRelation)
      .mixin(phoneCountryRelation)
      .mixin(titleNameRelation)
      .mixin(processesRelation)
      .mixin(usersRelation)

      // indexes
      // .raw(INDEX.countryId)
      // .raw(INDEX.genderId)
      // .raw(INDEX.phoneCountryId)
      // .raw(INDEX.titleNameId)

      // table name
      .map(TABLE_NAME.PERSON);
  });
});
