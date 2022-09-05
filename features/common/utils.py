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


