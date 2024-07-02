import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  RELATION,
} from '../utils/enums/CompanyMemberReference';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { companyMember, companyMemberIssueReference, country } from '.';

export default createModel(
  MODEL_NAME.COMPANY_MEMBER_REFERENCES,
  (CompanyMemberReferenceModel) => {
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

    // defined relations
    const companyMemberRelation = oneToOne({
      attribute: ATTRIBUTE.companyMemberId,
      model: companyMember,
      relation: RELATION.companyMember,
    });
    const companyMemberIssueReferenceRelation = oneToOne({
      attribute: ATTRIBUTE.companyMemberIssueReferenceId,
      model: companyMemberIssueReference,
      relation: RELATION.companyMemberIssueReference,
      option: { optional: true },
    });
    const phoneCountryRelation = oneToOne({
      attribute: ATTRIBUTE.phoneCountryId,
      model: country,
      relation: RELATION.phoneCountry,
      option: { optional: true },
    });

    // defined Model
    process.nextTick(() => {
      CompanyMemberReferenceModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.companyMemberId, {
          map: COLUMN.companyMemberId,
        })
        .int(ATTRIBUTE.companyMemberIssueReferenceId, {
          map: COLUMN.companyMemberIssueReferenceId,
          optional: true,
        })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.phoneNumber, {
          map: COLUMN.phoneNumber,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .int(ATTRIBUTE.phoneCountryId, {
          map: COLUMN.phoneCountryId,
          optional: true,
        })
        .string(ATTRIBUTE.fax, {
          map: COLUMN.fax,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.email, {
          map: COLUMN.email,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.address, {
          map: COLUMN.address,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(companyMemberRelation)
        .mixin(companyMemberIssueReferenceRelation)
        .mixin(phoneCountryRelation)

        // table name
        .map(TABLE_NAME.COMPANY_MEMBER_REFERENCES);
    });
  },
);
