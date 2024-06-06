path="$(
  cd "$(dirname "$0")"
  pwd -P
)"
pathmodels="$path/src/models"
pathservices="$path/src/services"
pathcontrollers="$path/src/controllers"
pathutils="$path/src/utils"

pathenumsdb="$pathutils/enums/database"

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

enumdatabase="

    export enum ATTRIBUTE {
      id = 'id',
      createdTime = 'createdTime',
      updatedTime = 'updatedTime',
      isDeleted = 'isDeleted',
    };

    export enum COLUMN {
      id = 'id',
      createdTime = 'created_time',
      updatedTime = 'updated_time',
      isDeleted = 'is_deleted',
    };

    export enum RELATION {
      company = 'Company',
    };
    
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
  echo "$enumdatabase" >"$pathenumsdb/$modelName.ts"
  $(print "$pathenumsdb/$modelName.ts")
  echo "import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    } from '@sequelize/core'
    import {
      Attribute,
      BelongsTo,
      AutoIncrement,
      ColumnName,
      CreatedAt,
      Default,
      PrimaryKey,
      Table,
      UpdatedAt,
    } from '@sequelize/core/types/decorators/legacy'
    import { MODEL_NAME, TABLE_NAME } from 'utils'
    import { ATTRIBUTE, COLUMN_NAME } from 'utils/enums/database/$modelName'

    @Table({
      tableName: TABLE_NAME."$keyEnum",
      modelName: MODEL_NAME."$keyEnum",
    })
    export default class $modelName extends Model<
      InferAttributes<"$modelName">,
      InferCreationAttributes<"$modelName">
    > {
      @Attribute(DataTypes.INTEGER)
      @PrimaryKey
      @AutoIncrement
      @ColumnName(COLUMN_NAME.id)
      declare [ATTRIBUTE.id]: CreationOptional<number>;

      @Attribute(DataTypes.DATE)
      @CreatedAt
      @ColumnName(COLUMN_NAME.createdTime)
      declare [ATTRIBUTE.createdTime]: CreationOptional<Date>;

      @Attribute(DataTypes.DATE)
      @ColumnName(COLUMN_NAME.updatedTime)
      @UpdatedAt
      declare [ATTRIBUTE.updatedTime]: CreationOptional<Date>;

      @Attribute(DataTypes.TINYINT(1))
      @Default(0)
      @ColumnName(COLUMN_NAME.isDeleted)
      declare [ATTRIBUTE.isDeleted]: number;

      // Associations
    }" >"$pathmodels/$modelName.ts"

  # export enum
  echo "File $pathmodels/$modelName.ts has been created with the following content"
  local info="export { ATTRIBUTE as E$modelName } from './$modelName'"
  echo -e "$(cat "$pathenumsdb/index.ts")\n$info" >"$pathenumsdb/index.ts"
}

print() {
  local filename="$1"
  echo "File $filename has been created with the following content"
}

input="$1"
if [ $# -eq 0 ]; then
  echo "Không có tham số dòng lệnh được truyền vào."
else
  echo "Tham số dòng lệnh \$1 là: $1"
  $(create_model "$input")
fi
