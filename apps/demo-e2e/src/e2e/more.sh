#! /usr/bin/env bash

# copy failure.cy.ts 100 times
for i in {1..100}; do
  # pad the number with 3 zeros

  padded_number=$(printf "%03d" "$i")
  cp ./failure.cy.ts "./failure-$padded_number.cy.ts"
done
