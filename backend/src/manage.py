from flask import Flask
from flask_cors import CORS

from views.api import main_route

app = Flask(__name__)
app.debug = True

CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    headers=['Content-Type', 'X-Requested-With']
)


app.register_blueprint(main_route, url_prefix='/api')


@app.route("/")
def hello():
    return "Hello, World!"


if __name__ == "__main__":
    app.run()
