import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  actionLog,
  billing,
  customer,
  emailTemplateHasReceiver,
  file,
  historyLogCdc,
  message,
  note,
  person,
  process,
  role,
  subscription,
  supportCase,
  syslog,
  task,
  teamGroup,
  token,
  userHasNotification,
} from './';

export class user {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  passwordSalt?: string;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsString()
  resetPasswordToken?: string;

  @IsOptional()
  @IsInt()
  resetPasswordTokenExp?: number;

  @IsOptional()
  @IsString()
  twoFactorToken?: string;

  @IsOptional()
  @IsInt()
  twoFactorTokenExp?: number;

  @IsDefined()
  @IsBoolean()
  isTwoFactorAuthentication!: boolean;

  @IsOptional()
  @IsInt()
  personId?: number;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsInt()
  subscriptionId?: number;

  @IsOptional()
  @IsInt()
  facebookId?: number;

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
  actionLogs!: actionLog[];

  @IsDefined()
  billings!: billing[];

  @IsDefined()
  accountantLeaderForCustomers!: customer[];

  @IsDefined()
  accountantMemberForCustomers!: customer[];

  @IsDefined()
  complianceLeaderForCustomers!: customer[];

  @IsDefined()
  complianceMemberForCustomers!: customer[];

  @IsDefined()
  csLeaderForCustomers!: customer[];

  @IsDefined()
  csMemberForCustomers!: customer[];

  @IsDefined()
  internalBookeepingLeaderForCustomers!: customer[];

  @IsDefined()
  internalBookeepingMemberForCustomers!: customer[];

  @IsDefined()
  legalLeaderForCustomers!: customer[];

  @IsDefined()
  legalMemberForCustomers!: customer[];

  @IsDefined()
  testerLeaderForCustomers!: customer[];

  @IsDefined()
  emailTemplateHasReceivers!: emailTemplateHasReceiver[];

  @IsDefined()
  files!: file[];

  @IsDefined()
  teamGroups!: teamGroup[];

  @IsDefined()
  leaderForTeamGroups!: teamGroup[];

  @IsDefined()
  historyLogCDCs!: historyLogCdc[];

  @IsDefined()
  messages!: message[];

  @IsDefined()
  notes!: note[];

  @IsDefined()
  processes!: process[];

  @IsDefined()
  supportCases!: supportCase[];

  @IsDefined()
  syslogs!: syslog[];

  @IsDefined()
  accountantLeaderForTasks!: task[];

  @IsDefined()
  accountantMemberForTasks!: task[];

  @IsDefined()
  complianceLeaderForTasks!: task[];

  @IsDefined()
  complianceMemberForTasks!: task[];

  @IsDefined()
  csLeaderForTasks!: task[];

  @IsDefined()
  csMemberForTasks!: task[];

  @IsDefined()
  internalBookeepingLeaderForTasks!: task[];

  @IsDefined()
  internalBookeepingMemberForTasks!: task[];

  @IsDefined()
  legalLeaderForTasks!: task[];

  @IsDefined()
  legalMemberForTasks!: task[];

  @IsDefined()
  testerLeaderForTasks!: task[];

  @IsDefined()
  tokens!: token[];

  @IsOptional()
  customer?: customer;

  @IsOptional()
  person?: person;

  @IsOptional()
  subscription?: subscription;

  @IsDefined()
  userHasNotifications!: userHasNotification[];

  @IsDefined()
  roles!: role[];
}
