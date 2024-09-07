#!/bin/bash

#Check if a test file argument is provided
if [ "$#" -ne 1 ]; then
echo "Usage: $0 <path-to-test-file>"
exit 1
fi

TEST_FILE="$1"

# Check if the specification test file exists
if [ ! -f "$TEST_FILE" ]; then
echo "Test file does not exist: $TEST_FILE"
exit 1
fi

#Run Cypress with the specification test file
#eg: cypress/e2e/locators.spec.cy.js
npx cypress run --spec "$TEST_FILE"