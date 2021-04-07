import random
import pytest
from manage import app
from views.api import TYPE_CHOICES, data_generator


@pytest.fixture
def test_client():
    return app.test_client()


def test_hello_world(test_client):
    res = test_client.get("/")
    assert res.status_code == 200
    assert b"Hello, World!" in res.data


def test_data_generator():
    report_statics = {
        'ALPHABETICAL_STRINGS': 0,
        'REAL_NUMBERS': 0,
        'INTEGERS': 0,
        'ALPHANUMERICS': 0
    }

    result_type, result_string = random.choices(TYPE_CHOICES)[0]

    result = data_generator(result_type, report_statics, result_string)

    assert result is not None
    assert report_statics[result_string] == 1
