export type inputGeneratePassport = {
  id: number;
  username: string;
  status: number;
  personId: number;
  customerId: number;
  createdTime: Date;
  roles: {
    name: string;
    id: number;
    left: number;
    right: number;
    parentId: number;
    limits: {}[];
    permissions: {
      id: number;
      value: string;
      name: string;
    }[];
  }[];
};
