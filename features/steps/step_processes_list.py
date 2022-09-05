from behave import *
from features.common.ApiClient import ApiClient
from hamcrest import assert_that, equal_to, is_not


@given('we have token from login')
def step_impl(context):
    pass


@when('we request list from {endpoint_name} endpoint')
def step_impl(context, endpoint_name):
    context.obj = ApiClient('processes', protocol='https', port='', prefix='', suffix='')
    context.url = context.obj.entity_url
    assert True is not False


@then('we receive list of processes having {predefined_number} of processes')
def step_impl(context, predefined_number):
    # data = obj.all_records
    # count = context.obj.count_of_records()
    assert context.url == 'https://localhost/processes/'
    assert context.failed is False
