import { task } from '@prisma/client';

export * from '../task.service';

export type Task = task;

export type SupporterTask = {
  id: number;
  customerId: number;
  username: string;
  status: number;
  personId: number;
  subscriptionId: number;
  facebookId: number;
};

export type SupporterTaskObj = {
  id: number;
  csLeader?: SupporterTask;
  csMember?: SupporterTask;
  accountantLeader?: SupporterTask;
  accountantMember?: SupporterTask;
  legalLeader?: SupporterTask;
  legalMember?: SupporterTask;
  complianceLeader?: SupporterTask;
  complianceMember?: SupporterTask;
  internalBookeepingLeader?: SupporterTask;
  internalBookeepingMember?: SupporterTask;
};
