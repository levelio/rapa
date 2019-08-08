#! /bin/bash

for folder in __fixtures__/pass/*; do
  pushd "$folder" || return
  result=$(npx tsc --build)
  # shellcheck disable=SC2181
  if [[ $? -ne 0 ]]; then
    echo "!!!!! $folder failed and should not have"
    echo "$result" > /dev/stderr
    exit 1
  fi
  popd || return
done

for folder in __fixtures__/fail/*; do
  pushd "$folder" || return
  result=$(npx tsc --build)
  # shellcheck disable=SC2181
  if [[ $? -eq 0 ]]; then
    echo "!!!!!  $folder succeeded and should not have"
    echo "$result" > /dev/stderr
    exit 1
  fi
  popd || return
done

exit 0
