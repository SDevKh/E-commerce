from flask import Flask, render_template, send_from_directory, request, jsonify, json
app = Flask(__name__)

@app.route('/product')
def product():
    try:
        with open('products.json') as f:
            products = json.load(f)
            
    except FileNotFoundError:
        return "The products.json file was not found", 404
    except json.JSONDecodeError:
        return "Error decoding JSON data", 500

    product_id = request.args.get('id')
    product = next((p for p in products if str(p['id']) == product_id), None)
    
    if not product:
        return "Product not found", 404
    
    return render_template('product.html', product=product)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/checkout')
def checkout():
    selectedColor = request.args.get('selectedColor')
    selectedSize = request.args.get('selectedSize')
    quantity = request.args.get('quantity')

    return render_template('checkout.html', 
        selectedColor=selectedColor, 
        selectedSize=selectedSize, 
        quantity=quantity)

@app.route('/payment')
def payment():
    return render_template('payment.html')

@app.route('/template/<filename>')
def template(filename):
    return render_template(filename)

if __name__ == '__main__':
    app.run(debug=True)