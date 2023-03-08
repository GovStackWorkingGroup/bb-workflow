echo "List of Central Servers"
curl -k -s -S http://localhost/listCentralServices

echo "List of Clients"
curl -k -s -S http://localhost/listClients -H 'accept: application/json' | python3 -m json.tool -

echo "List of Methods"
curl -k -s -S -H 'X-Road-Client: CS/ORG/1111/TestClient' http://localhost/r1/CS/ORG/1111/TestService/listMethods -H 'accept: application/json' | python3 -m json.tool -

echo "List of allowed Methods"
curl -k -s -S -H 'X-Road-Client: CS/ORG/1111/TestClient' http://localhost/r1/CS/ORG/1111/TestService/allowedMethods -H 'accept: application/json' | python3 -m json.tool -

echo "Getting OpenAPI specification"
curl -k -s -S -H 'X-Road-Client: CS/ORG/1111/TestClient' http://localhost/r1/CS/ORG/1111/TestService/getOpenAPI?serviceCode=swagger.yaml 

echo "List Workflow Processes"
curl -k -s -S -H 'X-Road-Client: CS/ORG/1111/TestClient' http://localhost/r1/CS/ORG/1111/TestService/swagger.yaml/processes
