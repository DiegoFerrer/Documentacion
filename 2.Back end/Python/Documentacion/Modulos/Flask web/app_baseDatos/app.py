# pip install flask  flask-mysqldb 

'''------------------------------------ I M P O R T S --------------------------------'''
from flask import Flask 
from flask import render_template   # para usar html 
from flask import request           # Para enviar y recibir datos
from flask import redirect          # Para redireccionar
from flask import url_for           # crear una URL para redireccionar
from flask_mysqldb import MySQL

app = Flask(__name__)

'''---------------------------- Coneccion a la base de datos ----------------------------'''
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'flaskcontacts'
mysql = MySQL(app)

# Settings
app.secret_key = 'mysecretkey' # para que vaya protegida la sesion

'''----------------------------------------- R U T A S --------------------------------'''
# Obtener todos los datos de la columna contacts
@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM contacts') 
    data = cur.fetchall() # ejecuta la consulta y obtiene todos los datos
    return render_template('index.html', contacts = data)

# Crear contacto
@app.route('/add_contact', methods=['POST'])
def add_contact():
    if request.method == 'POST':
        fullname = request.form['fullname']
        phone = request.form['phone']
        email = request.form['email']
        cur = mysql.connection.cursor()
        # cur.execute('INSERT INTO contacts (fullname,phone,email) VALUES(%s, %s, %s)', (fullname,phone,email)) # cursor es para crear la consulta, insert es de insertar, contacts es el nombre de la tabla | values con %s es que se lo pasamos a continuacion como una tupla
        cur.execute(f'INSERT INTO contacts SET fullname = {fullname}, phone = {phone}, email = {email}')
        mysql.connection.commit() # ejecutar la consulta
        return redirect(url_for('index')) # redirecciona a la ruta index

# Obtener contacto PARA EDITAR
@app.route('/edit/<id>')
def get_contact(id):
     cur = mysql.connection.cursor()
     cur.execute(f'SELECT * FROM contacts WHERE id = {id}')
     data = cur.fetchall()
     return render_template('edit.html', contact = data[0]) # en este caso obtengo ese contacto a editar y lo trabajo en otra vista

# Enviar dato Editado
@app.route('/update/<id>', methods=['POST'])
def update_contact(id):
    if request.method == 'POST':
      fullname = request.form['fullname']
      phone = request.form['phone']
      email = request.form['email'] 
      cur = mysql.connection.cursor()
      # cur.execute('UPDATE contacts SET fullname = %s, email = %s, phone = %s WHERE id = %s',(fullname,email,phone,id))
      cur.execute(f'UPDATE contacts SET fullname = {fullname}, phone = {phone}, email = {email} WHERE id = {id}')
      mysql.connection.commit() # ejecutar la consulta
    return redirect(url_for('index')) # redirecciona a la ruta index


# Eliminar contactos
@app.route('/delete/<string:id>')
def delete_contact(id):
    cur = mysql.connection.cursor()
    cur.execute(f'DELETE FROM contacts WHERE id = {id}')
    mysql.connection.commit() # ejecutar la consulta
    return redirect(url_for('index')) # redirecciona a la ruta index

'''############################### Ejecutar Servidor #########################'''
# python app.py
if __name__ == '__main__':
    app.run(port = 3000, debug=True) # debug true para reiniciar cambios automaticamente