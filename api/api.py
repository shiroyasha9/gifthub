from flask import Flask
import flask

app = Flask(__name__)


@app.route("/api", methods=["GET", "POST"])
def api():
    # this is the array I am passing from frontend
    json_data = flask.request.json
    print(json_data)
    # Just trying to return something
    return "Hi"


if __name__ == "__main__":
    app.run(debug=True)

