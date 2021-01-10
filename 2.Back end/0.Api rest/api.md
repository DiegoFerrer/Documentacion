<!-- 

	La arquitectura cliente-servidor es donde varios clientes soliciten y reciben servicios de un servidor centralizado

	# Los clientes proporcionan una interfaz para la solicitud de servicios y mostrar los resultados.
	# Los servidores esperan las solicitudes para responder a los mismos
	# Los servidores provee una interfaz estandarizada y transparente a los clientes 
		(para que los clientes no se enteren la tecnologia del servidor si no, que se limiten a consumirla) API.

	API (Interface de aplicacion de programacion)

	Una API es un conjunto de subrutinas, procesos, funciones que ofrece un software 
	para que otro software o el mismo, pueda interactuar con el.


	REST: Representation state transfer
		Es un patron de arquitectura para la creacion de servicios "web"
		considera restricciones para su arquitectura
			* Client-Server
			* Stateless
			* Cacheable
			* Uniform Interface
			* Layered System
		Se basa en el protocolo HTTP para exponer su arquitectura.
		Este protocolo nos permite exponer una serie de reglas, (estandar) para que todos hablemos el mismo "idioma"

	RESTful: se usa para referirse a servicios web que implementan la arquitectura REST


	API REST: Es lo mismo que una api, pero para que la consuma un cliente.

	----------------------------------------------------------------------------------------------------------------
	El protocolo HTTP se basa en una comunicacion cliente-servidor, donde el cliente hace una peticion y el servidor le da una respuesta. 
	Esta peticion, debe ser de una forma especifica,para cumplir con el estandar.
		* Tipo de peticion(metodos/verbos)
			# GET     (OBTENER informacion,el servidor envie info al cliente)
			# POST    (ENVIAR informacion,el cliente envia hacia el servidor) [Idempotente, el unico que cambio la info en cada peticion]
			# PUT     (Actualizar un recurso)
			# PATCH   (Actualizar parcialmente un recurso)
			# DELETE  (Eliminar un recurso)
			# HEAD    (Consultar la existencia de un recurso)
			# OPTIONS (Para que el navegador valide una peticion desde un Dominio A hacia un Dominio B) (coors)
					  (pide permiso hacia ese dominio B para hacer la peticion)
			
		* Headers

	La respuesta del servidor viene con 
		* Codigo de respuesta
			# 100 a 199 = Informativos
			# 200 a 299 = Correcto
			# 300 a 399 = Redireccion
			# 400 a 499 = Error del cliente
			# 500 a 599 = Error del servidor
		* Headers
		* Cuerpo/data

	REST (REPRESENTATIONAL STATE TRANSFER)
		Todo en la web es un recurso y debe:
			* Tener un identificador unico (URI)
				# URL o URN
			* Estar representado por un formato (XML,JSON,JPEG,ETC)
			Content Types
				* text/plain
				* text/html
				* text/xml
				* application/json
				* image/jpeg
				* image/png
			* Poderse representar con diferentre formatos
			* Todas las comunicacion son sin estados (todas son peticionesn nuevas que no saben de las anteriores)
				# Ejemplo: en una peticion me logeo.. y en la siguiente peticion,pido un listado
				¿Como sabe el servidor que estoy logeado? si el no conoce la peticion anterior? 
				? stateless
					* Cookies y tokens: Son una cadena de caracteres que se generan en una peticion. 
					Y despues cada peticion que enviamos, la enviamos con la cookie o token para que el servidor sepa la informacion, por ejemplo, que ya estamos logeados.

					* TOKEN: la diferencia, es que el servidor firma esos tokens. es mas seguro. (JWT)

					* Las cookies, son mas utilizadas en navegadores. 


	Navegadores modernos admiten 2 APIs para las solicitudes htpp
		*XMLHtppRequest
		*fetch API


	
	! CORS
		# intercambio de recursos de origen cruzado
	! JWT-CORS (JSON WEB TOKEN)
		# Standar para entregar, credenciales a un usuario que se logea en un sistema
		* composicion:
			? headear {
				"alg" : "HS256",  | con que algoritmo fue FIRMADO ese token
				"typ" : "JWT"
 			}
			? PAYLOAD: {} | data que quiero enviar
			? Verify Signature: | firma
		* Librerias para firmar los JWT:
			htttps://jwt.io


	? Buenas practicas para armar una API
		
	responder las peticiones con una estructura modelo 

	class/interface/model/etc {
		mensajeOk {
			"codigo: string"
			"contenido string"
		} json,
		mensajeError {
			codigo
			contenido
		}
		data {}
	}

-->