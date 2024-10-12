from flask import Flask, request, jsonify

app = Flask(__name__)

@app.router('/api/form', methods=['POST'])
def submit_form():
    data = request.get_json()
    response = requests.post('https://example.com/api/form', json=data)
    if response.ok:
        return jsonify({'message': 'Success'})
    else:
        return jsonify({'error': 'Wrong'})
    
if __name__== '__main__':
    app.run(debug=True)