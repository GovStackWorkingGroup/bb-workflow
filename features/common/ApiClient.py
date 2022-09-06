import json
import requests

from common import utils as utl

import settings as st


class ApiClient:
    """
    Creates URL object to access API in the format: http://localhost:8000/api/data_source/v1/
    If user wants to omit parameter, then she should provide empty string
    """
    def __init__(self, entity, protocol=None, host=None, port=None, prefix=None, suffix=None):
        """
        Following parameters may be provided

        :param entity: Name of resource
        :param protocol: HTTP or HTTPS
        :param host: server IP or domain name
        :param port: port, if applicable
        :param prefix: prefix namespace to access resource, e.g. http://localhost:8000/api/data_source/v1/
                        here "api" is a prefix
        :param suffix: suffix namespace, in the example above "v1" is a suffix
        """
        #
        if entity is None:
            raise ValueError(f'Resource name must be provided')
        #
        self._entity = entity
        self._url_values = utl.url_default_value(entity, protocol, host, port, prefix, suffix)
        self._entity_url = utl.url_from_dict(entity, self._url_values)
        if st.DROP_LAST_SLASH:
            self._entity_url = self._entity_url[:-1]

    @property
    def entity_url(self):
        if self._entity_url:
            return self._entity_url

    @property
    def all_records(self):
        if self._entity_url:
            return _get_records(self._entity_url)

    def records(self, filter_dict: dict):
        """
        List of records with filter, where filter values are in the dictionary
        :param filter_dict: - list of filter values
        :return: filtered list of records
        """
        if self._entity_url:
            params_str = _get_params(filter_dict)
            full_url = f'{self._entity_url}?{params_str}'
            return _get_records(full_url)

    def post(self, data):
        headers = {'content-type': 'application/json'}
        response = requests.post(self._entity_url, data=json.dumps(data), headers=headers)
        cn = response.content
        print()
        print(dir(response))
        print()
        print(dir(cn))
        print(type(cn))
        print(f'LEN: {len(cn)}')
        print()
        print(dict(response.headers).keys())
        print()
        return response.status_code


def _get_records(full_url: str, filter_dict=None):
    response = requests.get(full_url, params=filter_dict, verify=False)
    if st.RESULT_IS_PLAIN_JSON:
        # plain JSON without support for pagination
        return response.status_code
    else:
        # Django RF style
        return response.json()['results']


def _get_params(filter_dict: dict):
    ls = [f'{k}={v}' for k, v in filter_dict.items()]
    return '&'.join(ls)


def local_url(entity_name: str) -> str:
    """
    Factory will create object ApiUrl and will initialise it with provided entity name

    :param entity_name:
    :return:
    """
    api_url_obj = ApiClient(entity_name)
    return api_url_obj.entity_url

