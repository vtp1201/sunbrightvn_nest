path="$(
  cd "$(dirname "$0")"
  pwd -P
)"
pathmodels="$path/src/databases/prisma/models"
pathservices="$path/src/services"
pathcontrollers="$path/src/controllers"
pathutils="$path/src/databases/prisma/utils"

pathenumsdb="$pathutils/enums"

camelcase_to_snakecase() {
  local input="$1"
  local result=$(echo "$input" | sed 's/\([a-z]\)\([A-Z]\)/\1_\2/g' | tr '[:upper:]' '[:lower:]')
  echo "$result"
}

to_uppercase() {
  local input="$1"
  local result=$(echo "$input" | tr '[:lower:]' '[:upper:]')
  echo "$result"
}

enumdatabase="import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {

}

export default {
  ATTRIBUTE,
  RELATION,
};
"

create_model() {
  local input="$1"
  echo "$input"
  local keyEnum=$(camelcase_to_snakecase "$input")
  keyEnum=$(to_uppercase "$keyEnum")
  local modelName="$(echo $input | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2);}1')"
  local fucModelName="${modelName}Model"
  echo "$enumdatabase" >"$pathenumsdb/$modelName.ts"
  print "$pathenumsdb/$modelName.ts"

  echo "import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/$modelName';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME."$keyEnum",
  ($fucModelName) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });
    const initUpdatedTime = updatedTime({
      attribute: ATTRIBUTE.updatedTime,
      column: COLUMN.updatedTime,
    });
    const initDeleted = deleted(
      {
        attribute: ATTRIBUTE.deletedTime,
        column: COLUMN.deletedTime,
      },
      {
        attribute: ATTRIBUTE.isDeleted,
        column: COLUMN.isDeleted,
      },
    );

    // defined Model
    process.nextTick(() => {
      $fucModelName.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // table name
        .map(TABLE_NAME."$keyEnum");
    });
  },
);
" >"$pathmodels/$modelName.ts"

  # export enum
  print "$pathmodels/$modelName.ts"
  local info="export { default as E_$keyEnum } from './$modelName';"
  echo -e "$(cat "$pathenumsdb/index.ts")\n$info" >"$pathenumsdb/index.ts"
}

insert_if_not_existed() {
  local file_name = "$1"
  local content = "$2"

}
print() {
  local filename="$1"
  echo "File $filename has been created with the following content"
}

input="$1"
if [ $# -eq 0 ]; then
  echo "Không có tham số dòng lệnh được truyền vào."
else
  echo "Tham số dòng lệnh \$1 là: $input"
  create_model "$input"
fi
