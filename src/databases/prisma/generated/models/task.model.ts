import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  additionProcess,
  answer,
  bankingProcess,
  changeRequest,
  company,
  companyInterest,
  companyMember,
  companyOwnership,
  companyShare,
  country,
  customer,
  entityType,
  fatca,
  file,
  historyLogCdc,
  note,
  order,
  paymentInformation,
  process,
  proposedName,
  rankingPartner,
  taskHasAgent,
  token,
  user,
} from './';

export class task {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  upgradeOrderId?: number;

  @IsOptional()
  @IsInt()
  entityTypeId?: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsInt()
  incorporationCountryId?: number;

  @IsDefined()
  @IsBoolean()
  isRemindClientContact!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentCheckName!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientSignOrder!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentCheckDocument!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientSignDocument!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentCheckOriginDocument!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientCheckName!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentReviewBusinessPlanForm!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentReviewApplicationSet!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientReviewApplicationSet!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientDeposit!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentReviewApplicationForm!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientReviewApplicationForm!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentReviewScheduleMeeting!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindClientScheduleMeeting!: boolean;

  @IsDefined()
  @IsBoolean()
  isFinished!: boolean;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsInt()
  appointedShareholderCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  appointedDirectorCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  appointedUboCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  appointedPresidentCompanyMemberId?: number;

  @IsDefined()
  @IsBoolean()
  isBankingFinished!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentServiceRequestRoundChop!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentServiceRequestCertification!: boolean;

  @IsDefined()
  @IsBoolean()
  isRemindAgentServiceRequestCourier!: boolean;

  @IsOptional()
  @IsString()
  reasonUseNomineeDirector?: string;

  @IsOptional()
  @IsString()
  reasonUseNomineeShareholder?: string;

  @IsDefined()
  @IsBoolean()
  isNoteCompliance!: boolean;

  @IsOptional()
  @IsInt()
  csLeaderId?: number;

  @IsOptional()
  @IsInt()
  csMemberId?: number;

  @IsOptional()
  @IsInt()
  accountantLeaderId?: number;

  @IsOptional()
  @IsInt()
  accountantMemberId?: number;

  @IsOptional()
  @IsInt()
  legalLeaderId?: number;

  @IsOptional()
  @IsInt()
  legalMemberId?: number;

  @IsOptional()
  @IsInt()
  complianceLeaderId?: number;

  @IsOptional()
  @IsInt()
  complianceMemberId?: number;

  @IsOptional()
  @IsInt()
  internalBookeepingLeaderId?: number;

  @IsOptional()
  @IsInt()
  internalBookeepingMemberId?: number;

  @IsOptional()
  @IsInt()
  testerLeaderId?: number;

  @IsOptional()
  timeUnassignedTester?: bigint;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  additionProcesses!: additionProcess[];

  @IsDefined()
  answers!: answer[];

  @IsDefined()
  bankingProcesses!: bankingProcess[];

  @IsDefined()
  changeRequests!: changeRequest[];

  @IsDefined()
  companyInterests!: companyInterest[];

  @IsDefined()
  companyOwnerships!: companyOwnership[];

  @IsDefined()
  companyShares!: companyShare[];

  @IsDefined()
  fatcas!: fatca[];

  @IsDefined()
  files!: file[];

  @IsDefined()
  historyLogCDCs!: historyLogCdc[];

  @IsDefined()
  notes!: note[];

  @IsDefined()
  paymentsInformation!: paymentInformation[];

  @IsDefined()
  processes!: process[];

  @IsDefined()
  proposedNames!: proposedName[];

  @IsDefined()
  rankingPartners!: rankingPartner[];

  @IsOptional()
  accountantLeader?: user;

  @IsOptional()
  accountantMember?: user;

  @IsOptional()
  appointedDirector?: companyMember;

  @IsOptional()
  appointedPresident?: companyMember;

  @IsOptional()
  appointedShareholder?: companyMember;

  @IsOptional()
  appointedUbo?: companyMember;

  @IsOptional()
  company?: company;

  @IsOptional()
  complianceLeader?: user;

  @IsOptional()
  complianceMember?: user;

  @IsOptional()
  country?: country;

  @IsOptional()
  csLeader?: user;

  @IsOptional()
  csMember?: user;

  @IsOptional()
  customer?: customer;

  @IsOptional()
  entityType?: entityType;

  @IsOptional()
  incorporationCountry?: country;

  @IsOptional()
  internalBookeepingLeader?: user;

  @IsOptional()
  internalBookeepingMember?: user;

  @IsOptional()
  legalLeader?: user;

  @IsOptional()
  legalMember?: user;

  @IsOptional()
  order?: order;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  upgradeOrder?: order;

  @IsOptional()
  testerLeader?: user;

  @IsDefined()
  taskHasAgents!: taskHasAgent[];

  @IsDefined()
  tokens!: token[];
}
