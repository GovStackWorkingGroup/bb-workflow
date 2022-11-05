import pytest
import json 
import requests
import sys
from pytest_bdd import scenarios, given, when, then, parsers
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
#options = Options()

#options.headless = True

#driver = webdriver.Chrome("/usr/bin/chromedriver", options=chrome_options)


#driver = webdriver.Chrome(ChromeDriverManager().install(), options=chrome_options)



#driver = webdriver.Chrome()


 
# Constants
 
#API_HOME = 'http://172.16.51.57:8000/home/'
API_HOME = 'http://myapi:4010/api/v1/data/con/1.0'
 
# Scenarios
 
scenarios('../features/getdatacon.feature')
 
# Fixtures
 
@pytest.fixture
def browser():
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=chrome_options)
    #driver = webdriver.Chrome("/usr/bin/chromedriver", options=options)
    #driver.get("https://google.com/") 
    #driver = webdriver.Firefox()
    #driver.get("http://www.qxf2.com")

    #b = webdriver.Chrome()
    driver.implicitly_wait(10)
    yield driver 
    driver.quit()

@given('the API URL home page is queried', target_fixture='ddg_response')
def ddg_response():
    params = {'format': 'json'}
    response = requests.get(API_HOME)
    return response


# Then Steps



@then(parsers.parse('the response status code is "{code:d}"'))
def ddg_response_code(ddg_response, code):
    assert ddg_response.status_code == code


@when(parsers.parse('the response contains result count data as'))
def ddg_response_contents():
    # A more comprehensive test would check 'RelatedTopics' for matching phrases
    response = requests.get(API_HOME)  
    print(response)
    json_data = response.json()
    #assert json_data['results'][1] == '095be615-a8ad-4c33-8e9c-c7612fbf6c9f' 
    assert json_data['count'] == 123  

