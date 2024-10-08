export const orderForm = {
  ORDER_FORM_ANGUILLA: 1,
  ORDER_FORM_IBC: 4,
  ORDER_FORM_SEYCHELLES: 10,
  ORDER_FORM_UK: 16,
  ORDER_FORM_BVI: 17,
  ORDER_FORM_HK: 24,
  ORDER_FORM_MARSHALL_ISLANDS: 25,
  ORDER_FORM_MAURITIUS: 32,
  ORDER_FORM_SAMOA: 42,
  ORDER_FORM_KITTS_AND_NEVIS: 48,
  ORDER_FORM_KITTS_AND_NEVIS_1: 52,
  ORDER_FORM_VINCENT_AND_GRENADINES: 56,
  ORDER_FORM_VINCENT_AND_GRENADINES_1: 62,
  ORDER_FORM_UAE: 69,
  ORDER_FORM_DELAWARE: 76,
  ORDER_FORM_BAHAMAS: 77,
  ORDER_FORM_CAYMAN_ISLANDS: 82,
  ORDER_FORM_PANAMA: 83,
  ORDER_FORM_VIETNAM: 87,
  ORDER_FORM_UK_LLP: 88,
  ORDER_FORM_BELIZE_LLC: 89,
  ORDER_FORM_LEGAL_BELIZE_IBC: 149,
  ORDER_FORM_LEGAL_BELIZE_IBC_1: 212,
  ORDER_FORM_SEYCHELLES_WET: 250,
  ORDER_FORM_RAK: 69,
  NEW_ORDER_FORM_BVI: 253,
  NEW_ORDER_FORM_BELIZE: 291,
  NEW_ORDER_FORM_CAYMAN_ISLANDS_VER_2: 309,
};

const uboDeclarationSeyChellesForm = {
  DECLARATION_OF_UBO_SEYCHELLES: 11,
  NEW_DECLARATION_OF_UBO_SEYCHELLES: 244,
  APR2024_NEW_DECLARATION_OF_UBO_SEYCHELLES: 310, // structure name: month year + status template + name template + country name
};

const serviceRafForm = {
  SERVICE_RISK_ASSESSMENT_FORM: 242,
  SERVICE_RISK_ASSESSMENT_FORM_V3: 301,
};

const financeRafForm = {
  FINANCE_RISK_ASSESSMENT_FORM: 243,
  FINANCE_RISK_ASSESSMENT_FORM_V3: 302,
};

const customerRafForm = {
  CUSTOMER_RISK_ASSESSMENT_FORM: 241,
  CUSTOMER_RISK_ASSESSMENT_FORM_INDIVIDUAL_V3: 300,
  CUSTOMER_RISK_ASSESSMENT_FORM_ENTITY_V3: 305,
  CUSTOMER_RISK_ASSESSMENT_FORM_AGENT_V3: 306,
};

const rafForm = {
  ...serviceRafForm,
  ...financeRafForm,
  ...customerRafForm,
  RELATED_PARTY_RISK_RATING_FORM: 303,
  ORDER_RISK_RATING_FORM: 304,
};

export const FILE_TEMPLATE = {
  CDD_FORM: 133,
  PAYMENT_FORM: 213,
  DIRECTOR_RESOLUTION_FORM: 252,
  NEW_UBO_DECLARATION_BVI: 251,
  UBO_DECLARATION_BVI: 219,
  RDW_ANGUILLA: 2,
  SHARE_CERT_ANGUILLA: 3,
  RDW_BELIZE: 5,
  REGISTERS_OF_DIRECTOR_BELIZE: 6,
  REGISTERS_OF_MEMBER_BELIZE: 7,
  REGISTERS_OF_BO_BELIZE: 8,
  SHARE_CERT_BELIZE: 9,
  RDW_SEYCHELLES: 12,
  RDW_SEYCHELLES_WET: 245,
  T_C_SEYCHELLES: 13,
  T_C_SEYCHELLES_WET: 246,
  RDW_AC_RECORD_SEYCHELLES: 14,
  RDW_AC_RECORD_SEYCHELLES_WET: 247,
  SHARE_CERT_SEYCHELLES: 15,
  SHARE_CERT_SEYCHELLES_WET: 248,
  RESOLUTION_OF_DIR_BVI: 18,
  SHARE_CERT_BVI: 19,
  ACCEPTANCE_LETTER_FOR_DIR_BVI: 20,
  ES_SELF_ASSESSMENT_BVI: 21,
  REGISTER_OF_MEMBER_BVI: 22,
  REGISTER_OF_DIRECTOR_BVI: 23,
  BOARD_RESOLUTION_MARSHALL_ISLAND: 26,
  SHARE_CERT_MARSHALL_ISLAND: 27,
  ACCEPTANCE_LETTER_SECRETARY_MARSHALL_ISLAND: 28,
  ACCEPTANCE_LETTER_DIRECTOR_MARSHALL_ISLAND: 29,
  APPLICATION_FOR_SHARE_MARSHALL_ISLAND: 30,
  REGISTER_OF_DIRECTOR_MARSHALL_ISLAND: 31,
  COMPANY_FATCA_MAURITIUS: 33,
  CONSENT_OF_DIRECTOR_MAURITIUS: 34,
  CONSENT_OF_SHAREHOLDER_MAURITIUS: 35,
  STRUCT_CHART_MAURITIUS: 36,
  TERMS_AND_CONDITION_MAURITIUS: 37,
  UBO_CONFIRMATION_AC_MAURITIUS: 38,
  UBO_CONFIRMATION_MAURITIUS: 39,
  DECLARATION_OF_SOURCE_FUND_MAURITIUS: 40,
  INDIVIDUAL_FATCA_MAURITIUS: 41,
  RESOLUTION_OF_DIR_SAMOA: 43,
  SHARE_CERTIFICATE_SAMOA: 44,
  CONSENT_TO_ACT_AS_SECRETARY_SAMOA: 45,
  APPLICATION_FOR_SHARES_SAMOA: 46,
  REGISTER_OF_DIRECTOR_SAMOA: 47,
  ACCEPTANCE_OF_SECRETARY_NEVIS_IBC: 239,
  SHARE_CERTIFICATE_KITTS_IBC: 238,
  MEMBERSHIP_CERTIFICATE_NEVIS_LLC: 237,
  ACCOUNTING_RECORDS_DECLARATION: 236,
  ECONOMIC_SUBSTANCE_FORM_A_BAHAMAS: 235,
  ECONOMIC_SUBSTANCE_FORM_B_BAHAMAS: 234,
  ECONOMIC_SUBSTANCE_FORM_C_BAHAMAS: 233,
  ECONOMIC_SUBSTANCE_FORM_D_BAHAMAS: 232,
  SELF_ASSESSMENT_FORM_CAYMAN: 231,
  SELF_ASSESSMENT_FORM_RAK: 230,
  RESOLUTION_OF_THE_DIRECTOR_CATEGORY_C: 229,
  RESOLUTION_OF_THE_DIRECTOR_CATEGORY_B: 228,
  RESOLUTION_OF_THE_DIRECTOR_CATEGORY_A: 227,
  DECLARATION_BENEFICIAL_OWNER: 226,
  TIN: 225,
  BELIZE_ESR_D: 224,
  BELIZE_ESR_C: 223,
  BELIZE_ESR_B: 222,
  ECONOMIC_SUBSTANCE_RETURN_FORM: 221,
  REGISTERS_OF_UBO_BELIZE_LLC: 220,
  PAYMENT_CONFIRMATION: 213,
  NOTICE_LOCATION_ACCOUNTING_PANAMA: 132,
  FINANCIAL_TRANSACTIONAL_PROFILE_PANAMA: 131,
  ACCOUNTING_RECORD_NOTICE_BELIZE_LLC: 130,
  SELF_CERTIFICATION_FORM_BELIZE_PEP: 129,
  DECLARATION_OF_BENEFICIAL_OWNERS_BELIZE_LLC: 128,
  DECLARATION_OF_BENEFICIAL_OWNERS_BELIZE_IBC: 127,
  REPORT_SUMMARY_SINGAPORE: 126,
  CONSENT_OF_DIRECTOR_SEYCHELLES_WET: 249,
  CONSENT_OF_DIRECTOR_SEYCHELLES: 118,
  TAX_RESIDENCY_SELF_CERTIFICATION_BAHAMAS: 117,
  W_9_BAHAMAS: 116,
  PERSON_QUESTIONNAIRE_CAYMAN: 115,
  BUSINESS_PLAN_FORM: 95,
  DIRECTOR_ACCEPTANCE_LETTER_ANGUILLA: 94,
  REGISTER_OF_MEMBERS: 93,
  REGISTER_OF_MANAGERS: 92,
  OPERATING_AGREEMENT_BELIZE_LLC: 91,
  MEMBERSHIP_CERTIFICATE_BELIZE_LLC: 90,
  SHARE_REGISTER_PANAMA: 86,
  SHARE_CERT_PANAMA: 85,
  MINUTES_OF_MEETING_PANAMA: 84,
  ROD_BAHAMAS: 81,
  REGISTERS_OF_MEMBERS_BAHAMAS: 80,
  SHARE_CERT_BAHAMAS: 79,
  FIRST_MINUTES_BAHAMAS: 78,
  CONSENT_LETTER_RAK: 75,
  MEMORANDUM_RAK: 74,
  APPOINTMENT_AS_RA_RAK: 73,
  SPECIMEN_SIGNATURE_RAK: 72,
  EDD_CONFIRMATION_LETTER_RAK: 71,
  SANCTIONS_POLICY_QUESTIONNAIRE_RAK: 70,
  REGISTERS_SVG_LLC: 68,
  SVGFSA_DECLARATION_SVG_LLC: 67,
  ACCEPTANCE_OF_APPOINTMENT_SVG_LLC: 66,
  OPERATING_AGREEMENT_SVG_LLC: 65,
  MEMBERSHIP_CERTIFICATE_SVG_LLC: 64,
  FIRST_MANAGER_MINUTES_SVG_LLC: 63,
  REGISTERS_SVG_BC: 61,
  SVGFSA_DECLARATION_SVG_BC: 60,
  ACCEPTANCE_OF_APPOINTMENT_SVG_BC: 59,
  SHARE_CERT_SVG_BC: 58,
  FIRST_DIRECTOR_MINUTES_SVG_BC: 57,
  REGISTER_OF_STK_NEVIS_LLC: 55,
  CONSENT_TO_ACT_STK_NEVIS_LLC: 54,
  FATCA_STK_NEVIS_LLC: 53,
  REGISTER_OF_DIR_SHARE_STK_NEVIS_IBC: 51,
  CONSENT_TO_ACT_STK_NEVIS_IBC: 50,
  FATCA_STK_NEVIS_IBC: 49,
  ...orderForm,
  ...rafForm,
  // check id
  // BVI
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_BVI: 262,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_CHANGE_IN_BVI: 270,
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_BVI: 256,
  // SEYCHELLES
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_SEY: 255,
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_SEY: 261,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_SEY: 269,
  // Marshall
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_MARSHALL: 263,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_MARSHALL: 271,
  // Mauritius
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_MAURITIUS: 257,
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_MAURITIUS: 264,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_MAURITIUS: 272,
  // SAMOA
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_SAMOA: 258,
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_SAMOA: 265,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_SAMOA: 273,
  // RAK
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_RAK: 259,
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_RAK: 266,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_RAK: 274,
  // PANAMA
  APPOINT_AND_RESIGN_SHAREHOLDERS_RESOLUTION_DIRECTOR_PANAMA: 276,
  CHANGE_IN_PARTICULARS_UBO_DECLARATION_UBO_PANAMA: 204,
  // BELIZE
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_BELIZE_LLC: 209,
  CHANGE_IN_PARTICULARS_DIRECTOR_RESOLUTION_DIRECTOR_BELIZE_BC: 254,

  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_BELIZE_LLC: 210,
  CHANGE_IN_PARTICULARS_SHAREHOLDERS_RESOLUTION_DIRECTOR_BELIZE_BC: 260,

  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_BELIZE_LLC: 211,
  CHANGE_IN_PARTICULARS_UBO_RESOLUTION_DIRECTOR_BELIZE_BC: 268,

  STATEMENT_DORMANT_COMPANY_ANGUILLA: 280,
  STATEMENT_HOLDING_COMPANY_ANGUILLA: 281,
  STATEMENT_ACTIVE_COMPANY_ANGUILLA: 282,

  ACCOUNTING_RECORDS_RESOLUTION_FOR_DORMANT_PANAMA: 283,
  FINANCIAL_PROFILE_AR_PANAMA: 284,
  RESOLUTION_UBO_WRITING_DORMANT_SEYCHELLES: 285,
  RESOLUTION_UBO_WRITING_HOLDING_SEYCHELLES: 286,
  ES_FORM_1_ESR_SVG: 287,
  ES_FORM_2_ESR_SVG: 288,

  INSTRUCTION_SHEET_CHANGE_OF_BO_BVI: 277,
  ACCOUNTING_RECORDS: 279,
  SUPPORTING_DOCUMENTS_AS_EVIDENCE_OF_UNDERLYING_ASSETS: 278,
  ADDITIONAL_DOCUMENTS: 289,
  HOLDING_DECLARATION_STATEMENT_VALUE_OF_ASSETS_PANAMA: 290,

  RESOLUTION_OF_DIRECTOR_ANGUILLA_CHANGE_NAMES: 134,
  RESOLUTION_DIRECTOR_CHANGE_PAR_DIR_ANGUILLA: 135,
  RESOLUTION_DIRECTOR_APPOINT_DIR_ANGUILLA: 136,
  CONSENT_DIRECTOR_APPOINT_DIR_ANGUILLA: 137,
  RESIGNATION_LETTER_OF_DIR_ANGUILLA: 138,
  RESOLUTION_DIRECTOR_CHANGE_PAR_SHAREHOLDER_ANGUILLA: 139,
  RESOLUTION_OF_DIRECTOR_APPOINT_SHAREHOLDER_ANGUILLA: 140,
  INSTRUMENT_TRANSFER_APPOINT_SHARE_ANGUILLA: 141,
  SHARE_CERT_APPOINT_SHARE_ANGUILLA: 142,
  NOTICE_TRANSFER_UBO_APPOINT_RESIGN_ANGUILLA: 143,
  INSTRUCTION_UBO_APPOINT_RESIGN_ANGUILLA: 144,
  RESOLUTION_DIRECTOR_CHANGE_PAR_UBO_ANGUILLA: 145,

  RESOLUTION_OF_DIRECTOR_CHANGE_NAMES_BELIZE: 146,
  CONSENT_DIRECTOR_APPOINT_DIR_BELIZE: 147,
  UPDATED_REGISTER_DIRECTOR_APPOINT_DIR_BELIZE: 148,
  ORDER_FORM_LEGAL_BELIZE_IBC: 149,
  RESIGNATION_LETTER_OF_DIR_BELIZE: 150,
  UPDATED_REGISTER_DIRECTOR_PARTICULARS_BELIZE: 151,
  UPDATED_REGISTER_CHANGE_SHARE_BELIZE: 152,
  SHARE_CERTIFICATE_LEGAL_BELIZE: 153,
  DECLARATION_UBO_FORMA_APPOINT_RESIGN_UBO_BELIZE: 154,
  PEP_SELF_APPOINT_RESIGN_UBO_BELIZE: 155,
  INSTRUCTION_UBO_APPOINT_RESIGN_BELIZE: 156,
  UPDATED_REGISTER_UBO_APPOINT_RESIGN_UBO_BELIZE: 157,
  ORDER_FORM_LEGAL_BELIZE_LLC: 212,

  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_SEYCHELLES: 158,
  CONSENT_APPOINT_DIRECTORS_SEYCHELLES: 159,
  RESIGNATION_LETTER_OF_DIR_SEYCHELLES: 160,
  INSTRUCTION_SHEET_APPOINT_RESIGN_UBO_SEYCHELLES: 161,
  DECLARATION_SHEET_APPOINT_RESIGN_UBO_SEYCHELLES: 162,
  SPECIAL_RESOLUTION_CHANGE_NAME_UK: 163,

  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_BVI: 164,
  UPDATED_REGISTER_CHANGE_PAR_DIRECTORS_BVI: 165,
  DIRECTOR_ACCEPTANCE_LETTER_BVI: 166,
  RESIGNATION_LETTER_OF_DIR_BVI: 168,
  SHARE_CERTIFICATE_LEGAL_BVI: 169,
  UPDATED_REGISTER_APPOINT_RESIGN_SHAREHOLDER_BVI: 170,
  INSTRUCTION_SHEET_CHANGE_PAR_UBO_BVI: 171,
  DECLARATION_UBO_LEGAL_BVI: 172,

  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_MARSHALL: 173,
  SHARE_CERTIFICATE_CHANGE_SHAREHOLDER_MARSHALL: 175,
  UPDATED_REGISTER_MEMBER_CHANGE_SHARE_MARSHALL: 176,
  UPDATED_REGISTER_MEMBER_PAR_SHARE_MARSHALL: 177,
  UPDATED_REGISTER_OF_DIRECTORS_MARSHALL: 178,
  RESIGNATION_LETTER_OF_DIR_MARSHALL: 179,
  INSTRUCTION_BY_UBO_MARSHALL: 180,

  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_MAURITIUS: 181,

  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_SAMOA: 182,
  RESIGNATION_LETTER_OF_DIR_SAMOA: 183,
  SHARE_CERTIFICATE_APPOINT_RESIGN_SHAREHOLDER_SAMOA: 184,
  NOTICE_OF_TRANSFER_APPOINT_RESIGN_UBO_SAMOA: 185,

  MEMBER_RESOLUTION_CHANGE_NAME_RAK: 186,
  UNDERTAKING_TO_HONOR_CHANGE_NAME_RAK: 187,
  ORIGINAL_ADVERTISEMENT_CHANGE_NAME_RAK: 188,
  RESOLUTION_MEMBER_RAK: 189,
  ORIGINAL_SHARE_PLEDGE_REGISTRATION_AMENDMENT_RAK: 190,
  ORIGINAL_AMENDMENT_SHARE_PLEDGE_AGREEMENT_RAK: 191,

  RESOLUTION_OF_SHAREHOLDER_CHANGE_NAME_CAYMAN: 192,
  CONSENT_TO_ACT_AS_DIRECTOR_CAYMAN: 193,
  RESIGNATION_RESIGN_DIRECTORS_CAYMAN: 195,
  COMPANY_RESOLUTION_APPOINT_DIRECTORS_CAYMAN: 194,

  RESOLUTION_OF_SHAREHOLDER_CHANGE_NAMES_PANAMA: 196,
  RESOLUTION_SHAREHOLDER_CHANGE_PAR_DIRECTOR_PANAMA: 197,
  INSTRUMENT_OF_TRANSFER_APPOINT_RESIGN_SHAREHOLDER_PANAMA: 198,
  DECLARATION_FORM_APPOINT_RESIGN_SHAREHOLDER_PANAMA: 199,
  FINANCIAL_PROFILE_APPOINT_RESIGN_SHAREHOLDER_PANAMA: 200,
  RESOLUTION_DIRECTOR_CHANGE_PAR_SHAREHOLDER_PANAMA: 201,
  CESSION_OF_RIGHT_PANAMA: 202,
  UBO_DECLARATION_APPOINT_RESIGN_UBO_PANAMA: 203,

  SOLE_OWNERSHIP_TRANSFER_NEVIS: 206,
  RESOLUTION_OF_DIRECTORS_CHANGE_NAME_NEVIS: 205,

  RESOLUTION_OF_SHAREHOLDER_APPOINT_RESIGN_DIR_SVG: 208,
  RESOLUTION_OF_SHAREHOLDER_CHANGE_SHAREHOLDER_SVG: 207,

  RESOLUTION_OF_DIRECTOR_CHANGE_NAMES_BAHAMAS: 275,
  DIRECTOR_ACCEPTANCE_LETTER_BAHAMAS: 214,
  APPOINT_NEW_DIRECTOR_BAHAMAS: 215,
  RESIGNATION_DIRECTOR_BAHAMAS: 216,
  RESOLUTION_OF_SHAREHOLDER_BAHAMAS: 217,
  SHARE_CERTIFICATE_LEGAL_BAHAMAS: 218,

  // ANNUAL RENEWAL
  CONFIRMATION_FORM: 292,
  CONFIRMATION_FORM_SVG: 293,
  CONFIRMATION_FORM_PANAMA: 294,
  DECLARATION_RECORD_ADDRESS_AND_SEAL: 295,
  NTL_ACKNOWLEDGEMENT_BY_BENEFICIAL_OWNER_ACCOUNTING_RECORDS_AND_COMPANY_ACTIVITIES: 296,
  ANNUAL_RETURN_DECLARATION_PANAMA: 297,
  BUSINESS_QUESTIONNAIRE_FOR_COMPANY_RENEWAL: 298,
  SANCTIONS_POLICY_QUESTIONNAIRE: 299,
  MEMBER_RESOLUTION_CHANGE_NAME_SVG_LLC: 307,
  MEMBER_RESOLUTION_CHANGE_OFFICER_SVG_LLC: 308,
  BENEFICIAL_OWNER_DECLARATION_BVI: 124,
  RESOLUTION_OF_SHAREHOLDER_APPOINT_RESIGN_DIR_SVG_V2: 311,
  RESOLUTION_OF_SHAREHOLDER_CHANGE_SHAREHOLDER_SVG_V2: 312,

  ...uboDeclarationSeyChellesForm,
};

export const ORDER_FORM_LIST = Object.values(orderForm);
export const RAF_FORM_ID_LIST = Object.values(rafForm);
export const SERVICE_RAF_FORM_ID_LIST = Object.values(serviceRafForm);
export const FINANCE_RAF_FORM_ID_LIST = Object.values(financeRafForm);
export const CUSTOMER_RAF_FORM_ID_LIST = Object.values(customerRafForm);
export const UBO_DECLARATION_SEYCHELLES_FORM_ID_LIST = Object.values(uboDeclarationSeyChellesForm);
