enum ROUTE_AUTH {
  LOGIN = 'api/auth',
}

enum ROUTE_WEBSITE {
  GET_ENUM = 'api/enum/websites',
  BASE = 'api/website',
  ID = 'api/website:id([0-9]+)',
}

export const ROUTES = {
  AUTH: ROUTE_AUTH,
  WEBSITE: ROUTE_WEBSITE,
  API_DOCS: 'api-docs',
};

export enum API_TAGS {
  AUTH = 'Auth',
  WEBSITE = 'Website',
}
