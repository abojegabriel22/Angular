from flask import Flask, send_from_directory

app = Flask(__name__, static_folder="/dist/fullstack/assets", template_folder="/dist/fullstack")

# Serve static files from the 'dist' directory
@app.route('/')
def hello():
    return render_template('dist/fullstack/index.html')

print('Starting Flask!')

app.debug=True
app.run(host='0.0.0.0', port=9800)