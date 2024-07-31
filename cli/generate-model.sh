type="$1"
fileName="$2"

if [ -z "$filename" ]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

path="$(
  cd "$(dirname "$0")"
  pwd -P
)"

create_model() {
  modelcontent=""
  enumcontent=""
}

check_file_not_exits_and_create() {
  filename="$1"
  contentfile="$2"
  if [ -e "$filename" ]; then
    echo "File '$filename' is already exits."
  else
    echo "$contentfile" >"$filename"
    echo "File '$filename' has been created with the following content:"
  fi
}
