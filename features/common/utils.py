import inspect

import settings as st


def get_file_path(file_name):
    return f'{st.DATA_DIR}/{file_name}.xlsx'


def get_parameters(func):
    keys = func.__code__.co_varnames[:func.__code__.co_argcount][::-1]
    sorter = {j: i for i, j in enumerate(keys[::-1])}
    if func.__defaults__ is not None:
        values = func.__defaults__[::-1]
        kwargs = {i: j for i, j in zip(keys, values)}
        sorted_kwargs = {
            i: kwargs[i] for i in sorted(kwargs.keys(), key=sorter.get)
        }
        sorted_args = tuple(
            sorted([i for i in keys if i not in kwargs], key=sorter.get)
        )
        return sorted_args, sorted_kwargs
    return tuple(sorted(keys, key=sorter.get)), {}


def url_default_value(entity, protocol, host, port, prefix, suffix):
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


def url_from_dict(entity: str, url_values_dict: dict) -> str:
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


