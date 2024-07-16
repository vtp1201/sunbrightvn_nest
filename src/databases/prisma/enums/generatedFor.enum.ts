import { createEnum } from 'schemix';

import { GENERATED_FOR } from '../utils/enums/FileTemplateHasCompanyMemberType';

export default createEnum((StatusEnum) => {
  StatusEnum.addValue(GENERATED_FOR.FOR_ONE)
    .addValue(GENERATED_FOR.FOR_ALL)
    .addValue(GENERATED_FOR.FOR_ALL_LEVEL)
    .addValue(GENERATED_FOR.FOR_NEW_MEMBER)
    .addValue(GENERATED_FOR.FOR_REMOVE_MEMBER)
    .addValue(GENERATED_FOR.FOR_TRANSFER);
});
