#!/bin/sh
RESULTS_FILE=results/${RESULT_NAME}.message
EXPORT_SCRIPT="${EXPORT_SCRIPT_PAT:-docker/export_to_mongo.sh}"
API_HEALTHCHECK_RETRIES=60
API_HEALTHCHECK_INTERVAL=2

show_help() {
  echo """
  Commands
  ---------------------------------------------------------------
  run_tests                : run cucumber test harness
  export_results           : Run test harness and export results to external storage 
  """
}

healthcheckApiCall() {
  echo "Sending test request, result:"
  echo "-----"
  curl ${API_URL}
  RETURN=$?
  if [ $RETURN -eq 7 ]; then
    echo "Api healthcheck call failed, curl returned status code 7"
    return 1
  fi
  echo "-----"
  echo "Success in calling healtcheck API endpoint"
  return 0
}

waitForAPI() {
  echo "Testing API availability..."
  retries=$API_HEALTHCHECK_RETRIES
  interval=$API_HEALTHCHECK_INTERVAL
  notAvailable=1
  while [ $retries -ge 0 ] && [ $notAvailable -ne 0 ]; do
    healthcheckApiCall
    notAvailable=$?
    retries=$(($retries - 1))
    if [ $retries -ne 5 ]; then
      sleep 1
    fi
  done

  if [ $notAvailable -eq 1 ]; then
    echo "Gherkin tests will not be executed as API is not available."
    exit 1
  fi
  echo "API Available."
  return 0
}

case "$1" in
"run_tests")
  waitForAPI
  npx cucumber-js --format message:results/${RESULT_NAME}.message --format junit:results/${RESULT_NAME}.xml
  ;;
*)
  show_help
  ;;
esac
