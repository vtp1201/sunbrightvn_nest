export enum ATTRIBUTE_DEFAULT {
  id = 'id',
  createdTime = 'createdTime',
  updatedTime = 'updatedTime',
  deletedTime = 'deletedTime',
  isDeleted = 'isDeleted',
}

export enum COLUMN_DEFAULT {
  id = 'id',
  createdTime = 'created_time',
  updatedTime = 'updated_time',
  deletedTime = 'deleted_time',
  isDeleted = 'is_deleted',
}

export enum RELATION_DEFAULT {
  user = 'user',
  task = 'task',
  billings = 'billings',
  processes = 'processes',
  taskHasAgents = 'taskHasAgents',
  actionProcessSteps = 'actionProcessSteps',
  historyLogCDCs = 'historyLogCDCs',
  notificationTemplates = 'notificationTemplates',
}
