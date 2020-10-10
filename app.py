import os
from flask import Flask
if os.path.exists('enc.py'):
    import env.py


app = Flask(__name__)


@app.route('/')
def hello():
    return 'hello'


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)
