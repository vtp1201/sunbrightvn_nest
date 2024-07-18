enum ROUTE_BBCSG {
  BUSINESS_ACTIVITY_FILTER = 'api/bbcsg/business_activity/filter',
  COMPANY_NAME_CHECK_SEARCH = 'api/bbcsg/company_name_check/search',
  STATIC_DATA = 'api/bbcsg/static_data',
}

enum ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__CUSTOMER {
  QUESTIONS = 'api/risk_assessment_form/customer/questions',
  ANSWERS = 'api/risk_assessment_form/customer/answers',
}

enum ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__FINANCIAL {
  QUESTIONS = 'api/risk_assessment_form/financial/questions',
  ANSWERS = 'api/risk_assessment_form/financial/answers',
}

enum ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__NOTE {
  BASE = 'api/risk_assessment_form/note',
  CUSTOMER = 'api/risk_assessment_form/note/customer',
  SERVICE = 'api/risk_assessment_form/note/service',
  FINANCIAL = 'api/risk_assessment_form/note/financial',
  PAYER = 'api/risk_assessment_form/note/payer',
  REFERENCE_CUSTOMER = 'api/risk_assessment_form/note/reference_customer',
  REFERENCE_SERVICE = 'api/risk_assessment_form/note/reference_service',
  REFERENCE_FINANCIAL = 'api/risk_assessment_form/note/reference_financial',
}

enum ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__RISK_RATING {
  BASE = 'api/risk_assessment_form/risk_rating',
}

enum ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__SERVICE {
  QUESTIONS = 'api/risk_assessment_form/service/questions',
  ANSWERS = 'api/risk_assessment_form/service/answers',
}

enum ROUTE_CUSTOMER_ACCOUNT__DASHBOARD__ORDER {
  ANALYTIC = 'api/customer_account/dashboard/order/analytic',
}

enum ROUTE_CUSTOMER_ACCOUNT__BANKING {
  BASE = 'api/customer_account/banking',
  PROCESS = 'api/customer_account/banking/process',
  UPGRADE_SERVICE__STRIPE = 'api/customer_account/banking/upgrade_service/stripe',
}

enum ROUTE_CUSTOMER_ACCOUNT__BILLING {
  BASE = 'api/customer_account/billing',
  BY_ID = 'api/customer_account/billing/:id([0-9]+)',
  DELETE_MULTI = 'api/customer_account/billing/delete_multi',
}

enum ROUTE_CUSTOMER_ACCOUNT__BOOKKEEPER_PROCESS {
  ORDER_FORM__BY_TASK_ID = 'api/customer_account/bookkeeper_process/order_form/:task_id',
  FILE__CREATE = 'api/customer_account/bookkeeper_process/file/create',
}

enum ROUTE_CUSTOMER_ACCOUNT__BUSINESS_PLAN_FORM {
  UPDATE_FORM__BY_ID = 'api/customer_account/business_plan_form/update_form/:id([0-9]+)',
}

enum ROUTE_CUSTOMER_ACCOUNT__CHECKNAME {
  UK = 'api/customer_account/checkname/uk',
}

enum ROUTE_CUSTOMER_ACCOUNT__COMPANY_EVENT {
  TYPES = 'api/customer_account/company_event/types',
}

enum ROUTE_CUSTOMER_ACCOUNT__COMPANY {
  BASE = 'api/customer_account/company',
  VER_2 = 'api/customer_account/company/ver_2',
  SENT_COMPANY_DOCUMENT = 'api/customer_account/company/sent_company_document',
  BY_ID__DETAIL = 'api/customer_account/company/:id([0-9]+)/detail',
  BY_ID__DOCUMENT = 'api/customer_account/company/:id([0-9]+)/document',
  BY_ID__EVENT = 'api/customer_account/company/:id([0-9]+)/event',
  BY_ID__REVIEW_COMPLETE = 'api/customer_account/company/:id([0-9]+)/review_complete',
  BY_ID__PROPOSED_NAME = 'api/customer_account/company/:id([0-9]+)/proposed_name',
  BY_ID__SHARE_OWN_INTEREST = 'api/customer_account/company/:id([0-9]+)/share_own_interest',
  CHANGE_REQUEST = 'api/customer_account/company/change_request',
  CHANGE_REQUEST__BY_ID = 'api/customer_account/company/change_request/:id([0-9]+)',
  CHANGE_REQUEST__TRANSFER_SHARE = 'api/customer_account/company/change_request/transfer_share',
  PROPOSED_NAME = 'api/customer_account/company/proposed_name',
  BY_ID__HISTORY_CHANGED = 'api/customer_account/company/:id([0-9]+)/history_changed',
  BY_ID__COMPLETED_EVENT = 'api/customer_account/company/:id([0-9]+)/completed_event',
  BY_ID__TRANSACTION_EVENT = 'api/customer_account/company/:id([0-9]+)/transaction_event',
}

enum ROUTE_CUSTOMER_ACCOUNT__FILE {
  BANKING = 'api/customer_account/file/banking',
}

enum ROUTE_CUSTOMER_ACCOUNT__HOLIDAY {
  BASE = 'api/customer_account/holiday',
}

enum ROUTE_CUSTOMER_ACCOUNT__INCORPORATION {
  COUNTRY__BY_ID = 'api/customer_account/incorporation/country/:id([0-9]+)',
  ANCILLARY_SERVICES_OUTSIDE = 'api/customer_account/incorporation/ancillaryServices_outside',
  STRIPE = 'api/customer_account/incorporation/stripe',
  BANK = 'api/customer_account/incorporation/bank',
  ADD_SERVICES__STRIPE = 'api/customer_account/incorporation/add_services/stripe',
  ADD_SERVICES__BANK = 'api/customer_account/incorporation/add_services/bank',
  SUBSCRIPTION = 'api/customer_account/incorporation/subscription',
  MEMBERSHIP = 'api/customer_account/incorporation/membership',
  EXIST_ORDER__STRIPE = 'api/customer_account/incorporation/exist_order/stripe',
  PAYMENT_INTENT = 'api/customer_account/incorporation/payment_intent',
  PAYMENT_INTENT__EXIST_ORDER = 'api/customer_account/incorporation/payment_intent/exist_order',
  PAYMENT_INTENT__ADD_SERVICES = 'api/customer_account/incorporation/payment_intent/add_services',
}

enum ROUTE_CUSTOMER_ACCOUNT__INVOICE {
  BASE = 'api/customer_account/invoice',
  BY_ID = 'api/customer_account/invoice/:id([0-9]+)',
}

enum ROUTE_CUSTOMER_ACCOUNT__MESSAGE {
  BASE = 'api/customer_account/message',
  FIRST = 'api/customer_account/message/first',
}

enum ROUTE_CUSTOMER_ACCOUNT__ORDER_FORM {
  BY_TASK_ID = 'api/customer_account/order_form/:task_id',
  BY_ORDER_ID = 'api/customer_account/order_form/:order_id',
  LIST_SIGN_ORDER_FORM__BY_COMPANY_ID = 'api/customer_account/order_form/list_sign_order_form/:company_id',
  LIST_SIGN_INCORPORATION_FORM__BY_COMPANY_ID = 'api/customer_account/order_form/list_sign_incorporation_form/:company_id',
  PROPOSE_NAME__BY_TASK_ID = 'api/customer_account/order_form/propose_name/:task_id([0-9]+)',
  PROPOSE_NAME__BULK = 'api/customer_account/order_form/propose_name/bulk',
  PROPOSE_NAME__BY_PROPOSED_NAME_ID = 'api/customer_account/order_form/propose_name/:proposed_name_id([0-9]+)',
  CUSTOMER__PROPOSED_NAME__BY_PROPOSE_NAME_ID = 'api/customer_account/order_form/customer/proposed_name/:propose_name_id([0-9]+)',
  CUSTOMER__PROPOSED_NAME = 'api/customer_account/order_form/customer/proposed_name',
  CHANGE_REQUEST__TRANSFER_SHARE = 'api/customer_account/order_form/change_request/transfer_share',
  CHANGE_REQUEST = 'api/customer_account/order_form/change_request',
  CHANGE_REQUEST__BY_ID = 'api/customer_account/order_form/change_request/:id([0-9]+)',
  COMPANY_MEMBER__APPOINT_SIGN = 'api/customer_account/order_form/company_member/appoint_sign',
  COMPANY_MEMBER_LEVEL2__BY_ID = 'api/customer_account/order_form/company_member_level2/:id([0-9]+)',
  COMPANY_MEMBER_LEVEL2 = 'api/customer_account/order_form/company_member_level2',
}

enum ROUTE_CUSTOMER_ACCOUNT__ORDER {
  BASE = 'api/customer_account/order',
  DASHBOARD = 'api/customer_account/order/dashboard',
  BY_ID = 'api/customer_account/order/:id([0-9]+)',
  BY_ID__BANKING_TREE = 'api/customer_account/order/:id([0-9]+)/banking_tree',
  BY_ID__ADDITION_TREE = 'api/customer_account/order/:id([0-9]+)/addition_tree',
  MAIL_TO_MY_EMAIL_MEETING_SCHEDULE = 'api/customer_account/order/mail_to_my_email_meeting_schedule',
  TRIGGER_EMAIL = 'api/customer_account/order/trigger_email',
  REFUND__BY_ID = 'api/customer_account/order/refund/:id([0-9]+)',
  BY_ID__YEARS_NOT_BUY_EVENT = 'api/customer_account/order/:id([0-9]+)/years_not_buy_event',
  BY_ID__COMPANY_EVENT = 'api/customer_account/order/:id([0-9]+)/company_event',
  SERVICE_AR = 'api/customer_account/order/service_ar',
}

enum ROUTE_CUSTOMER_ACCOUNT__PROCESS {
  BY_ID = 'api/customer_account/process/:id([0-9]+)',
  APPROVE = 'api/customer_account/process/approve',
  REJECT = 'api/customer_account/process/reject',
}

enum ROUTE_CUSTOMER_ACCOUNT__SUPPORT_CASE {
  BASE = 'api/customer_account/support_case',
  BY_ID = 'api/customer_account/support_case/:id([0-9]+)',
  POINT = 'api/customer_account/support_case/point',
  DELETE_MULTI = 'api/customer_account/support_case/delete-multi',
  CASE_DETAIL__BY_ID = 'api/customer_account/support_case/caseDetail/:id',
}

enum ROUTE_CUSTOMER_ACCOUNT__TASK {
  SEND_DOCUMENT_MEMBER = 'api/customer_account/task/send_document_member',
  FILE_TEMPLATE = 'api/customer_account/task/file_template',
  FILE_TEMPLATE__DOWNLOAD = 'api/customer_account/task/file_template/download',
  BY_ID__COMPARE_COMPANY_INFO = 'api/customer_account/task/:id([0-9]+)/compare_company_info',
}

enum ROUTE_GLEADS__CONTACT_FORM {
  BASE = 'api/gleads/contact_form',
}

enum ROUTE_GLEADSSG__STATIC_DATA {
  BASE = 'api/gleadssg/static_data',
}

enum ROUTE_ONBOARDING__BANKING {
  BASE = 'api/onboarding/banking',
}

enum ROUTE_ONBOARDING__CHECK_NAME {
  CALLBACK = 'api/onboarding/check_name/callback',
  FIND_COMPANY = 'api/onboarding/check_name/find_company',
}

enum ROUTE_ONBOARDING__COUNTRY {
  BASE = 'api/onboarding/country',
  COOPERATIVE = 'api/onboarding/country/cooperative',
  INCORPORATION = 'api/onboarding/country/incorporation',
  ENTITY_SUFFIX = 'api/onboarding/country/entity_suffix',
  COUNTRY_FEE = 'api/onboarding/country/country_fee',
}

enum ROUTE_ONBOARDING__CUSTOMER {
  BASE = 'api/onboarding/customer',
}

enum ROUTE_ONBOARDING__ENUM {
  BY_MODEL_NAME = 'api/onboarding/enum/:modelName',
}

enum ROUTE_ONBOARDING__ORDER {
  INCORP = 'api/onboarding/order/incorp',
  BANKING = 'api/onboarding/order/banking',
  PAYMENT__STRIPE = 'api/onboarding/order/payment/stripe',
  PAYMENT_FAIL = 'api/onboarding/order/payment-fail',
  SEND_EMAIL_PENDING = 'api/onboarding/order/send-email-pending',
  CLIENT__BY_SIGNATURE = 'api/onboarding/order/client/:signature',
  BY_ORDER_CODE = 'api/onboarding/order/:orderCode',
  PAYMENT_INTENT__STRIPE = 'api/onboarding/order/payment_intent/stripe',
  GET_PRICING_GUIDE = 'api/onboarding/order/get_pricing_guide',
}

enum ROUTE_ONBOARDING__SERVICE {
  BASE = 'api/onboarding/services',
  BANK = 'api/onboarding/services/bank',
  ANNUAL = 'api/onboarding/services/annual',
}

enum ROUTE_ONBOARDING__TRACKING {
  EMAIL_WHITE_PAGE = 'api/onboarding/tracking/email_white_page',
}

enum ROUTE_STATISTIC__BOD {
  NEW_CONTACT = 'api/statistic/bod/new_contact',
  ORDER_PAID = 'api/statistic/bod/order_paid',
  COST = 'api/statistic/bod/cost',
  REFRESH_TOKEN = 'api/statistic/bod/refresh_token',
  RATIO_EACH_SERVICE_MONTH = 'api/statistic/bod/ratio_each_service_month',
  RATIO_EACH_SERVICE_COUNTRY = 'api/statistic/bod/ratio_each_service_country',
  CUSTOMER_PAID_12_MONTH = 'api/statistic/bod/customer_paid_12_month',
}

enum ROUTE_STATISTIC__CS {
  TOP_RANK_CS = 'api/statistic/cs/top_rank_cs',
  TARGET_TEAM = 'api/statistic/cs/target_team',
  PERFORMANCE_OVERTIME = 'api/statistic/cs/performance_overtime',
  YOUR_PERFORMANCE = 'api/statistic/cs/your_performance',
}

enum ROUTE_STRIPE__ENDPOINT_WEBHOOK {
  BY_ID = 'api/stripe/endpoint_webhook/:id([0-9]+)',
}

enum ROUTE_SUNBRIGHTVN__CONTACT_FORM {
  BASE = 'api/sunbrightvn/contact_form',
}

enum ROUTE_V2A__POST {
  BASE = 'api/v2a/post',
  PREVIEW = 'api/v2a/post/preview',
  BY_GUID = 'api/v2a/post/:guid([a-zA-Z0-9-]+)',
}

enum ROUTE_V2A__SERVICES {
  VN_ARRIVAL = 'api/v2a/services/vn_arrival',
  SERVICES_COUNTRY__BY_ID = 'api/v2a/services/services_country/:id([0-9]+)',
  OPTIONS = 'api/v2a/services/options',
  NATIONALITY = 'api/v2a/services/nationality',
  COUNTRIES = 'api/v2a/services/countries',
}

enum ROUTE_ADDITION_PROCESS {
  BY_ID = 'api/addition_process/:id([0-9]+)',
  CHANGE_REQUEST_BY_ID = 'api/addition_process/change_request/:id([0-9]+)',
  CHANGE_REQUEST = 'api/addition_process/change_request',
  CHANGE_REQUEST_TRANSFER_SHARE = 'api/addition_process/change_request/transfer_share',
  COMPANY_MEMBER_LEVEL2_BY_ID = 'api/addition_process/company_member_level2/:id([0-9]+)',
  COMPANY_MEMBER_LEVEL2 = 'api/addition_process/company_member_level2',
}

enum ROUTE_AGENCY {
  BASE = 'api/agency',
  BY_ID = 'api/agency/:id([0-9]+)',
}

enum ROUTE_AGENT {
  BASE = 'api/agent',
  BY_ID = 'api/agent/:id([0-9]+)',
}

enum ROUTE_API {
  BASE = 'api/api',
  BY_ID = 'api/api/:id([0-9]+)',
  GROUP = 'api/api/group',
  GROUP_BY_ID = 'api/api/group/:id([0-9]+)',
  DELETE_MULTI = 'api/api/delete_multi',
  GROUP_DELETE_MULTI = 'api/api/group/delete_multi',
  EXAMPLE_BY_ID = 'api/api/example/:id([0-9]+)',
  EXAMPLE_DELETE_MULTI = 'api/api/example/delete_multi',
  API_GROUP_BY_ID = 'api/api/api_group/:id([0-9]+)',
  API_GROUP_DELETE_MULTI = 'api/api/api_group/delete_multi',
}

enum ROUTE_AUTH {
  BASE = 'api/auth',
  CONFIRM = 'api/auth/confirm',
  PASSPORT = 'api/auth/passport',
  REFRESH_TOKEN = 'api/auth/refresh_token',
  LOGOUT = 'api/auth/logout',
  LOGOUT_ALL = 'api/auth/logout_all',
  CLEAN_TOKEN = 'api/auth/clean_token',
  FORGOT_PASSWORD = 'api/auth/forgot-password',
  RESET_PASSWORD = 'api/auth/reset-password',
  SOCIAL_LOGIN = 'api/auth/social_login',
  RESEND = 'api/auth/resend',
}

enum ROUTE_BANK_BRANCH {
  BASE = 'api/bank_branch',
  BY_ID = 'api/bank_branch/:id([0-9]+)',
}

enum ROUTE_BANK {
  BASE = 'api/bank',
  BY_ID = 'api/bank/:id([0-9]+)',
}

enum ROUTE_BANKING_PROCESS {
  BASE = 'api/banking_process',
  BY_ID = 'api/banking_process/:id([0-9]+)',
  SCHEDULE_MEETING = 'api/banking_process/schedule_meeting',
  VIDEO_CALL = 'api/banking_process/video_call',
  PROPOSED_TIME_BY_ID = 'api/banking_process/proposed_time/:id([0-9]+)',
  BUSINESS_PLAN_FORM_UPDATE_FORM_BY_ID = 'api/banking_process/business_plan_form/update_form/:id([0-9]+)',
  NOTE = 'api/banking_process/note',
  NOTE_BY_ID = 'api/banking_process/note/:id([0-9]+)',
  NOTE_CS_BY_ID = 'api/banking_process/note/cs/:id([0-9]+)',
  NOTE_DELETE_MULTI = 'api/banking_process/note/delete_multi',
}

enum ROUTE_BOOKKEEPER_PROCESS {
  FILE_SIGNED_URL_S3_VIEW = 'api/bookkeeper_process/file/signed-url-s3/view',
}

enum ROUTE_BUSINESS_PLAN_FORM {
  BUSINESS_PLAN_FORM_UPDATE_FORM_BY_ID = 'api/business_plan_form/update_form/:id([0-9]+)',
}

enum ROUTE_COMPANY_EVENT {
  FILE_VIEW_BY_ID = 'api/company_event/:id([0-9]+)/file/view',
  BY_ID = 'api/company_event/:id([0-9]+)',
}

enum ROUTE_COMPANY_MEMBER {
  BASE = 'api/company_member',
  BY_ID = 'api/company_member/:id([0-9]+)',
  FILE_BY_ID = 'api/company_member/:id([0-9]+)/file',
}

enum ROUTE_COMPANY {
  BASE = 'api/company',
  BY_ID = 'api/company/:id([0-9]+)',
  ORDER = 'api/company/order',
  BY_ORDER_BY_ID = 'api/company/by_order/:id([0-9]+)',
  NEW_COMPANY = 'api/company/new-company',
  DELETE_MULTI = 'api/company/delete_multi',
  PROPOSE_NAME_BY_TASK_ID = 'api/company/propose_name/:task_id',
  PROPOSE_NAME_BY_PROPOSE_NAME_ID = 'api/company/propose_name/:propose_name_id',
  GEN_SEAL = 'api/company/gen_seal',
  FILE_BY_ID = 'api/company/:id([0-9]+)/file',
  FILE_VIEW_BY_ID = 'api/company/:id([0-9]+)/file/view',
  COMPANY_MEMBER_BY_ID = 'api/company/:id([0-9]+)/company_member',
  COMPANY_EVENT = 'api/company/company_event',
  TIN_BY_ID = 'api/company/:id([0-9]+)/tin',
  SHARE_OWN_INTEREST_BY_ID = 'api/company/:id([0-9]+)/share_own_interest',
  COMPLETED_EVENT_BY_ID = 'api/company/:id([0-9]+)/completed_event',
  EVENT_BY_ID = 'api/company/:id([0-9]+)/event',
  YEARS_NOT_BUY_EVENT_BY_ID = 'api/company/:id([0-9]+)/years_not_buy_event',
  CALENDAR_CATEGORY_FILE_BY_ID = 'api/company/:id([0-9]+)/calendar_category_file',
}

enum ROUTE_CONTACT_FROM {
  BASE = 'api/contact_from',
  BY_ID = 'api/contact_from/:id([0-9]+)',
}

enum ROUTE_COUNTRY {
  BASE = 'api/country',
  ENTITY_TYPE_BY_ID = 'api/country/:id([0-9]+)/entity_type',
}

enum ROUTE_CURRENCY {
  BASE = 'api/currency',
  BY_ID = 'api/currency/:id([0-9]+)',
  DELETE_MULTI = 'api/currency/delete_multi',
}

enum ROUTE_CUSTOMER {
  BASE = 'api/customer',
  BY_ID = 'api/customer/:id([0-9]+)',
  CHECK_BY_ID = 'api/customer/check/:id([0-9]+)',
  APPLICANT_BY_ID = 'api/customer/applicant/:id([0-9]+)',
  V2_BY_ID = 'api/customer/v2/:id([0-9]+)',
  LAZY = 'api/customer/lazy',
  ORDER_HAS_TASK = 'api/customer/order_has_task',
  GENERATE_URL_MAILCHIMP = 'api/customer/generate_url_mailchimp',
  TAG_BY_ID = 'api/customer/tags/:id([0-9a-z]+)',
  MERGE = 'api/customer/merge',
  CREDIT_AMOUNT_BY_ID = 'api/customer/:id([0-9]+)/credit_amount',
}

enum ROUTE_EMAIL_TEMPLATE {
  LIST_EMAIL_TEMPLATE = 'api/email_template/list_email_template',
}

enum ROUTE_ENUM {
  WEBSITES = 'api/enum/websites',
  SUPPORTER = 'api/enum/supporter',
  COUNTRY = 'api/enum/country',
  COUNTRY_STATE = 'api/enum/country_state',
  COUNTRY_COOPERATIVE = 'api/enum/country_cooperative',
  COUNTRY_HAS_SERVICE = 'api/enum/country_has_service',
  SERVICE = 'api/enum/service',
  SERVICE_TYPE = 'api/enum/service_type',
  COMPANY_SUFFIX = 'api/enum/company_suffix',
  PROCESS_STEP = 'api/enum/process_step',
  PACKAGE = 'api/enum/package',
  VISA_OPTION = 'api/enum/visa_option',
  BUSINESS_ACTIVITY = 'api/enum/business_activity',
  INDUSTRY = 'api/enum/industry',
  ROLE = 'api/enum/role',
  AGENT = 'api/enum/agent',
  BANK = 'api/enum/bank',
  FILE_TEMPLATE = 'api/enum/file_template',
  MODEL = 'api/enum/model',
  BY_MODEL_NAME = 'api/enum/:model_name',
  LIMIT_TYPE = 'api/enum/limit_type',
  FIELD_BY_MODEL_NAME = 'api/enum/:model_name/fields',
}

enum ROUTE_FILE_TEMPLATE {
  LIST_FILE_TEMPLATE = 'api/file_template/list_file_template',
}

enum ROUTE_HELPER {
  IP_LOCKING = 'api/helper/ipLooking',
  GEO_LOCKING = 'api/helper/geoLooking',
  COUNTRIES = 'api/helper/countries',
}

enum ROUTE_FILE {
  BASE = 'api/file',
  FILE_BY_ID = 'api/file/:id([0-9]+)',
  LIST = 'api/file/list',
  SIGNED_URL_S3_PUT = 'api/file/signed-url-s3/put',
  SIGNED_URL_S3_VIEW = 'api/file/signed-url-s3/view',
  SIGNED_URL_S3_VIEW_AVATAR = 'api/file/signed-url-s3/view-avatar',
  CREATE = 'api/file/create',
  BANKING = 'api/file/banking',
  NOTE_CS = 'api/file/note_cs',
  DELETE_OBJECTS_S3 = 'api/file/delete_objects_s3', // not used
  SIGNED_URL_S3_CUSTOMER_PUT = 'api/file/signed-url-s3/customer/put',
  SIGNED_URL_S3_CUSTOMER_VIEW = 'api/file/signed-url-s3/customer/view',
  CUSTOMER_CREATE = 'api/file/customer/create',
  CUSTOMER_BY_ID = 'api/file/customer/:id([0-9]+)',
  ALL = 'api/file/all', // not used
  ALL_BY_ID = 'api/file/all/:id([0-9]+)', // not used
  VIEW_SEAL_BY_ID = 'api/file/view_seal/:id([0-9]+)',
  BULK_CREATE = 'api/file/bulk_create',
}

enum ROUTE_HISTORY_LOG_CDC {
  FILE = 'api/history_log_cdc/file',
  HISTORY_FILE_BY_ID = 'api/history_log_cdc/:id([0-9]+)/history_file',
}

enum ROUTE_HOLIDAY {
  BASE = 'api/holiday',
  BY_ID = 'api/holiday/:id([0-9]+)',
}

enum ROUTE_KYC {
  UPDATE_FORM_BY_TASK_ID = 'api/kyc/update_form/:task_id',
}

enum ROUTE_LIMIT_TYPE {
  BASE = 'api/limit_type',
  BY_ID = 'api/limit_type/:id([0-9]+)',
}

enum ROUTE_LIMIT {
  BASE = 'api/limit',
  BY_ID = 'api/limit/:id([0-9]+)',
}

enum ROUTE_LOG_REPORT {
  IMPORT_LOG = 'api/log_report/import_log',
  GET_LOGS = 'api/log_report/get_logs',
  GET_URLS = 'api/log_report/get_urls',
  GET_URLS_BY_ID = 'api/log_report/get_url/:id([0-9]+)',
  IP_URL = 'api/log_report/ip_url',
  IP_URL_BY_ID = 'api/log_report/ip_url/:id([0-9]+)',
}

enum ROUTE_MAILCHIMP_CAMPAIGN {
  REPORT_SUMMARY = 'api/mailchimp_campaign/report_summary',
  GET_GENERAL = 'api/mailchimp_campaign/get_general',
  DETAILS = 'api/mailchimp_campaign/details',
}

enum ROUTE_MAILCHIMP_TAG {
  BASE = 'api/mailchimp_tag',
  BY_ID = 'api/mailchimp_tag/:id([0-9]+)',
}

enum ROUTE_NOTE {
  BASE = 'api/note',
  BY_ID = 'api/note/:id([0-9]+)',
  CS_BY_ID = 'api/note/cs/:id([0-9]+)',
  DELETE_MULTI = 'api/note/delete_multi',
  UPDATE_STATUS = 'api/note/update_status',
}

enum ROUTE_NOTIFICATION {
  BASE = 'api/notification',
  CHECK = 'api/notification/check',
  READ_DETAIL = 'api/notification/read_detail',
  READ = 'api/notification/read',
  READ_BY_ID = 'api/notification/read/:id',
  SCHEDULE_CHECK_CUSTOMER = 'api/notification/schedule/check_customer',
}

enum ROUTE_ORDER {
  BASE = 'api/order',
  BY_ID = 'api/order/:id([0-9]+)',
  INVOICE_BY_ID = 'api/order/invoice/:id([0-9]+)',
  ORDER_COMPANY_BY_ID = 'api/order/order_company/:id([0-9]+)',
  ID_BY_ID = 'api/order/id/:id([0-9]+)',
  ANNUAL_FEE_BY_ID = 'api/order/annual_fee/:id([0-9]+)',
  LAZY = 'api/order/lazy',
  STATUS = 'api/order/status',
  ALL = 'api/order/all',
  RESTORE_BY_ID = 'api/order/restore/:id([0-9]+)',
  YEAR_NOT_BUY_EVENT_BY_ID = 'api/order/:id([0-9]+)/years_not_buy_event',
  COMPANY_EVENT_BY_ID = 'api/order/:id([0-9]+)/company_event',
}

enum ROUTE_PACKAGE_TYPE {
  BASE = 'api/package_type',
  BY_ID = 'api/package_type/:id([0-9]+)',
}

enum ROUTE_PACKAGE {
  BASE = 'api/package',
  BY_ID = 'api/package/:id([0-9]+)',
  DELETE_MULTI = 'api/package/delete_multi',
}

enum ROUTE_PERMISSION_GROUP {
  BASE = 'api/permission_group',
  BY_ID = 'api/permission_group/:id([0-9]+)',
}

enum ROUTE_PERMISSION {
  BASE = 'api/permission',
  BY_ID = 'api/permission/:id([0-9]+)',
  BY_GROUP = 'api/permission/by_group',
}

enum ROUTE_PERSON {
  BASE = 'api/person',
  BY_ID = 'api/person/:id([0-9]+)',
}

enum ROUTE_PERSONAL {
  BASE = 'api/personal',
  PASSWORD = 'api/personal/password',
  EMPLOYEE_UNDER_ROLE = 'api/personal/employee_under_role',
}

enum ROUTE_PROCESS_LOG {
  BASE = 'api/process_log',
  BY_ID = 'api/process_log/:id([0-9]+)',
  BY_PROCESS_BY_ID = 'api/process_log/by_process/:id([0-9]+)',
}

enum ROUTE_PROCESS_STEP {
  BASE = 'api/process_step',
  BY_ID = 'api/process_step/:id([0-9]+)',
  ROLE_BY_ID = 'api/process_step/:id([0-9]+)/role',
}

enum ROUTE_PROCESS {
  BY_ID = 'api/process/:id([0-9]+)',
  APPROVE = 'api/process/approve',
  REJECT = 'api/process/reject',
  TERMINATE = 'api/process/terminate',
  ORDER_BY_ID_AND_BY_ORDER_ID = 'api/process/:id([0-9]+)/order/:order_id([0-9]+)',
  ORDER_BY_ID = 'api/process/:id([0-9]+)/order',
  COMPANY_BY_ID_AND_BY_COMPANY_ID = 'api/process/:id([0-9]+)/company/:company_id([0-9]+)',
}

enum ROUTE_PROPOSED_TIME {
  BY_ID = 'api/proposed_time/:id([0-9]+)',
}

enum ROUTE_PUBLIC_TASK {
  UNSUBSCRIBE_MAIL = 'api/public_task/unsubscribe_mail',
  SIGNED_URL_S3_PUT = 'api/public_task/signed-url-s3/put',
  SIGNED_URL_S3_VIEW = 'api/public_task/signed-url-s3/view',
  ORDER_FORM = 'api/public_task/order_form',
  INCORPORATION_FORM = 'api/public_task/incorporation_form',
  AGENT_PROPOSED_NAME = 'api/public_task/agent/proposed_name',
  CUSTOMER_PROPOSED_NAME = 'api/public_task/customer/proposed_name',
  SIGNATURE = 'api/public_task/signature',
  FILE_TEMPLATE = 'api/public_task/file_template',
  FILE_TEMPLATE_DOWNLOAD = 'api/public_task/file_template/download',
  ENUM_COUNTRY = 'api/public_task/enum/country',
}

enum ROUTE_QUORA {
  BASE = 'api/quora',
  ONE_BY_LINK = 'api/quora/one_by_link',
}

enum ROUTE_REPORT {
  COUNT_COMPANY_BY_MONTH_BY_YEAR = 'api/report/count_company_by_month/:year([0-9]+)',
}

enum ROUTE_ROLE {
  BASE = 'api/role',
  LIST_STATUS = 'api/role/list_status',
  BY_ID = 'api/role/:id([0-9]+)',
  ACTIVE_BY_ID = 'api/role/:id([0-9]+)/active',
  DISABLE_BY_ID = 'api/role/:id([0-9]+)/disable',
  MOVE_BY_PARENT_ID_AND_BY_ID = 'api/role/:id([0-9]+)/move/:parent_id([0-9]+)',
  PERMISSION_BY_ID = 'api/role/:id([0-9]+)/permission',
  PERMISSION_BY_PERMISSION_ID_AND_BY_ID = 'api/role/:id([0-9]+)/permission/:permission_id([0-9]+)',
  LIMIT_BY_ID = 'api/role/:id([0-9]+)/limit',
  LIMIT_BY_LIMIT_ID_AND_BY_ID = 'api/role/:id([0-9]+)/limit/:limit_id([0-9]+)',
  PROCESS_STEP_BY_ID = 'api/role/:id([0-9]+)/process_step',
  PROCESS_STEP_BY_PROCESS_STEP_ID_AND_BY_ID = 'api/role/:id([0-9]+)/process_step/:process_step_id([0-9]+)',
  USER = 'api/role/user',
  TEST = 'api/role/test',
}

enum ROUTE_SCHEDULE_MEETING {
  BASE = 'api/schedule_meeting',
}

enum ROUTE_SERVICE_TYPE {
  BASE = 'api/service_type',
  BY_ID = 'api/service_type/:id([0-9]+)',
}

enum ROUTE_SERVICE {
  BASE = 'api/service',
  BY_ID = 'api/service/:id([0-9]+)',
  DELETE_MULTI = 'api/service/delete_multi',
}

enum ROUTE_SUPPORT_CASE {
  BASE = 'api/support_case_cs',
  BY_ID = 'api/support_case_cs/:id([0-9]+)',
  DELETE_MULTI = 'api/support_case_cs/delete_multi',
  MESSAGE = 'api/support_case_cs/message',
  MESSAGE_FIRST = 'api/support_case_cs/message/first',
  CASE_DETAIL_BY_ID = 'api/support_case_cs/caseDetail/:id',
}

enum ROUTE_SYSLOG {
  BASE = 'api/syslog',
  BY_ID = 'api/syslog/:id([0-9]+)',
}

enum ROUTE_TARGET {
  BASE = 'api/target',
  BY_ID = 'api/target/:id([0-9]+)',
}

enum ROUTE_TASK {
  BASE = 'api/task',
  BY_ID = 'api/task/:id([0-9]+)',
  PROCESSES_TREE_BY_ID = 'api/task/:id([0-9]+)/processes_tree',
  SERVICE_TYPES_BY_ID = 'api/task/:id([0-9]+)/service_types',
  TRIGGER_MAIL = 'api/task/trigger-mail',
  REVIEW_EMAIL = 'api/task/review_email',
  SEND_EMAIL = 'api/task/send_email',
  FILE_BY_ID = 'api/task/:id([0-9]+)/file',
  CUSTOMER_SEND_DOCUMENT_MEMBER = 'api/task/customer_send_document_member',
  SEND_DOCUMENT_MEMBER = 'api/task/send_document_member',
  REVIEW_EMAIL_DOCUMENT_CUSTOM = 'api/task/review_email_document_custom',
  SEND_EMAIL_DOCUMENT_CUSTOM = 'api/task/send_email_document_custom',
  NOTIFY_ORDER_FORM = 'api/task/notify_order_form',
  NOTIFY_DOCUMENT = 'api/task/notify_document',
  CLEAN_SIGNATURE = 'api/task/clean_signature',
  MAIL_WET_SIGNING_ORDER_FORM_CUSTOMER = 'api/task/mail_wet_signing_order_form_customer',
  MAIL_WET_SIGNING_DOCUMENT_CUSTOMER = 'api/task/mail_wet_signing_document_customer',
  REVIEW_EMAIL_CHECKNAME_CUSTOMER = 'api/task/review_email_checkname_customer',
  SEND_EMAIL_CHECKNAME_CUSTOMER = 'api/task/send_email_checkname_customer',
  REVIEW_EMAIL_CHECKNAME_AGENT = 'api/task/review_email_checkname_agent',
  SEND_NAME_TO_AGENT = 'api/task/send_name_to_agent',
  FILE_TEMPLATE = 'api/task/file_template',
  FILE_TEMPLATE_DOWNLOAD = 'api/task/file_template/download',
  REVIEW_SEND_ORDER_FORM_AGENT = 'api/task/review_send_order_form_agent',
  SEND_ORDER_FORM_AGENT = 'api/task/send_order_form_agent',
  REVIEW_SEND_DOCUMENT_AGENT = 'api/task/review_send_document_agent',
  SEND_DOCUMENT_AGENT = 'api/task/send_document_agent',
  MAIL_BUSINESS_PLAN_FORM_TO_CLIENT = 'api/task/mail_business_plan_form_to_client',
  MAIL_BUSINESS_PLAN_FORM_TO_AGENT = 'api/task/mail_business_plan_form_to_agent',
  MAIL_APPLICATION_SET_TO_AGENT = 'api/task/mail_application_set_to_agent',
  MAIL_APPLICATION_FORM_TO_AGENT = 'api/task/mail_application_form_to_agent',
  MAIL_DEPOSIT_TO_AGENT = 'api/task/mail_deposit_to_agent',
  MAIL_PROPOSED_TIME_MEETING_TO_CLIENT = 'api/task/mail_proposed_time_meeting_to_client',
  MAIL_DIFFERENT_TIME_MEETING_TO_CLIENT = 'api/task/mail_different_time_meeting_to_client',
  MAIL_SCHEDULE_MEETING_NOTIFY_BANK = 'api/task/mail_schedule_meeting_notify_bank',
  MAIL_APPLICATION_SET_TO_CLIENT = 'api/task/mail_application_set_to_client',
  MAIL_APPLICATION_FORM_TO_CLIENT = 'api/task/mail_application_form_to_client',
  MAIL_DEPOSIT_TO_CLIENT = 'api/task/mail_deposit_to_client',
  MAIL_TRACKING_CODE_TO_THE_BANK = 'api/task/mail_tracking_code_to_the_bank',
  MAIL_TRACKING_CODE_TO_THE_BANK_REVIEW_APP_SET = 'api/task/mail_tracking_code_to_the_bank_review_app_set',
  MAIL_NOTIFY_CLIENT_ABOUT_THE_RESULT = 'api/task/mail_notify_client_about_the_result',
  MAIL_SERVICE_REQUEST_AGENT_ROUND_CHOP = 'api/task/mail_service_request_agent_round_chop',
  MAIL_SERVICE_REQUEST_AGENT_CERTIFICATION = 'api/task/mail_service_request_agent_certification',
  MAIL_SERVICE_REQUEST_AGENT_SHIPPING = 'api/task/mail_service_request_agent_shipping',
  REVIEW_EMAIL_SUPPLEMENT_DOCUMENT = 'api/task/review_email_supplement_document',
  SEND_EMAIL_SUPPLEMENT_DOCUMENT = 'api/task/send_email_supplement_document',
  ALL = 'api/task/all',
  RESTORE_BY_ID = 'api/task/restore/:id([0-9]+)',
  MAIL_CLIENT_REQUEST_CSMEMBER_CHECK_SEND_AGENT = 'api/task/mail_client_request_csmember_check_send_agent',
  MAIL_CLIENT_REQUEST_CSMEMBER_CHECK_SEND_CLIENT = 'api/task/mail_client_request_csmember_check_send_client',
  MAIL_SERVICE_REQUEST_AGENT_CHANGE_COMPANY = 'api/task/mail_service_request_agent_change_company',
  MAIL_SERVICE_REQUEST_AGENT_CHANGE_OFFICER = 'api/task/mail_service_request_agent_change_officer',
  MAIL_SERVICE_REQUEST_AGENT_CHANGE_NAME_OFFICER = 'api/task/mail_service_request_agent_change_name_officer',
  MAIL_DOC_SIGNING_CLIENT_CHANGE_NAME = 'api/task/mail_doc_signing_client_change_name',
  MAIL_RESEND_DOC_SIGNING_CLIENT_CHANGE_NAME = 'api/task/mail_resend_doc_signing_client_change_name',
  MAIL_SEND_DOC_SIGNED_TO_AGENT_CHANGE_NAME = 'api/task/mail_send_doc_signed_to_agent_change_name',
  MAIL_SEND_DOC_SIGNED_TO_AGENT_CHANGE_OFFICER = 'api/task/mail_send_doc_signed_to_agent_change_officer',
  MAIL_SEND_DOC_SIGNED_TO_AGENT_CHANGE_NAME_OFFICER = 'api/task/mail_send_doc_signed_to_agent_change_name_officer',
  MAIL_DOC_SIGNING_CLIENT_CHANGE_OFFICER = 'api/task/mail_doc_signing_client_change_officer',
  MAIL_DOC_SIGNING_CLIENT_CHANGE_NAME_OFFICER = 'api/task/mail_doc_signing_client_change_name_officer',
  HISTORY_LOG_CDC_BY_ID = 'api/task/:id([0-9]+)/history_log_cdc',
  COMPARE_COMPANY_INFO_BY_ID = 'api/task/:id([0-9]+)/compare_company_info',
  MAIL_REQUEST_CLIENT_SUPPLEMENT_DOCS = 'api/task/mail_request_client_supplement_docs',
  MAIL_REQUEST_AGENT_BOOKKEEPER = 'api/task/mail_request_agent_bookkeeper',
}

enum ROUTE_TEST {
  BASE = 'api/service',
  BY_ID = 'api/service/:id([0-9]+)',
  DELETE_MULTI = 'api/service/delete_multi',
}

enum ROUTE_UPLOAD {
  BASE = 'api/upload',
}

enum ROUTE_USER_CUSTOMER {
  BASE = 'api/user_customer',
  BY_ID = 'api/user_customer/:id([0-9]+)',
  PASSWORD_BY_ID = 'api/user_customer/password/:id([0-9]+)',
}

enum ROUTE_USER {
  BASE = 'api/user',
  BY_ID = 'api/user/:id([0-9]+)',
  PASSWORD = 'api/user/password',
  ROLE_BY_ID = 'api/user/:id([0-9]+)/role',
  GENERATE_PW = 'api/user/generate_pw',
}

enum ROUTE_WEBSITE {
  BASE = 'api/website',
  BY_ID = 'api/website/:id([0-9]+)',
  MAIL_VERIFY_URL_BY_ID = 'api/website/mail_verify_url/:id([0-9]+)',
  MAIL_TOKEN_BY_ID = 'api/website/mail_token/:id([0-9]+)',
  COMPANIES_HOUSE_AUTH = 'api/website/companies_house/auth',
}

enum ROUTE_XERO {
  BASE = 'api/xero',
  TENANTS = 'api/xero/tenants',
  TENANTS_DB = 'api/xero/tenants_db',
  TENANT_BY_ID = 'api/xero/tenant/:id([0-9]+)',
  TENANT = 'api/xero/tenant',
  INVOICE_BY_ID = 'api/xero/invoice/:id([0-9]+)',
  INVOICE_MULTI = 'api/xero/invoice/multi',
  ITEMS = 'api/xero/items',
}

export const ROUTES = {
  API_DOCS: 'api-docs',
  BBCSG: ROUTE_BBCSG,
  COMPLIANCE_RISK_ASSESSMENT_FORM: {
    CUSTOMER: ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__CUSTOMER,
    FINANCIAL: ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__FINANCIAL,
    NOTE: ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__NOTE,
    RISK_RATING: ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__RISK_RATING,
    SERVICE: ROUTE_COMPLIANCE_RISK_ASSESSMENT_FORM__SERVICE,
  },
  CUSTOMER_ACCOUNT: {
    DASHBOARD__ORDER: ROUTE_CUSTOMER_ACCOUNT__DASHBOARD__ORDER,
    BANKING: ROUTE_CUSTOMER_ACCOUNT__BANKING,
    BILLING: ROUTE_CUSTOMER_ACCOUNT__BILLING,
    BOOKKEEPER_PROCESS: ROUTE_CUSTOMER_ACCOUNT__BOOKKEEPER_PROCESS,
    BUSINESS_PLAN_FORM: ROUTE_CUSTOMER_ACCOUNT__BUSINESS_PLAN_FORM,
    CHECKNAME: ROUTE_CUSTOMER_ACCOUNT__CHECKNAME,
    COMPANY_EVENT: ROUTE_CUSTOMER_ACCOUNT__COMPANY_EVENT,
    COMPANY: ROUTE_CUSTOMER_ACCOUNT__COMPANY,
    FILE: ROUTE_CUSTOMER_ACCOUNT__FILE,
    HOLIDAY: ROUTE_CUSTOMER_ACCOUNT__HOLIDAY,
    INCORPORATION: ROUTE_CUSTOMER_ACCOUNT__INCORPORATION,
    INVOICE: ROUTE_CUSTOMER_ACCOUNT__INVOICE,
    MESSAGE: ROUTE_CUSTOMER_ACCOUNT__MESSAGE,
    ORDER_FORM: ROUTE_CUSTOMER_ACCOUNT__ORDER_FORM,
    ORDER: ROUTE_CUSTOMER_ACCOUNT__ORDER,
    PROCESS: ROUTE_CUSTOMER_ACCOUNT__PROCESS,
    SUPPORT_CASE: ROUTE_CUSTOMER_ACCOUNT__SUPPORT_CASE,
    TASK: ROUTE_CUSTOMER_ACCOUNT__TASK,
  },
  GLEADS: {
    CONTACT_FORM: ROUTE_GLEADS__CONTACT_FORM,
  },
  GLEADSSG: { STATIC_DATA: ROUTE_GLEADSSG__STATIC_DATA },
  ONBOARDING: {
    BANKING: ROUTE_ONBOARDING__BANKING,
    CHECK_NAME: ROUTE_ONBOARDING__CHECK_NAME,
    COUNTRY: ROUTE_ONBOARDING__COUNTRY,
    CUSTOMER: ROUTE_ONBOARDING__CUSTOMER,
    ENUM: ROUTE_ONBOARDING__ENUM,
    ORDER: ROUTE_ONBOARDING__ORDER,
    SERVICE: ROUTE_ONBOARDING__SERVICE,
    TRACKING: ROUTE_ONBOARDING__TRACKING,
  },
  PORTAL: {
    CAMPAIGN: {},
    TOOLS: {},
  },
  STATISTIC: {
    BOD: ROUTE_STATISTIC__BOD,
    CS: ROUTE_STATISTIC__CS,
  },
  STRIPE: {
    ENDPOINT_WEBHOOK: ROUTE_STRIPE__ENDPOINT_WEBHOOK,
  },
  SUNBRIGHTVN: {
    CONTACT_FORM: ROUTE_SUNBRIGHTVN__CONTACT_FORM,
  },
  VISA2ASIA: {
    POST: ROUTE_V2A__POST,
    SERVICES: ROUTE_V2A__SERVICES,
  },
  ADDITION_PROCESS: ROUTE_ADDITION_PROCESS,
  AGENCY: ROUTE_AGENCY,
  AGENT: ROUTE_AGENT,
  API: ROUTE_API,
  AUTH: ROUTE_AUTH,
  BANK_BRANCH: ROUTE_BANK_BRANCH,
  BANK: ROUTE_BANK,
  BANKING_PROCESS: ROUTE_BANKING_PROCESS,
  BOOKKEEPER_PROCESS: ROUTE_BOOKKEEPER_PROCESS,
  BUSINESS_PLAN_FORM: ROUTE_BUSINESS_PLAN_FORM,
  COMPANY_EVENT: ROUTE_COMPANY_EVENT,
  COMPANY_MEMBER: ROUTE_COMPANY_MEMBER,
  COMPANY: ROUTE_COMPANY,
  CONTACT_FROM: ROUTE_CONTACT_FROM,
  COUNTRY: ROUTE_COUNTRY,
  CURRENCY: ROUTE_CURRENCY,
  CUSTOMER: ROUTE_CUSTOMER,
  EMAIL_TEMPLATE: ROUTE_EMAIL_TEMPLATE,
  ENUM: ROUTE_ENUM,
  FILE_TEMPLATE: ROUTE_FILE_TEMPLATE,
  FILE: ROUTE_FILE,
  HELPER: ROUTE_HELPER,
  HISTORY_LOG_CDC: ROUTE_HISTORY_LOG_CDC,
  HOLIDAY: ROUTE_HOLIDAY,
  KYC: ROUTE_KYC,
  LIMIT_TYPE: ROUTE_LIMIT_TYPE,
  LIMIT: ROUTE_LIMIT,
  LOG_REPORT: ROUTE_LOG_REPORT,
  MAILCHIMP_CAMPAIGN: ROUTE_MAILCHIMP_CAMPAIGN,
  MAILCHIMP_TAG: ROUTE_MAILCHIMP_TAG,
  NOTE: ROUTE_NOTE,
  NOTIFICATION: ROUTE_NOTIFICATION,
  ORDER: ROUTE_ORDER,
  PACKAGE_TYPE: ROUTE_PACKAGE_TYPE,
  PACKAGE: ROUTE_PACKAGE,
  PERMISSION_GROUP: ROUTE_PERMISSION_GROUP,
  PERMISSION: ROUTE_PERMISSION,
  PERSON: ROUTE_PERSON,
  PERSONAL: ROUTE_PERSONAL,
  PROCESS_LOG: ROUTE_PROCESS_LOG,
  PROCESS_STEP: ROUTE_PROCESS_STEP,
  PROCESS: ROUTE_PROCESS,
  PROPOSED_TIME: ROUTE_PROPOSED_TIME,
  PUBLIC_TASK: ROUTE_PUBLIC_TASK,
  QUORA: ROUTE_QUORA,
  REPORT: ROUTE_REPORT,
  ROLE: ROUTE_ROLE,
  SCHEDULE_MEETING: ROUTE_SCHEDULE_MEETING,
  SERVICE_TYPE: ROUTE_SERVICE_TYPE,
  SERVICE: ROUTE_SERVICE,
  SUPPORT_CASE: ROUTE_SUPPORT_CASE,
  SYSLOG: ROUTE_SYSLOG,
  TARGET: ROUTE_TARGET,
  TASK: ROUTE_TASK,
  TEST: ROUTE_TEST,
  UPLOAD: ROUTE_UPLOAD,
  USER_CUSTOMER: ROUTE_USER_CUSTOMER,
  USER: ROUTE_USER,
  WEBSITE: ROUTE_WEBSITE,
  XERO: ROUTE_XERO,
};

export enum API_TAGS {
  AUTH = 'Auth',
  WEBSITE = 'Website',
  ENUM = 'Enum',
}
