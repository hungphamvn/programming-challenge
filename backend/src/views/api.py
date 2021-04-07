import sys
import os
import random
import string
from flask import jsonify, request, send_file, send_from_directory, g
from flask import Blueprint

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

FILE_PATH = 'media/data_file.txt'

main_route = Blueprint('main', __name__)

ALPHABETICAL_STRINGS, REAL_NUMBERS, INTEGERS, ALPHANUMERICS = range(4)

TYPE_CHOICES = ((ALPHABETICAL_STRINGS, 'ALPHABETICAL_STRINGS'),
                (REAL_NUMBERS, 'REAL_NUMBERS'),
                (INTEGERS, 'INTEGERS'),
                (ALPHANUMERICS, 'ALPHANUMERICS'))


def data_generator(random_type: int, statics, result_string):
    result = ""
    if random_type == ALPHABETICAL_STRINGS:
        result = ''.join(random.choices(string.ascii_letters, k=16))
    elif random_type == REAL_NUMBERS:
        result = round(random.uniform(-10000000, 10000000), 3)
    elif random_type == INTEGERS:
        result = random.randint(-sys.maxsize - 1, sys.maxsize)
    elif random_type == ALPHANUMERICS:
        result = ''.join(random.choices(
            string.ascii_letters + string.digits, k=16)).lower()
    statics[result_string] = statics[result_string] + 1
    return result


def file_generator(file_path):
    report_statics = {
        'ALPHABETICAL_STRINGS': 0,
        'REAL_NUMBERS': 0,
        'INTEGERS': 0,
        'ALPHANUMERICS': 0
    }
    with open(file_path, 'w+', encoding='utf-8') as file:
        maxsize = 1024 * 2000  # max 2MB file size

        while file.tell() < maxsize:
            result_type, result_string = random.choices(TYPE_CHOICES)[0]
            x = data_generator(result_type, report_statics, result_string)
            file.write(str(x) + ",")
    return report_statics


@main_route.route("/file-generator/")
def generator():
    if os.path.isfile(FILE_PATH):
        os.remove(FILE_PATH)  # delete previous file

    report_statics = file_generator(FILE_PATH)
    return jsonify({'download_link': f"{request.host_url}api/download/", 'report_statistics': report_statics})


@main_route.route('/download/')
def download_file():
    if not os.path.isfile(FILE_PATH):
        return jsonify({"message": "still processing"})

    return send_file(FILE_PATH, as_attachment=True)
