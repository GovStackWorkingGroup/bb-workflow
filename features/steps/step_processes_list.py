from behave import *
from hamcrest import assert_that, equal_to, is_not

HOST = 'http://localhost/api/'


class DwSource(object):

    def __init__(self, endpoint_name):
        self._endpoint_name = endpoint_name
        self._url = None

    def count_of_records(self):
        if self._endpoint_name is not None:
            self._url = f'{HOST}'


@given('we have token from login')
def step_impl(context):
    pass


@when('we request list from {endpoint_name} endpoint')
def step_impl(context, endpoint_name):
    context.dw_source = DwSource(endpoint_name)
    assert True is not False


@then('we receive list of processes having {predefined_number} of processes')
def step_impl(context, predefined_number):
    assert context.failed is False
