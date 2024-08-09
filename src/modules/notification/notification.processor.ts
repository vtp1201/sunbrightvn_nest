import { Injectable, Scope } from '@nestjs/common';

import { NotificationService, NotificationTemplate, Role, UserService } from '@types';

import { NOTIFICATION_TYPE } from '@utilities';

@Injectable({
  scope: Scope.REQUEST,
})
export class NotificationProcessor {
  private userInstances = [];
  private obj = null;
  private message: string;
  private roles: Role[] = [];
  private notificationTemplate: NotificationTemplate = null;
  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) {}

  async init(notificationTemplate, messageParams, userInstances, obj = {}) {
    this.message = notificationTemplate.message?.format(...messageParams);
    this.roles = notificationTemplate.NotificationTemplateHasRoles.map((e) => e.role_id);
    //filter null, undefined, duplicate values
    // !! Status required when query user
    this.userInstances = userInstances
      .filter((e) => e?.status)
      .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
    this.notificationTemplate = notificationTemplate;
    this.obj = obj;
  }
  async initUserByRoles() {
    if (this.roles.length === 0) return;
    const user = this.userService.getUsersByRoleIds(this.roles.map((role) => role.id));
    this.userInstances = this.userInstances.concat(user);
  }

  async send() {
    try {
      const {
        target_id,
        task_id,
        order_id,
        profile_id,
        support_case_id,
        company_id,
        code,
        //notification_type_id
      } = this.obj;
      //if (this.userInstances && this.structMessage) {
      if (this.userInstances && this.userInstances.length > 0 && this.message) {
        const param_create = {
          //type: 0,
          task_id: task_id,
          order_id: order_id,
          target_id: target_id,
          profile_id: profile_id,
          company_id,
          code,
          description: this.message,
          support_case_id: support_case_id,
          notification_type_id: this.notificationTemplate.notification_type_id,
          type: this.notificationTemplate.notification_status_id,
        };
        const newNotification = await Models.Notification.create(param_create);
        for (const user of this.userInstances) {
          await newNotification.addUser(user);
          const getCurrentDate = moment().format('YYYY-MM-DD HH:mm:ss');
          const responseNotification = JSON.parse(JSON.stringify(newNotification));
          responseNotification.task_id = task_id || null;
          responseNotification.order_id = order_id || null;
          responseNotification.target_id = target_id || null;
          responseNotification.company_id = company_id || null;
          responseNotification.code = code || null;
          responseNotification.profile_id = profile_id || null;
          responseNotification.support_case_id = support_case_id || null;
          responseNotification.created_time = getCurrentDate;
          if (support_case_id) {
            responseNotification.type_noty = 'message';
          } else if (this.notificationTemplate.notification_type_id == NOTIFICATION_TYPE.NEWS) {
            //[target_id, order_id, profile_id, task_id].some(e => e != null)
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
      // logger.error(error);
      throw error;
    }
  }
}
