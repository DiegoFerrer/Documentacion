
#? ------------------------------ I N S T A L A C I O N E S ---------------------------
    # pip install flask  
    # pip install flask-mysqldb 
    # pip install -U flask-cors

'''------------------------------------ I M P O R T S --------------------------------'''
from flask import Flask 
from flask import render_template   # para usar html 
from flask import request           # Para enviar y recibir datos
from flask import redirect          # Para redireccionar
from flask import url_for           # crear una URL para redireccionar
from flask import jsonify           # Objeto Json
from flask import request           # manejar los request
from flask_cors import CORS         # Importando CORS para python
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

'''---------------------------- Coneccion a la base de datos ----------------------------'''
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'flaskcontacts'
mysql = MySQL(app)

# Settings
app.secret_key = 'mysecretkey' # para que vaya protegida la sesion

'''----------------------------------------- R U T A S --------------------------------'''

#! Obtener todos los datos de la columna series
@app.route('/', methods=['GET'])
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM series') 
    status_code = 200
    data = cur.fetchall() # ejecuta la consulta y obtiene todos los datos
    return jsonify(data), status_code

#! Crear serie
@app.route('/agregarSerie', methods=['POST'])
def agregarSerie():
    if request.method == 'POST':
        nombre = request.form['nombre']
        valoracion = request.form['valoracion']
        temporada = request.form['temporada']
        cur = mysql.connection.cursor()
        # cur.execute('INSERT INTO contacts (fullname,phone,email) VALUES(%s, %s, %s)', (fullname,phone,email)) # cursor es para crear la consulta, insert es de insertar, contacts es el nombre de la tabla | values con %s es que se lo pasamos a continuacion como una tupla
        cur.execute(f'INSERT INTO series SET nombre = {nombre}, valoracion = {valoracion}, temporada = {temporada}')
        mysql.connection.commit() # ejecutar la consulta
        status_code = 201
        return redirect(url_for('/')),status_code # redirecciona a la ruta index

#! Actualizar serie
@app.route('/update/<id>', methods=['POST'])
def update_serie(id):
    if request.method == 'PUT':
        nombre = request.form['nombre']
        valoracion = request.form['valoracion']
        temporada = request.form['temporada']
        cur = mysql.connection.cursor()
      # cur.execute('UPDATE contacts SET fullname = %s, email = %s, phone = %s WHERE id = %s',(fullname,email,phone,id))
        cur.execute(f'UPDATE contacts SET nombre = {nombre}, valoracion = {valoracion}, temporada = {temporada} WHERE id = {id}')
        mysql.connection.commit() # ejecutar la consulta
        return redirect(url_for('index')) # redirecciona a la ruta index

#! Eliminar Serie
@app.route('/delete/<string:id>')
def delete_contact(id):
    cur = mysql.connection.cursor()
    cur.execute(f'DELETE FROM contacts WHERE id = {id}')
    mysql.connection.commit() # ejecutar la consulta
    return redirect(url_for('index')) # redirecciona a la ruta index

'''############################### Ejecutar Servidor #########################'''
# python app.py
if __name__ == '__main__':
    app.run(port = 4000, debug=True) # debug true para reiniciar cambios automaticamente