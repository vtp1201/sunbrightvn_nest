import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { RoleRepository } from './role.repository';

import { Role, SupporterTaskObj } from '@types';

import { MODEL_NAME, ROLE } from '@utilities';

@Injectable()
export class RoleService extends AbstractService<MODEL_NAME.ROLE, RoleRepository> {
  constructor(repository: RoleRepository) {
    super(repository);
  }

  static formatSendNotifyToRole(roles: Role[], supporterObj: SupporterTaskObj) {
    const roleMap = new Map<number, Role>();
    roles.forEach((role) => {
      roleMap.set(role.id, role);
    });

    const notifyToRoles = Object.fromEntries(roleMap.entries());
    const notifyToUsers = [];

    if (notifyToRoles[ROLE.ACCOUNTANT_LEADER]) {
      notifyToUsers.push(supporterObj?.accountantLeader);
      delete notifyToRoles[ROLE.ACCOUNTANT_LEADER];
    }
    if (notifyToRoles[ROLE.ACCOUNTANT_MEMBER]) {
      notifyToUsers.push(supporterObj?.accountantMember);
      delete notifyToRoles[ROLE.ACCOUNTANT_MEMBER];
    }
    if (notifyToRoles[ROLE.COMPLIANCE_LEADER]) {
      notifyToUsers.push(supporterObj?.complianceLeader);
      notifyToRoles[ROLE.COMPLIANCE_LEADER];
    }
    if (notifyToRoles[ROLE.COMPLIANCE_MEMBER]) {
      notifyToUsers.push(supporterObj?.complianceMember);
      delete notifyToRoles[ROLE.COMPLIANCE_MEMBER];
    }
    if (notifyToRoles[ROLE.INTERNAL_BOOKKEEPER_MEMBER]) {
      notifyToUsers.push(supporterObj?.internalBookeepingLeader);
      delete notifyToRoles[ROLE.INTERNAL_BOOKKEEPER_MEMBER];
    }
    if (notifyToRoles[ROLE.INTERNAL_BOOKKEEPER_LEADER]) {
      notifyToUsers.push(supporterObj?.internalBookeepingMember);
      delete notifyToRoles[ROLE.INTERNAL_BOOKKEEPER_LEADER];
    }
    if (notifyToRoles[ROLE.LEGAL_LEADER]) {
      notifyToUsers.push(supporterObj?.legalLeader);
      delete notifyToRoles[ROLE.LEGAL_LEADER];
    }
    if (notifyToRoles[ROLE.LEGAL_MEMBER]) {
      notifyToUsers.push(supporterObj?.legalMember);
      delete notifyToRoles[ROLE.LEGAL_MEMBER];
    }
    return {
      notifyToUsers,
      notifyToRoles: Object.values(notifyToRoles),
    };
  }
}
