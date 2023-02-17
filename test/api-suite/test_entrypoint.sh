## Required Global variables used to execute test harness 
## RESULT_NAME <- determines where test result is stored. 
## API_URL <- used to detemine base URL of tested API
chmod u+x docker/entrypoint.sh 
docker-compose up --build gherkin-test-report