import { createMixin } from 'schemix';

import { MANY_MANY_MIXIN } from '../types';

export default ({ attributeA, attributeB, modelNameA, modelNameB }: MANY_MANY_MIXIN) => {
  return createMixin((manyToManyMixin) => {
    const tableName = `_${modelNameA}To${modelNameB}`;
    manyToManyMixin.unique({
      fields: [attributeA, attributeB],
    });
    manyToManyMixin.raw(`@@index([${attributeB}])`);
    manyToManyMixin.map(tableName);
  });
};
