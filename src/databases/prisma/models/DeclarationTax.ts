// import { createModel } from 'schemix';

// import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
// import { ATTRIBUTE, COLUMN } from '../utils/enums/ActionStepType';
// import { createdTime, deleted, updatedTime } from '../mixins';

// export default createModel(
//   MODEL_NAME.ACTION_STEP_TYPE,
//   (ActionStepTypeModel) => {
//     const initCreatedTime = createdTime({
//       attribute: ATTRIBUTE.createdTime,
//       column: COLUMN.createdTime,
//     });
//     const initUpdatedTime = updatedTime({
//       attribute: ATTRIBUTE.updatedTime,
//       column: COLUMN.updatedTime,
//     });
//     const initDeleted = deleted(
//       {
//         attribute: ATTRIBUTE.deletedTime,
//         column: COLUMN.deletedTime,
//       },
//       {
//         attribute: ATTRIBUTE.deletedTime,
//         column: COLUMN.deletedTime,
//       },
//     );

//     // defined Model
//     process.nextTick(() => {});
//   },
// );
