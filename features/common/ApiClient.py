import json
import requests
from typing import Dict
import inspect

import settings as st


def _url_default_value(entity, protocol, host, port, prefix, suffix):
    """
    Method receives some values for URL. All not-None values are placed to the return-Dictionary.
    For all missing values default values are taken.

    :param protocol: HTTP or HTTPS
    :param host: server IP address
    :param port: port number
    :param prefix: after server address and before entity name some times there is a prefix, eg. localhost:8000/api/
    :param entity: name of resource, which is provided by the endpoint
    :param suffix: sometimes there may some suffix, for example for versioning
    :return: URL with default values instead of NONE-s
    """
    if entity is None:
        raise ValueError(f'name of resource cannot be NONE {entity}.')
    #
    _, _, _, values = inspect.getargvalues(inspect.currentframe())  # we only interested in Dict of names-values
    for k, v in values.items():
        if v is None:
            values[k] = st.DEFAULT_VALUES[k]
    return values


def _url_from_dict(entity: str, url_values_dict: Dict) -> str:
    """
    Method creates valid URL. None values are omitted.,

    :param url_values_dict:
    :return:
    """
    if entity is None:
        raise ValueError(f'name of resource cannot be NONE {entity}.')
    #
    base_url = f'{url_values_dict["protocol"]}://{url_values_dict["host"]}'
    if url_values_dict['port']:
        base_url = f'{base_url}:{url_values_dict["port"]}/'
    else:
        base_url = f'{base_url}/'
    if url_values_dict['prefix']:
        base_url = f'{base_url}{url_values_dict["prefix"]}/'
    #
    base_url = f'{base_url}{entity}/'
    if url_values_dict['suffix']:
        base_url = f'{base_url}{url_values_dict["suffix"]}/'
    #
    return base_url


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
        self._url_values = _url_default_value(entity, protocol, host, port, prefix, suffix)
        self._entity_url = _url_from_dict(entity, self._url_values)

    @property
    def entity_url(self):
        if self._entity_url:
            return self._entity_url

    @property
    def all_records(self):
        if self._entity_url:
            return _get_records(self._entity_url)

    def records(self, filter_dict: Dict):
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
    response = requests.get(full_url, params=filter_dict)
    return response.json()['results']


def _get_params(filter_dict: Dict):
    ls = [f'{k}={v}' for k, v in filter_dict.items()]
    return '&'.join(ls)


def local_url(entity_name: str) -> str:
    """
    Factory will create object ApiUrl and will initialise it with provided entity name

    :param entity_name:
    :return:
    """
    api_url_obj = ApiClient()
    api_url_obj.api_entity = entity_name
    return api_url_obj.entity_url

