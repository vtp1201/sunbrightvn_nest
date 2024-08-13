import { Injectable, Scope } from '@nestjs/common';

import * as moment from 'moment';

import {
  NotificationService,
  NotificationTemplate,
  Role,
  User,
  UserService,
  UserWithRoles,
} from '@types';

import { NOTIFICATION_TYPE } from '@utilities';

@Injectable({
  scope: Scope.REQUEST,
})
export class NotificationProcessor {
  private userInstances: (User | UserWithRoles)[];
  private obj = null;
  private message: string;
  private roleIds: number[] = [];
  private notificationTemplate: NotificationTemplate = null;
  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) {}

  async init(
    notificationTemplate: NotificationTemplate & {
      roles: Role[];
    },
    messageParams: string[],
    userInstances: User[],
    obj = {},
  ) {
    this.message = notificationTemplate.message.format(messageParams);
    this.roleIds = notificationTemplate.roles.map((role) => role.id);
    this.userInstances = userInstances
      .filter((e) => e?.status)
      .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
    this.notificationTemplate = notificationTemplate;
    this.obj = obj;
  }
  async initUserByRoles() {
    if (this.roleIds.length === 0) return;
    const users = await this.userService.getUsersByRoleIds(this.roleIds);
    this.userInstances = this.userInstances.concat(users);
  }

  async send() {
    try {
      const { targetId, taskId, orderId, profileId, supportCaseId, companyId, code } = this.obj;
      if (this.userInstances && this.userInstances.length > 0 && this.message) {
        const paramCreate = {
          taskId: taskId,
          orderId: orderId,
          targetId: targetId,
          profileId: profileId,
          companyId,
          code,
          description: this.message,
          supportCaseId: supportCaseId,
          notificationTypeId: this.notificationTemplate.notificationTypeId,
          type: this.notificationTemplate.notificationStatusId,
        };
        const newNotification = await this.notificationService.create({
          data: paramCreate,
        });
        for (const user of this.userInstances) {
          await newNotification.addUser(user);
          const getCurrentDate = moment().format('YYYY-MM-DD HH:mm:ss');
          const responseNotification = JSON.parse(JSON.stringify(newNotification));
          responseNotification.taskId = taskId || null;
          responseNotification.orderId = orderId || null;
          responseNotification.targetId = targetId || null;
          responseNotification.companyId = companyId || null;
          responseNotification.code = code || null;
          responseNotification.profileId = profileId || null;
          responseNotification.supportCaseId = supportCaseId || null;
          responseNotification.created_time = getCurrentDate;
          if (supportCaseId) {
            responseNotification.type_noty = 'message';
          } else if (this.notificationTemplate.notificationTypeId === NOTIFICATION_TYPE.NEWS) {
            //[targetId, orderId, profileId, taskId].some(e => e != null)
            responseNotification.type_noty = 'news';
          }
          responseNotification.ReadNotis = [{ is_read: 0 }];
          // event_local.emit('new-notification', {
          //     id: user?.id,
          //     message: 'New Notification',
          //     notification: responseNotification
          // });
          const socketManage = new SocketManage().getInstance();
          socketManage.evenPublishNotification({
            id: user?.id,
            message: 'New Notification',
            notification: responseNotification,
          });
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
