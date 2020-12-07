''' 
    products.py Se puede usar flask para crear una REST API  

    1. Instalar los siguientes modulos : pip install flask
    2. Crear un archivo app.py que va a ser el "main" donde se crea la API

'''


from flask import Flask, jsonify, request # es para convertir un objeto tipico a json
app = Flask(__name__) # uso flask en la variable

''' ----------------------------------------------------------------------------------------------------- '''

# Entregar datos (en este caso productos)
from products import products

@app.route('/products', methods=['GET'])
def getProducts(): # en este caso va a usar el archivo products.py, pero seria como pedir a la base de datos
    return jsonify({"products": products, "message": "Products-list"}) # esto te devuelve la lista y ya puede ser consumida por el front end

@app.route('/products/<string:product_name>') # podria usarse ID para identificar un unico producto | en estec caso uso el nombre
def getProduct(product_name):
    print(product_name) # imprime en consola del servidor
    productsFound = [product for product in products if product['name'] == product_name]
    if (len(productsFound) > 0):
        return jsonify({"product":productsFound[0]})
    return jsonify({"message":"Producto no encontrado"})

# Crear DATOS, usamos postman/insomnia (porque no tenemos front-end)
''' En insomnia ir a body, JSON y enviamos datos como si fuese un form '''

@app.route('/products', methods=['POST']) # Puedo utilizar el mismo nombre de ruta, porque tienen diferente metodo
def addProduct():
    print(request.json) # imprime los datos que vienen en formato JSON en esta ruta
    new_product = {
        "name": request.json['name'],
        "price": request.json['price'],
        "quantity": request.json['quantity']
    }
    products.append(new_product)
    return jsonify({"message": "producto agregado", "products": products})

# Actualizar DATOS
@app.route('/products/<string:product_name>', methods=['PUT'])
def editProduct(product_name):
    productFound = [product for product in products if product['name'] == product_name]
    if (len(productFound) > 0):
        productFound[0]['name'] = request.json['name']
        productFound[0]['price'] = request.json['price']
        productFound[0]['quantity'] = request.json['quantity']
        return jsonify({
            "message":"producto actualizado",
            "product": productFound[0]
        })
    return jsonify({"message":"product not found"})

# Eliminar DATOS
@app.route('/products/<string:product_name>', methods=['DELETE'])
def deleteProduct(product_name):
    productFound = [product for product in products if product['name'] == product_name]
    if (len(productFound) > 0):
        products.remove(productFound[0])
        return jsonify({
            "message":"producto eliminado",
            "products": products
        })
    return jsonify({"message":"product not found"})

''' ----------------------------------------------------------------------------------------------------- '''

# Crear servidor
if __name__ == '__main__':
    app.run(port = 4000, debug = True)
    
# python app.py para ejecutar el servidor