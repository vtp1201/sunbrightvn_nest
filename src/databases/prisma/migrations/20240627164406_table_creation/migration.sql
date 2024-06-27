-- CreateTable
CREATE TABLE `action_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `description` VARCHAR(255) NULL,
    `type` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`, `type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `action_process_step` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `process_step_id` INTEGER NOT NULL,
    `next_process_step_id` INTEGER NOT NULL,
    `country_id` INTEGER NULL,
    `bank_id` INTEGER NULL,
    `priority` TINYINT NULL DEFAULT 1,
    `service_type_id` INTEGER NULL,
    `action_step_type_id` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `action_step_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addition_process` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `tracking_link` VARCHAR(200) NULL,
    `service_type_ids` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agency` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NULL,
    `email` VARCHAR(200) NULL,
    `country_id` INTEGER NULL,
    `agency_id` INTEGER NOT NULL,
    `agent_type_id` INTEGER NOT NULL,
    `bank_id` INTEGER NULL,
    `is_has_nominee` BOOLEAN NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agent_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `airport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value_int` INTEGER NULL,
    `value_text` TEXT NULL,
    `option_id` INTEGER NOT NULL,
    `task_id` INTEGER NULL,
    `fatca_id` INTEGER NULL,
    `select_country_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `question_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `api_method_id` INTEGER NOT NULL,
    `note` JSON NULL,
    `is_recaptcha` BOOLEAN NULL DEFAULT false,
    `is_authorization` BOOLEAN NULL DEFAULT false,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_example` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `api_id` INTEGER NOT NULL,
    `api_status_id` INTEGER NOT NULL,
    `api_group_id` INTEGER NULL,
    `body` JSON NULL,
    `param` JSON NULL,
    `query` JSON NULL,
    `response` JSON NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_has_group` (
    `api_id` INTEGER NOT NULL,
    `api_group_id` INTEGER NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`api_group_id`, `api_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_method` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `api_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `image` VARCHAR(200) NULL,
    `country_id` INTEGER NULL,
    `initial_deposit` INTEGER NULL,
    `is_virtual` BOOLEAN NULL DEFAULT false,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NULL,
    `address` VARCHAR(200) NULL,
    `bank_id` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_has_country` (
    `bank_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,
    `is_member_country` BOOLEAN NULL DEFAULT false,
    `is_partner_country` BOOLEAN NULL DEFAULT false,
    `is_owner_country` BOOLEAN NULL DEFAULT false,
    `is_remote_opening` BOOLEAN NULL DEFAULT false,
    `score` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`bank_id`, `country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_has_file_template` (
    `bank_id` INTEGER NOT NULL,
    `file_template_id` INTEGER NOT NULL,

    PRIMARY KEY (`bank_id`, `file_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bank_has_keyword` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bank_id` INTEGER NOT NULL,
    `keyword` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `banking_process` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NULL,
    `bank_id` INTEGER NULL,
    `status` INTEGER NULL DEFAULT 0,
    `client_time` BIGINT NULL,
    `content` VARCHAR(200) NOT NULL,
    `bank_branch_id` INTEGER NULL,
    `contact_person` TEXT NULL,
    `title_job` VARCHAR(100) NULL,
    `phone` VARCHAR(45) NULL,
    `application_set_tracking_code` VARCHAR(100) NULL,
    `application_form_tracking_code` VARCHAR(100) NULL,
    `url_video` VARCHAR(100) NULL,
    `phone_country_id` INTEGER NULL,
    `bank_address` VARCHAR(45) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `billing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `name` TEXT NULL,
    `postal_code` VARCHAR(45) NULL,
    `phone` VARCHAR(45) NULL,
    `address` TEXT NULL,
    `address_1` TEXT NULL,
    `state` VARCHAR(225) NULL,
    `city` VARCHAR(225) NULL,
    `first_name` VARCHAR(200) NULL,
    `last_name` VARCHAR(200) NULL,
    `phone_number` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `tax_id` VARCHAR(50) NULL,
    `xero_contact_id` VARCHAR(255) NULL,
    `addition_process_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `billing_xero_contact_id_key`(`xero_contact_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_activity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `country_id` INTEGER NULL,
    `sic_code` VARCHAR(10) NULL,
    `description` TEXT NULL,
    `business_activity_industry_id` INTEGER NULL,
    `label_ids` JSON NULL,
    `is_common` BOOLEAN NULL DEFAULT false,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_activity_industry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `country_id` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `parent_ids` JSON NULL,
    `business_activity_industry_class_id` INTEGER NULL,
    `sic_code` VARCHAR(10) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_activity_industry_class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `business_activity_label` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `description` TEXT NULL,
    `campaign_type_id` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign_has_voucher_type` (
    `campaign_id` INTEGER NOT NULL,
    `voucher_type_id` INTEGER NOT NULL,
    `total_quantity` INTEGER NULL,
    `remaining_quantity` INTEGER NULL,
    `percent` INTEGER NULL,
    `config` JSON NULL,

    PRIMARY KEY (`campaign_id`, `voucher_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `car_seat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NULL,
    `baby_max` INTEGER NULL DEFAULT 0,
    `value` INTEGER NULL DEFAULT 0,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `change_request` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `company_id` INTEGER NOT NULL,
    `change_request_status_id` INTEGER NOT NULL,
    `company_member_id` INTEGER NULL,
    `company_position_id` INTEGER NULL,
    `to_company_member_id` INTEGER NULL,
    `to_company_position_id` INTEGER NULL,
    `change_request_related_id` INTEGER NULL,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `change_request_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `change_request_id` INTEGER NOT NULL,
    `model` VARCHAR(100) NOT NULL,
    `field_name` VARCHAR(100) NOT NULL,
    `value` TEXT NOT NULL,
    `is_fee` BOOLEAN NOT NULL DEFAULT true,
    `data_type` VARCHAR(45) NOT NULL,
    `target_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `change_request_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `click` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `google_client_id` VARCHAR(225) NULL,
    `ip_address` VARCHAR(45) NULL,
    `voucher_type_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `version` INTEGER NOT NULL DEFAULT 0,
    `company_code` VARCHAR(255) NULL,
    `country_id` INTEGER NULL,
    `company_reg_no` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `company_status_id` INTEGER NULL,
    `entity_type_id` INTEGER NULL,
    `company_suffix_id` INTEGER NULL,
    `preventive_name` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `tax` VARCHAR(255) NULL,
    `tin` VARCHAR(45) NULL,
    `description` VARCHAR(255) NULL,
    `note` VARCHAR(255) NULL,
    `incorporation_date` DATE NULL,
    `xero_contact_id` VARCHAR(255) NULL,
    `business_activity` VARCHAR(255) NULL,
    `is_outside_company` BOOLEAN NOT NULL DEFAULT false,
    `renewal_date` DATE NULL,
    `billing_id` INTEGER NULL,
    `contact_full_name` VARCHAR(255) NULL,
    `contact_phone` VARCHAR(255) NULL,
    `contact_email` VARCHAR(255) NULL,
    `contact_address` VARCHAR(255) NULL,
    `tin_code` VARCHAR(255) NULL,
    `pin_code` VARCHAR(255) NULL,
    `contact_phone_country_id` INTEGER NULL,
    `contact_phone_number` VARCHAR(255) NULL,
    `contact_state` VARCHAR(255) NULL,
    `contact_city` VARCHAR(255) NULL,
    `contact_postal_code` VARCHAR(255) NULL,
    `operating_country_id` INTEGER NULL,
    `operating_city` VARCHAR(200) NULL,
    `operating_state` VARCHAR(200) NULL,
    `operating_postal_code` VARCHAR(20) NULL,
    `source_fund` VARCHAR(255) NULL,
    `business_full_name` VARCHAR(200) NULL,
    `business_address` VARCHAR(200) NULL,
    `business_country_id` INTEGER NULL,
    `business_city` VARCHAR(200) NULL,
    `business_state` VARCHAR(200) NULL,
    `business_postal_code` VARCHAR(20) NULL,
    `business_day_end` INTEGER NULL,
    `business_month_end` INTEGER NULL,
    `share_capital_par_value` INTEGER NULL,
    `share_capital_type_of_share` INTEGER NULL,
    `share_capital_number_share` INTEGER NULL,
    `share_capital` INTEGER NULL,
    `share_capital_class_of_share` VARCHAR(255) NULL,
    `issued_number_shared` INTEGER NULL,
    `remaining_number_share` INTEGER NULL,
    `articles_of_organization` INTEGER NULL,
    `record_number` VARCHAR(255) NULL,
    `num_of_checking_bank` INTEGER NULL,
    `business_annual_report` VARCHAR(255) NULL,
    `seal_image` VARCHAR(255) NULL,
    `left_checking_bank` INTEGER NULL,
    `business_activity_detail` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `order_id` INTEGER NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `date_completed` DATE NULL,
    `due_date` DATE NULL,
    `date_remind` DATE NULL,
    `is_not_show` BOOLEAN NOT NULL DEFAULT false,
    `company_event_type_id` INTEGER NULL,
    `is_notify_due_renewal` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_event_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_has_business_activity` (
    `company_id` INTEGER NOT NULL,
    `business_activity_id` INTEGER NOT NULL,

    PRIMARY KEY (`company_id`, `business_activity_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_has_currency` (
    `company_id` INTEGER NOT NULL,
    `currency_id` INTEGER NOT NULL,

    PRIMARY KEY (`company_id`, `currency_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_has_operation_country` (
    `company_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,

    PRIMARY KEY (`company_id`, `country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_interest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `no` INTEGER NULL,
    `company_id` INTEGER NOT NULL,
    `company_member_id` INTEGER NOT NULL,
    `company_position_id` INTEGER NULL,
    `corporation_company_member_id` INTEGER NULL,
    `start_number` INTEGER NULL,
    `end_number` INTEGER NULL,
    `value` FLOAT NOT NULL,
    `is_valid` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `issued_file_id` INTEGER NULL,
    `issued_dated` DATE NULL,
    `expired_dated` DATE NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_id` INTEGER NOT NULL,
    `country_id` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `type_member_id` INTEGER NULL,
    `is_nominee` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `first_name` VARCHAR(255) NULL,
    `middle_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `full_name` VARCHAR(255) NULL,
    `corporation_name` VARCHAR(255) NULL,
    `corporation_number` VARCHAR(255) NULL,
    `corporation_date` DATE NULL,
    `gender_id` INTEGER NULL,
    `major` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `birthday` DATE NULL,
    `birth_country_id` INTEGER NULL,
    `address` VARCHAR(255) NULL,
    `passport` VARCHAR(255) NULL,
    `passport_issue_date` DATE NULL,
    `passport_expire_date` DATE NULL,
    `ssn` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `phone_number` VARCHAR(255) NULL,
    `asset_source_fund_cast_in_bank` INTEGER NULL,
    `asset_source_fund_real_estate` INTEGER NULL,
    `asset_source_fund_other_detail` VARCHAR(255) NULL,
    `asset_source_fund_other_money` INTEGER NULL,
    `income_source_fund_investment` INTEGER NULL,
    `income_source_fund_self_employed` INTEGER NULL,
    `income_source_fund_other_detail` VARCHAR(255) NULL,
    `income_source_fund_other_money` INTEGER NULL,
    `business_activity_detail` TEXT NULL,
    `service_address` VARCHAR(255) NULL,
    `operation_address` VARCHAR(255) NULL,
    `nature_business` VARCHAR(255) NULL,
    `relationship_intended_company` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `state` VARCHAR(255) NULL,
    `postal_code` VARCHAR(255) NULL,
    `address_country_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_member_has_operation_countries` (
    `company_member_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,

    PRIMARY KEY (`company_member_id`, `country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_member_issue_reference` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_member_references` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_member_id` INTEGER NOT NULL,
    `company_member_issuse_reference_id` INTEGER NULL,
    `name` VARCHAR(255) NULL,
    `phone_number` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `fax` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_member_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `parent_id` INTEGER NULL,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_ownership` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `no` INTEGER NULL,
    `company_id` INTEGER NOT NULL,
    `company_member_id` INTEGER NOT NULL,
    `company_position_id` INTEGER NULL,
    `corporation_company_member_id` INTEGER NULL,
    `value` FLOAT NOT NULL,
    `is_valid` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `issued_file_id` INTEGER NULL,
    `issued_dated` DATE NULL,
    `expired_dated` DATE NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_member_id` INTEGER NOT NULL,
    `company_member_type_id` INTEGER NOT NULL,
    `corporation_company_member_id` INTEGER NULL,
    `number_allotted` INTEGER NOT NULL DEFAULT 0,
    `percent_of_interest` FLOAT NOT NULL DEFAULT 0,
    `own_percent` FLOAT NOT NULL DEFAULT 0,
    `date_of_appointment` DATE NULL,
    `date_of_resign` DATE NULL,
    `is_appointed` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `is_contact_person` BOOLEAN NOT NULL DEFAULT false,
    `is_handle_relationship_contact_person` BOOLEAN NOT NULL DEFAULT false,
    `position_detail` VARCHAR(255) NULL,
    `relationship_with_company` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_share` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `no` INTEGER NULL,
    `company_id` INTEGER NOT NULL,
    `company_member_id` INTEGER NOT NULL,
    `company_position_id` INTEGER NULL,
    `corporation_company_member_id` INTEGER NULL,
    `start_number` BIGINT NULL,
    `end_number` BIGINT NULL,
    `value` BIGINT NOT NULL,
    `is_valid` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `issued_file_id` INTEGER NULL,
    `issued_dated` DATE NULL,
    `expired_dated` DATE NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_suffix` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `is_prefix` BOOLEAN NOT NULL DEFAULT false,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_from` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` TEXT NULL,
    `type` INTEGER NOT NULL DEFAULT 2,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contact_from_history` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `contact_from_id` INTEGER NOT NULL,
    `tag_name` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `continent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `guid` VARCHAR(100) NOT NULL,
    `country_code` VARCHAR(45) NULL,
    `phone_code` VARCHAR(45) NULL,
    `sub_name` VARCHAR(255) NOT NULL,
    `is_restricted` BOOLEAN NOT NULL DEFAULT false,
    `is_country` BOOLEAN NOT NULL DEFAULT false,
    `continent_id` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `country_guid_key`(`guid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_has_company_suffix` (
    `country_id` INTEGER NOT NULL,
    `company_suffix_id` INTEGER NOT NULL,

    PRIMARY KEY (`country_id`, `company_suffix_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_has_entity_type` (
    `country_id` INTEGER NOT NULL,
    `entity_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`country_id`, `entity_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_has_entity_type_has_file_template` (
    `country_has_entity_type_id` INTEGER NOT NULL,
    `file_template_id` INTEGER NOT NULL,

    PRIMARY KEY (`country_has_entity_type_id`, `file_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_has_question` (
    `country_id` INTEGER NOT NULL,
    `question_id` INTEGER NOT NULL,

    PRIMARY KEY (`country_id`, `question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country_has_service` (
    `country_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,

    PRIMARY KEY (`country_id`, `service_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `credit_amount` FLOAT NOT NULL DEFAULT 0,
    `credit_description` TEXT NULL,
    `country_id` INTEGER NULL,
    `person_id` INTEGER NULL,
    `campaign_ads_id` INTEGER NULL,
    `client_id` INTEGER NULL,
    `ga_channel_id` INTEGER NULL,
    `contact_from_id` INTEGER NULL,
    `entity_type_id` INTEGER NULL,
    `company_suffix_id` INTEGER NULL,
    `company_country_id` INTEGER NULL,
    `title_name_id` INTEGER NULL,
    `website_id` INTEGER NOT NULL DEFAULT 1,
    `customer_type_id` INTEGER NULL,
    `first_name` VARCHAR(45) NULL,
    `last_name` VARCHAR(45) NULL,
    `address` TEXT NULL,
    `gender_id` INTEGER NULL,
    `email` VARCHAR(320) NULL,
    `cc_email` TEXT NULL,
    `email_status` VARCHAR(20) NULL,
    `phone` VARCHAR(45) NULL,
    `phone_number` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `skype` VARCHAR(45) NULL,
    `status` INTEGER NULL DEFAULT 0,
    `company_name` TEXT NULL,
    `description` TEXT NULL,
    `image` VARCHAR(250) NULL,
    `signature` TEXT NULL,
    `other_type` TEXT NULL,
    `business_description` TEXT NULL,
    `subject` TEXT NULL,
    `message` TEXT NULL,
    `entry_time` DATETIME(0) NULL,
    `birthday` DATETIME(0) NULL,
    `exit_time` DATETIME(0) NULL,
    `passport` TEXT NULL,
    `flight_number` TEXT NULL,
    `arrival_time` DATETIME(0) NULL,
    `airport_id` INTEGER NULL,
    `visa_purpose_id` INTEGER NULL,
    `visa_type_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `mailchimp_id` TEXT NULL,
    `survey_content` TEXT NULL,
    `xero_contact_id` TEXT NULL,
    `logs` TEXT NULL,
    `customer_status_id` INTEGER NULL DEFAULT 0,
    `city` VARCHAR(200) NULL,
    `state` VARCHAR(200) NULL,
    `postal_code` VARCHAR(200) NULL,
    `company_registration_no` VARCHAR(200) NULL,
    `company_address` VARCHAR(200) NULL,
    `company_address_country_id` INTEGER NULL,
    `company_address_city` VARCHAR(200) NULL,
    `company_address_state` VARCHAR(200) NULL,
    `company_address_postal_code` VARCHAR(100) NULL,
    `is_first_login` BOOLEAN NOT NULL DEFAULT false,
    `business_activity_industry_id` INTEGER NULL,
    `package_id` INTEGER NULL,
    `cs_leader_id` INTEGER NULL,
    `cs_member_id` INTEGER NULL,
    `accountant_leader_id` INTEGER NULL,
    `accountant_member_id` INTEGER NULL,
    `legal_leader_id` INTEGER NULL,
    `legal_member_id` INTEGER NULL,
    `compliance_leader_id` INTEGER NULL,
    `compliance_member_id` INTEGER NULL,
    `internal_bookeeping_leader_id` INTEGER NULL,
    `internal_bookeeping_member_id` INTEGER NULL,
    `tester_leader_id` INTEGER NULL,
    `time_unassigned_tester` BIGINT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_has_bank` (
    `customer_id` INTEGER NOT NULL,
    `bank_id` INTEGER NOT NULL,

    PRIMARY KEY (`customer_id`, `bank_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_has_survey_choice` (
    `customer_id` INTEGER NOT NULL,
    `survey_choice_id` INTEGER NOT NULL,
    `survey_content` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `customer_has_survey_choice_customer_id_idx`(`customer_id`),
    PRIMARY KEY (`customer_id`, `survey_choice_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `declaration_tax` (
    `country_id` INTEGER NOT NULL,
    `fatca_id` INTEGER NOT NULL,
    `tax_reference_type` VARCHAR(255) NULL,
    `tax_reference_number` VARCHAR(255) NULL,
    `deleted_time` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`country_id`, `fatca_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL DEFAULT '',
    `config` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email_template_id` INTEGER NULL,
    `subject` VARCHAR(255) NULL,
    `agent_id` INTEGER NULL,
    `process_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `order` INTEGER NULL,
    `time_to_send` BIGINT NULL,
    `is_completed` BOOLEAN NOT NULL DEFAULT false,
    `is_error` BOOLEAN NOT NULL DEFAULT false,
    `is_running` BOOLEAN NOT NULL DEFAULT false,
    `description` TEXT NULL,
    `email_from` VARCHAR(200) NULL,
    `email_to` VARCHAR(225) NULL,
    `email_cc` VARCHAR(255) NULL,
    `attachments` LONGTEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `preview_text` VARCHAR(255) NULL,
    `path` VARCHAR(200) NULL,
    `pre_time` INTEGER NULL,
    `next_email_template_id` INTEGER NULL,
    `process_step_id` INTEGER NULL,
    `email_type_id` INTEGER NULL,
    `max_time_send` INTEGER NULL,
    `is_email_remind` BOOLEAN NOT NULL DEFAULT false,
    `data_view_tables` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_template_has_receiver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email_template_id` INTEGER NOT NULL,
    `email` VARCHAR(100) NULL,
    `user_id` INTEGER NULL,
    `role_id` INTEGER NULL,
    `group_id` INTEGER NULL,
    `is_main_receiver` BOOLEAN NOT NULL DEFAULT false,
    `is_cc_receiver` BOOLEAN NOT NULL DEFAULT false,
    `is_bcc_receiver` BOOLEAN NOT NULL DEFAULT false,
    `is_excluded` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_trigger` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `type` INTEGER NULL,
    `service_type_ids` JSON NULL,
    `process_step_id` INTEGER NULL,
    `is_remind_agent` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_trigger_has_process` (
    `email_trigger_id` INTEGER NOT NULL,
    `process_id` INTEGER NOT NULL,
    `email_template_id` INTEGER NOT NULL,
    `is_remind` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`email_template_id`, `email_trigger_id`, `process_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `email_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entity_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NULL,
    `guid` TEXT NULL,
    `country` TEXT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entity_type_has_company_suffix` (
    `entity_type_id` INTEGER NOT NULL,
    `company_suffix_id` INTEGER NOT NULL,

    PRIMARY KEY (`entity_type_id`, `company_suffix_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fatca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_member_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `task_id` INTEGER NOT NULL,
    `holder_name` VARCHAR(255) NOT NULL,
    `holder_birthday` DATE NOT NULL,
    `holder_country_id` INTEGER NULL,
    `resident_address` VARCHAR(255) NULL,
    `resident_country_id` INTEGER NULL,
    `resident_city` VARCHAR(255) NULL,
    `resident_state` VARCHAR(255) NULL,
    `resident_postal_code` VARCHAR(255) NULL,
    `mailing_address` VARCHAR(255) NULL,
    `mailing_country_id` INTEGER NULL,
    `mailing_city` VARCHAR(255) NULL,
    `mailing_state` VARCHAR(255) NULL,
    `mailing_postal_code` VARCHAR(255) NULL,
    `option_declaration_US_person` INTEGER NULL,
    `taxpayer_id_number` VARCHAR(255) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_id` INTEGER NULL,
    `fee_type_id` INTEGER NOT NULL,
    `value` FLOAT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fee_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(45) NULL,
    `name` VARCHAR(45) NULL,
    `cycle_begin` INTEGER NULL DEFAULT 0,
    `cycle_time` INTEGER NULL,
    `description` TEXT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `path` VARCHAR(255) NULL,
    `mime_type` VARCHAR(255) NULL,
    `s3_path` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `message_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `file_type_id` INTEGER NULL,
    `task_id` INTEGER NULL,
    `file_template_id` INTEGER NULL,
    `filled_by_company_member_id` INTEGER NULL,
    `is_filled` BOOLEAN NOT NULL DEFAULT false,
    `full_name` VARCHAR(255) NULL,
    `ip_address` VARCHAR(255) NULL,
    `note_id` INTEGER NULL,
    `bank_id` INTEGER NULL,
    `ranking_partner_id` INTEGER NULL,
    `change_request_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `api_example_id` INTEGER NULL,
    `question_group_id` INTEGER NULL,
    `to_company_member_id` INTEGER NULL,
    `type_id` INTEGER NULL,
    `filled_by_user_id` INTEGER NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `company_event_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `path_template` VARCHAR(255) NULL,
    `is_not_signed` BOOLEAN NOT NULL DEFAULT false,
    `is_esign` BOOLEAN NOT NULL DEFAULT false,
    `is_signed_for_FATCA` BOOLEAN NOT NULL DEFAULT false,
    `is_approved_date_appointment` BOOLEAN NOT NULL DEFAULT false,
    `is_inactive` BOOLEAN NOT NULL DEFAULT false,
    `collect_same_id` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `file_template_type_id` INTEGER NULL,
    `file_type_id` INTEGER NULL,
    `data_config` JSON NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_template_has_company_member_type` (
    `file_template_id` INTEGER NOT NULL,
    `company_member_type_id` INTEGER NOT NULL,
    `type_member_id` INTEGER NULL,
    `is_signed_by_all` BOOLEAN NOT NULL DEFAULT false,
    `is_signed_by_appointed` BOOLEAN NOT NULL DEFAULT false,
    `is_signed_by_individual` BOOLEAN NOT NULL DEFAULT false,
    `is_signed_transfer` BOOLEAN NOT NULL DEFAULT false,
    `is_signed_by_oldest_member` BOOLEAN NOT NULL DEFAULT false,
    `generated_for` ENUM('FOR_ONE', 'FOR_ALL', 'FOR_ALL_LEVEL', 'FOR_NEW_MEMBER', 'FOR_REMOVE_MEMBER', 'FOR_TRANSFER') NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`file_template_id`, `company_member_type_id`, `generated_for`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_template_has_nationality` (
    `file_template_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,
    `is_fill_more_information` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`country_id`, `file_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_template_has_ranking_partner_type` (
    `file_template_id` INTEGER NOT NULL,
    `ranking_partner_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`file_template_id`, `ranking_partner_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_template_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `file_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(120) NOT NULL,
    `file_type_group_id` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ga_channel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gender` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `prefix` VARCHAR(45) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grant_scheme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `country_id` INTEGER NULL,
    `key_facts` TEXT NULL,
    `introduction` TEXT NULL,
    `benefits` TEXT NULL,
    `eligibility` TEXT NULL,
    `how_to_apply` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grant_scheme_has_grant_type_attribute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grant_scheme_id` INTEGER NOT NULL,
    `needs_based_id` INTEGER NULL,
    `industry_id` INTEGER NULL,
    `business_stage_id` INTEGER NULL,
    `years_operation_id` INTEGER NULL,
    `business_size_id` INTEGER NULL,
    `local_shareholding_id` INTEGER NULL,
    `number_employees_id` INTEGER NULL,
    `type_id` INTEGER NULL,
    `agency_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grant_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grant_type_attribute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grant_type_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `parent_id` INTEGER NULL,
    `country_id` INTEGER NULL,
    `grant_type_attribute_col` VARCHAR(45) NULL,
    `is_disabled` BOOLEAN NULL DEFAULT false,
    `order` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_has_user` (
    `user_id` INTEGER NOT NULL,
    `group_id` INTEGER NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`group_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `version` INTEGER NOT NULL DEFAULT 1,
    `company_id` INTEGER NOT NULL,
    `task_id` INTEGER NOT NULL,
    `company_code` VARCHAR(255) NULL,
    `country_id` INTEGER NULL,
    `company_reg_no` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `company_status_id` INTEGER NULL,
    `entity_type_id` INTEGER NULL,
    `company_suffix_id` INTEGER NULL,
    `preventive_name` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `tax` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `note` VARCHAR(255) NULL,
    `incorporation_date` DATE NULL,
    `xero_contact_id` VARCHAR(255) NULL,
    `is_outside_company` BOOLEAN NOT NULL DEFAULT false,
    `renewal_date` DATE NULL,
    `billing_id` INTEGER NULL,
    `contact_full_name` VARCHAR(255) NULL,
    `contact_phone` VARCHAR(255) NULL,
    `contact_email` VARCHAR(255) NULL,
    `contact_address` VARCHAR(255) NULL,
    `tin_code` VARCHAR(255) NULL,
    `pin_code` VARCHAR(255) NULL,
    `contact_phone_country_id` INTEGER NULL,
    `contact_phone_number` VARCHAR(255) NULL,
    `contact_state` VARCHAR(255) NULL,
    `contact_city` VARCHAR(255) NULL,
    `contact_postal_code` VARCHAR(255) NULL,
    `operating_country_id` INTEGER NULL,
    `operating_city` VARCHAR(200) NULL,
    `operating_state` VARCHAR(200) NULL,
    `operating_postal_code` VARCHAR(20) NULL,
    `source_fund` VARCHAR(255) NULL,
    `business_full_name` VARCHAR(200) NULL,
    `business_address` VARCHAR(200) NULL,
    `business_country_id` INTEGER NULL,
    `business_city` VARCHAR(200) NULL,
    `business_state` VARCHAR(200) NULL,
    `business_postal_code` VARCHAR(20) NULL,
    `business_day_end` INTEGER NULL,
    `business_month_end` INTEGER NULL,
    `share_capital_par_value` INTEGER NULL,
    `share_capital_type_of_share` INTEGER NULL,
    `share_capital_number_share` INTEGER NULL,
    `share_capital` INTEGER NULL,
    `share_capital_class_of_share` VARCHAR(255) NULL,
    `issued_number_share` INTEGER NULL,
    `remaining_number_share` INTEGER NULL,
    `articles_of_organization` INTEGER NULL,
    `record_number` VARCHAR(255) NULL,
    `num_of_checking_bank` INTEGER NULL,
    `business_annual_report` VARCHAR(255) NULL,
    `seal_image` VARCHAR(255) NULL,
    `left_checking_bank` INTEGER NULL,
    `business_activity_detail` INTEGER NULL,
    `CompanyHasBusinessActivity` JSON NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_company_member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `version` INTEGER NOT NULL DEFAULT 1,
    `task_id` INTEGER NOT NULL,
    `company_id` INTEGER NOT NULL,
    `company_member_id` INTEGER NOT NULL,
    `country_id` INTEGER NULL,
    `type_member_id` INTEGER NULL,
    `is_nominee` BOOLEAN NOT NULL DEFAULT false,
    `is_approved` BOOLEAN NOT NULL DEFAULT false,
    `first_name` VARCHAR(255) NULL,
    `middle_name` VARCHAR(255) NULL,
    `last_name` VARCHAR(255) NULL,
    `full_name` VARCHAR(255) NULL,
    `corporation_name` VARCHAR(255) NULL,
    `corporation_number` VARCHAR(255) NULL,
    `corporation_date` DATE NULL,
    `gender_id` INTEGER NULL,
    `major` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `birthday` DATE NULL,
    `birth_country_id` INTEGER NULL,
    `address` VARCHAR(255) NULL,
    `passport` VARCHAR(255) NULL,
    `passport_issue_date` DATE NULL,
    `passport_expire_date` DATE NULL,
    `ssn` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `phone_number` VARCHAR(255) NULL,
    `asset_source_fund_cast_in_bank` INTEGER NULL,
    `asset_source_fund_real_estate` INTEGER NULL,
    `asset_source_fund_other_detail` VARCHAR(255) NULL,
    `asset_source_fund_other_money` INTEGER NULL,
    `income_source_fund_investment` INTEGER NULL,
    `income_source_fund_self_employed` INTEGER NULL,
    `income_source_fund_other_detail` VARCHAR(255) NULL,
    `income_source_fund_other_money` INTEGER NULL,
    `business_activity_detail` TEXT NULL,
    `service_address` VARCHAR(255) NULL,
    `operation_address` VARCHAR(255) NULL,
    `nature_business` VARCHAR(255) NULL,
    `relationship_intended_company` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `state` VARCHAR(255) NULL,
    `postal_code` VARCHAR(255) NULL,
    `address_country_id` INTEGER NULL,
    `CompanyPositions` JSON NULL,
    `CompanyShares` JSON NULL,
    `CompanyInterests` JSON NULL,
    `CompanyOwnerships` JSON NULL,
    `Files` JSON NULL,
    `CompanyMemberReferences` JSON NULL,
    `BusinessActivities` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_file` (
    `file_id` INTEGER NOT NULL,
    `history_log_cdc_id` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`file_id`, `history_log_cdc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history_log_cdc` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `task_id` INTEGER NOT NULL,
    `company_id` INTEGER NULL,
    `action_step_type_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `holiday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `day` INTEGER NOT NULL,
    `month` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `country_id` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `limit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `limit_type_id` INTEGER NOT NULL,
    `permission_group_id` INTEGER NOT NULL,
    `permission_id` INTEGER NOT NULL,
    `model` VARCHAR(100) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `limit_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(200) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `limit_value` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `limit_id` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `description` VARCHAR(200) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mailchimp_campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `workflow_id` VARCHAR(45) NULL,
    `mailchimp_type_id` INTEGER NULL,
    `parent_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mailchimp_campaign_member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mailchimp_member_email_id` VARCHAR(255) NULL,
    `mailchimp_campaign_id` INTEGER NOT NULL,
    `conv_date` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `reason` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mailchimp_member` (
    `email_id` VARCHAR(255) NOT NULL,
    `email_address` VARCHAR(255) NOT NULL,
    `opt_in_time` DATETIME(3) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`email_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mailchimp_summary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `open` INTEGER NULL,
    `unique_open` INTEGER NULL,
    `click` INTEGER NULL,
    `subscriber_click` INTEGER NULL,
    `email_sent` INTEGER NULL,
    `unsubscribed` INTEGER NULL,
    `bounced` INTEGER NULL,
    `abused_report` INTEGER NULL,
    `mailchimp_campaign_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mailchimp_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `description` TEXT NULL,
    `contact_from_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `support_case_id` INTEGER NOT NULL,
    `content` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `task_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `is_belong_to_client` BOOLEAN NOT NULL DEFAULT false,
    `is_compliance_reject` BOOLEAN NOT NULL DEFAULT false,
    `user_id` INTEGER NULL,
    `note_type_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `note_status_id` INTEGER NULL,
    `process_step_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `note_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NULL,
    `description` VARCHAR(255) NOT NULL,
    `target_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `task_id` INTEGER NULL,
    `profile_id` INTEGER NULL,
    `support_case_id` INTEGER NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `notification_type_id` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_template` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `message` TEXT NULL,
    `is_notify_to_customer` BOOLEAN NOT NULL DEFAULT false,
    `is_notify_to_leader` BOOLEAN NOT NULL DEFAULT false,
    `is_notify_to_supporter` BOOLEAN NOT NULL DEFAULT false,
    `notification_status_id` INTEGER NULL,
    `notification_type_id` INTEGER NULL,
    `process_step_id` INTEGER NULL,
    `action_step_type_id` INTEGER NULL,
    `subscription_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_template_has_role` (
    `role_id` INTEGER NOT NULL,
    `notification_template_id` INTEGER NOT NULL,

    PRIMARY KEY (`notification_template_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notification_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `option` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `question_id` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `amount` FLOAT NULL,
    `amount_converted` FLOAT NULL,
    `amount_code` VARCHAR(45) NULL,
    `amount_exchange_rate` FLOAT NULL,
    `paid_amount` FLOAT NULL,
    `refund_amount` FLOAT NULL,
    `discount` FLOAT NULL,
    `credit_amount` FLOAT NULL,
    `credit_description` VARCHAR(255) NULL,
    `annual_fee` FLOAT NULL,
    `is_invoiced` BOOLEAN NOT NULL DEFAULT false,
    `order_code` VARCHAR(255) NULL,
    `xero_invoice_id` VARCHAR(255) NULL,
    `payment_gateway_id` INTEGER NULL,
    `paypal_order_id` VARCHAR(255) NULL,
    `paypal_invoice_id` VARCHAR(255) NULL,
    `xero_invoice_status_id` INTEGER NULL,
    `xero_invoice_url` VARCHAR(255) NULL,
    `xero_invoice_no` VARCHAR(255) NULL,
    `order_status_id` INTEGER NOT NULL DEFAULT 0,
    `paid_time` DATETIME(3) NULL,
    `website_id` INTEGER NULL DEFAULT 1,
    `billing_id` INTEGER NULL,
    `order_from_id` INTEGER NULL,
    `country_card_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_from` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_has_bank` (
    `bank_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,

    PRIMARY KEY (`bank_id`, `order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `package_id` INTEGER NULL,
    `unit_price` FLOAT NULL,
    `quantity` INTEGER NULL,
    `amount` FLOAT NULL,
    `description` TEXT NULL,
    `voucher_id` INTEGER NULL,
    `promotion_id` INTEGER NULL,
    `is_refund` BOOLEAN NOT NULL DEFAULT false,
    `discount_order_item_id` INTEGER NULL,
    `order_item_status_id` INTEGER NOT NULL DEFAULT 0,
    `finished_time` DATETIME(3) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_item_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `order` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_type_id` INTEGER NOT NULL,
    `package_type_id` INTEGER NOT NULL,
    `country_id` INTEGER NOT NULL,
    `website_id` INTEGER NOT NULL,
    `entity_type_id` INTEGER NOT NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NULL,
    `xero_item_id` VARCHAR(45) NULL,
    `xero_item_code` VARCHAR(45) NULL,
    `package_group_id` INTEGER NOT NULL,
    `package_annual_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_has_service` (
    `package_id` INTEGER NOT NULL,
    `service_id` INTEGER NOT NULL,
    `type_id` INTEGER NOT NULL DEFAULT 1,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`package_id`, `service_id`, `type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `package_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `description` TEXT NULL,
    `image` VARCHAR(200) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_gateway` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment_information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_member_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `task_id` INTEGER NULL,
    `date_of_payment` DATETIME(3) NULL,
    `payment_amount` INTEGER NULL,
    `name_on_card` VARCHAR(255) NULL,
    `last_four_digits_on_card` INTEGER NULL,
    `expired_date_of_card` DATE NULL,
    `issuing_bank` VARCHAR(255) NULL,
    `email_address_of_cardholder` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `permission_group_id` INTEGER NOT NULL,
    `value` VARCHAR(45) NOT NULL,
    `name` VARCHAR(45) NULL,
    `description` VARCHAR(100) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `permission_value_key`(`value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `permission_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `permission_group_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `person` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER NULL,
    `first_name` VARCHAR(200) NULL,
    `last_name` VARCHAR(200) NULL,
    `gender_id` INTEGER NULL,
    `phone` VARCHAR(45) NULL,
    `phone_number` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `email` VARCHAR(45) NULL,
    `birthday` DATE NULL,
    `title_name_id` INTEGER NULL,
    `address` TEXT NULL,
    `ssn` VARCHAR(100) NULL,
    `image` VARCHAR(255) NULL,
    `status` INTEGER NULL DEFAULT 1,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `task_id` INTEGER NOT NULL,
    `process_step_id` INTEGER NOT NULL,
    `person_id` INTEGER NULL,
    `user_id` INTEGER NULL,
    `is_approved` BOOLEAN NULL DEFAULT false,
    `is_rejected` BOOLEAN NULL DEFAULT false,
    `is_terminated` BOOLEAN NULL DEFAULT false,
    `finished_time` DATETIME(3) NULL,
    `remind_start_time` DATETIME(3) NULL,
    `status` INTEGER NULL,
    `banking_process_id` INTEGER NULL,
    `addition_process_id` INTEGER NULL,
    `priority` INTEGER NULL,
    `description` JSON NULL,
    `parent_id` JSON NULL,
    `extra_value` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_has_note` (
    `process_id` INTEGER NOT NULL,
    `note_id` INTEGER NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`note_id`, `process_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `process_id` INTEGER NOT NULL,
    `is_finished` BOOLEAN NOT NULL DEFAULT false,
    `finished_time` DATETIME(3) NULL,
    `is_log_mail` BOOLEAN NOT NULL DEFAULT false,
    `is_remind` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(255) NULL,
    `agent_id` INTEGER NULL,
    `file_template_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `belong_to_company_member_id` INTEGER NULL,
    `email_template_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_step` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `process_step_type_id` INTEGER NOT NULL,
    `value` INTEGER NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `left` INTEGER NULL,
    `right` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `description_display` TEXT NULL,
    `is_generated_file` BOOLEAN NOT NULL DEFAULT false,
    `is_send_link_signed` BOOLEAN NOT NULL DEFAULT false,
    `order` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `process_step_value_key`(`value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_step_has_file_template` (
    `process_step_id` INTEGER NOT NULL,
    `file_template_id` INTEGER NOT NULL,
    `order` INTEGER NULL,
    `is_begin` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`file_template_id`, `process_step_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_step_has_role` (
    `process_step_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,
    `is_main` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`process_step_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `process_step_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `is_dashboard` BOOLEAN NOT NULL DEFAULT false,
    `relation_types` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `promotion_code` VARCHAR(255) NOT NULL,
    `percent` INTEGER NOT NULL DEFAULT 0,
    `amount` INTEGER NOT NULL DEFAULT 0,
    `is_used` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposed_name` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `company_suffix_id` INTEGER NOT NULL,
    `task_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `is_approve` BOOLEAN NOT NULL DEFAULT false,
    `is_sent_agent` BOOLEAN NOT NULL DEFAULT false,
    `is_sent_customer` BOOLEAN NOT NULL DEFAULT false,
    `is_confirmed` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proposed_time` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banking_process_id` INTEGER NOT NULL,
    `from_time` INTEGER NOT NULL,
    `to_time` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `is_belong_to_fatca` BOOLEAN NOT NULL DEFAULT false,
    `description` TEXT NULL,
    `question_parent_id` INTEGER NULL,
    `question_type_id` INTEGER NOT NULL,
    `question_priority_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `left` INTEGER NULL,
    `right` INTEGER NULL,
    `file_template_id` INTEGER NULL,
    `order` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_group_has_question` (
    `question_group_id` INTEGER NOT NULL,
    `question_id` INTEGER NOT NULL,

    PRIMARY KEY (`question_group_id`, `question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_priority` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ranking_partner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `task_id` INTEGER NOT NULL,
    `ranking` INTEGER NULL,
    `ranking_partner_type_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ranking_partner_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rate_source_id` INTEGER NOT NULL,
    `ip` VARCHAR(255) NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `email` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `value` VARCHAR(100) NOT NULL DEFAULT '',
    `left` INTEGER NULL,
    `right` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `description` TEXT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `color_code` JSON NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_has_limit` (
    `role_id` INTEGER NOT NULL,
    `limit_id` INTEGER NOT NULL,

    PRIMARY KEY (`limit_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_has_permission` (
    `role_id` INTEGER NOT NULL,
    `permission_id` INTEGER NOT NULL,

    PRIMARY KEY (`role_id`, `permission_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_type_id` INTEGER NOT NULL,
    `website_id` INTEGER NOT NULL,
    `visa_type_id` INTEGER NULL,
    `visa_purpose_id` INTEGER NULL,
    `car_type_id` INTEGER NULL,
    `car_seat_id` INTEGER NULL,
    `airport_id` INTEGER NULL,
    `service_unit_id` INTEGER NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NULL,
    `xero_item_id` VARCHAR(45) NULL,
    `xero_item_code` VARCHAR(45) NULL,
    `uuid` CHAR(36) NULL,
    `xero_account_id` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_service_outside_company` BOOLEAN NOT NULL DEFAULT false,
    `is_displayed` BOOLEAN NOT NULL DEFAULT true,
    `is_attach_incorp` BOOLEAN NOT NULL DEFAULT true,
    `quantity` INTEGER NULL,
    `upgrade_service_id` INTEGER NULL,
    `discount_service_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_change_officer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company_member_type_id` INTEGER NOT NULL,
    `change_request_status_id` INTEGER NOT NULL,
    `name` TEXT NOT NULL,
    `description` TEXT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_has_company_member_type` (
    `service_change_officer_id` INTEGER NOT NULL,
    `file_template_id` INTEGER NOT NULL,

    PRIMARY KEY (`service_change_officer_id`, `file_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_has_company_suffix` (
    `service_id` INTEGER NOT NULL,
    `company_suffix_id` INTEGER NOT NULL,

    PRIMARY KEY (`service_id`, `company_suffix_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_has_file_template` (
    `service_id` INTEGER NOT NULL,
    `file_template_id` INTEGER NOT NULL,

    PRIMARY KEY (`service_id`, `file_template_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `left` INTEGER NULL,
    `right` INTEGER NULL,
    `parent_id` INTEGER NULL,
    `website_id` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_required` BOOLEAN NOT NULL DEFAULT false,
    `is_only` BOOLEAN NOT NULL DEFAULT false,
    `process_step_types` JSON NULL,
    `order` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_type_has_department` (
    `service_type_id` INTEGER NOT NULL,
    `department_id` INTEGER NOT NULL,

    PRIMARY KEY (`department_id`, `service_type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_unit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `plural` VARCHAR(45) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `singapore_acra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entity_name` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `singapore_acra_entity_name_key`(`entity_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `description` TEXT NULL,
    `value` TEXT NULL,
    `service_id` INTEGER NULL,
    `num_of_company` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `support_case` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NULL,
    `support_case_type_id` INTEGER NOT NULL,
    `support_case_status_id` INTEGER NOT NULL,
    `support_case_priority_id` INTEGER NOT NULL,
    `point` INTEGER NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `support_case_has_order` (
    `support_case_id` INTEGER NOT NULL,
    `order_id` INTEGER NOT NULL,
    `updated_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`support_case_id`, `order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `support_case_priority` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `support_case_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `support_case_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey_choice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `survey_id` INTEGER NOT NULL,
    `name` TEXT NOT NULL,
    `is_content` BOOLEAN NOT NULL DEFAULT false,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `syslog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `api_url` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NULL,
    `syslog_type_id` INTEGER NULL,
    `username` VARCHAR(255) NULL,
    `body_req` LONGTEXT NULL,
    `api_method_id` INTEGER NOT NULL,
    `relevant_link` VARCHAR(255) NULL,
    `ip_address` VARCHAR(255) NULL,
    `country_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `task_id` INTEGER NULL,
    `status` INTEGER NULL,
    `host` VARCHAR(255) NULL,
    `referer` VARCHAR(255) NULL,
    `user_agent` VARCHAR(255) NULL,
    `method` VARCHAR(255) NULL,
    `token_id` INTEGER NULL,
    `is_error` BOOLEAN NOT NULL DEFAULT false,
    `is_un_expected_error` BOOLEAN NOT NULL DEFAULT false,
    `err_message` VARCHAR(255) NULL,
    `err_stack_trace` VARCHAR(255) NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `syslog_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `target` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER NOT NULL,
    `value` INTEGER NULL,
    `target_type_id` INTEGER NULL,
    `date_of_target` DATE NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NULL,
    `company_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `upgrade_order_id` INTEGER NULL,
    `entity_type_id` INTEGER NULL,
    `country_id` INTEGER NULL,
    `incorporation_country_id` INTEGER NULL,
    `is_remind_client_contact` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_check_name` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_sign_order` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_check_document` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_sign_document` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_check_orign_document` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_check_name` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_review_business_plan_form` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_review_application_set` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_review_application_set` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_deposit` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_review_application_form` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_review_application_form` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_review_schedule_meeting` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_client_schedule_meeting` BOOLEAN NOT NULL DEFAULT false,
    `is_finished` BOOLEAN NOT NULL DEFAULT false,
    `full_name` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `phone_country_id` INTEGER NULL,
    `phone_number` VARCHAR(255) NULL,
    `state` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `postal_code` VARCHAR(255) NULL,
    `appointed_shareholder_company_member_id` INTEGER NULL,
    `appointed_director_company_member_id` INTEGER NULL,
    `appointed_ubo_company_member_id` INTEGER NULL,
    `appointed_president_company_member_id` INTEGER NULL,
    `is_banking_finished` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_service_request_round_chop` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_service_request_certification` BOOLEAN NOT NULL DEFAULT false,
    `is_remind_agent_service_request_courier` BOOLEAN NOT NULL DEFAULT false,
    `reason_use_nominee_director` VARCHAR(255) NULL,
    `reason_use_nominee_shareholder` VARCHAR(255) NULL,
    `is_note_compliance` BOOLEAN NOT NULL DEFAULT false,
    `cs_leader_id` INTEGER NULL,
    `cs_member_id` INTEGER NULL,
    `accountant_leader_id` INTEGER NULL,
    `accountant_member_id` INTEGER NULL,
    `legal_leader_id` INTEGER NULL,
    `legal_member_id` INTEGER NULL,
    `compliance_leader_id` INTEGER NULL,
    `compliance_member_id` INTEGER NULL,
    `internal_bookeeping_leader_id` INTEGER NULL,
    `internal_bookeeping_member_id` INTEGER NULL,
    `tester_leader_id` INTEGER NULL,
    `time_unassigned_tester` BIGINT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `task_has_agent` (
    `task_id` INTEGER NOT NULL,
    `agent_id` INTEGER NOT NULL,
    `addition_process_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`task_id`, `agent_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `team_group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `leader_user_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `title_name` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `access_token` VARCHAR(255) NOT NULL,
    `access_token_exp` INTEGER NOT NULL,
    `access_token_iat` INTEGER NOT NULL,
    `refresh_token` VARCHAR(255) NOT NULL,
    `refresh_token_exp` INTEGER NOT NULL,
    `refresh_token_iat` INTEGER NOT NULL,
    `scope` VARCHAR(255) NULL,
    `token_type` INTEGER NULL,
    `xero_token_type` VARCHAR(255) NULL,
    `xero_id_token` VARCHAR(255) NULL,
    `xero_session_state` VARCHAR(255) NULL,
    `website_id` INTEGER NULL,
    `task_id` INTEGER NULL,
    `agent_id` INTEGER NULL,
    `company_member_id` INTEGER NULL,
    `file_template_id` INTEGER NULL,
    `belong_to_company_member_id` INTEGER NULL,
    `ip_address` VARCHAR(255) NULL,
    `count_request` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `token_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tool_business_entity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `option_id` INTEGER NOT NULL,
    `entity_type_id` INTEGER NOT NULL,
    `score` INTEGER NULL,
    `is_reject` BOOLEAN NOT NULL DEFAULT false,
    `is_reset` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `url_list` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `value` TEXT NULL,
    `url_list_type_id` INTEGER NULL,
    `is_url` BOOLEAN NOT NULL DEFAULT false,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `url_list_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(320) NULL,
    `password` VARCHAR(100) NULL,
    `password_salt` VARCHAR(100) NULL,
    `status` INTEGER NULL,
    `reset_password_token` TEXT NULL,
    `reset_password_token_exp` INTEGER NULL,
    `two_factor_token` TEXT NULL,
    `two_factor_token_exp` INTEGER NULL,
    `is_two_factor_authentication` BOOLEAN NOT NULL DEFAULT false,
    `person_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `subscription_id` INTEGER NULL,
    `facebook_id` INTEGER NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_has_notification` (
    `user_id` INTEGER NOT NULL,
    `notification_id` INTEGER NOT NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `read_at` DATETIME(0) NOT NULL,

    PRIMARY KEY (`user_id`, `notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_has_role` (
    `user_id` INTEGER NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`role_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visa_order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `airport_id` INTEGER NULL,
    `visa_purpose_id` INTEGER NULL,
    `visa_type_id` INTEGER NULL,
    `flight_number` VARCHAR(255) NULL,
    `arrival_time` DATETIME(0) NOT NULL,
    `entry_time` DATETIME(0) NOT NULL,
    `exit_time` DATETIME(0) NOT NULL,
    `car_pickup_time` DATETIME(0) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visa_purpose` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visa_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visa_vietnam_arrival` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country_id` INTEGER NULL,
    `day_free` INTEGER NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voucher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `voucher_code` VARCHAR(255) NOT NULL,
    `customer_id` INTEGER NULL,
    `google_client_id` INTEGER NULL,
    `voucher_type_id` INTEGER NULL,
    `order_id` INTEGER NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `is_used` BOOLEAN NOT NULL DEFAULT false,
    `is_running` BOOLEAN NOT NULL DEFAULT false,
    `expired_time` DATETIME(0) NOT NULL,
    `active_date` DATETIME(0) NOT NULL,
    `used_date` DATETIME(0) NOT NULL,
    `open_date` DATETIME(0) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voucher_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(225) NOT NULL,
    `config` JSON NULL,
    `percent` INTEGER NULL,
    `uuid` VARCHAR(36) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `website` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `currency_id` INTEGER NOT NULL DEFAULT 1,
    `name` VARCHAR(100) NOT NULL,
    `domain` VARCHAR(100) NULL,
    `domain_dashboard` VARCHAR(100) NULL,
    `stripe_key` TEXT NULL,
    `paypal_key` TEXT NULL,
    `mailchimp_key` TEXT NULL,
    `min_amount` FLOAT NOT NULL DEFAULT 0,
    `min_unit` FLOAT NOT NULL DEFAULT 0,
    `email` TEXT NULL,
    `email_contact` VARCHAR(100) NULL,
    `email_name` TEXT NULL,
    `email_code` TEXT NULL,
    `email_credential` TEXT NULL,
    `companies_house_credential` TEXT NULL,
    `analytics_signature` VARCHAR(500) NULL,
    `view_id` VARCHAR(32) NULL,
    `email_token` TEXT NULL,
    `tawk_to_webhook` VARCHAR(255) NULL,
    `aws_bucket_key` TEXT NULL,
    `xero_tenant_name` VARCHAR(100) NULL,
    `xero_tenant_id` VARCHAR(100) NULL,
    `xero_client_id` VARCHAR(100) NULL,
    `xero_client_secret` VARCHAR(100) NULL,
    `xero_hook_key` VARCHAR(100) NULL,
    `xero_redirect_url` VARCHAR(100) NULL,
    `aws_bucket_log` TEXT NULL,
    `google_ads_config` TEXT NULL,
    `endpoint_secret_stripe` TEXT NULL,
    `min_make_payment_amount` FLOAT NOT NULL DEFAULT 0,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `xero_account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(200) NULL,
    `type` VARCHAR(50) NOT NULL DEFAULT 'SALE',
    `code` VARCHAR(50) NOT NULL,
    `created_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_time` DATETIME(3) NOT NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `xero_invoice_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `xero_code` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `deleted_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `role` ADD CONSTRAINT `role_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_role` ADD CONSTRAINT `user_has_role_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_has_role` ADD CONSTRAINT `user_has_role_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
