<!-- 

 ! Es un patron para el manejo del estado de la informacion

* ¿Cual es el estado de la app?
* ¿Como cambio la informacion?
* ¿Quien cambio unavariable? 

# Toda la data de la app se encuentra en una estructura previamente definida

? STORE
    # Toda la informacion se encontrara almacenada en unico lugar llamado 
    # Es como una base de datos del lado del cliente
    # El store JAMAS se modifica de forma directa
    # Cualquier interaccion del usuasrio dispara acciones que describen que sucedio
    # El valor actual de la informacion de la app se llama estado - 
? STATE
    # Un nuevo estado es creado a base de la combinacion del viejo estado y una accion por una funcion llamada 
? REDUCER

-------------------------------------------

* ACTION
    Es la unica fuente de informacion que se envia por interacciones de usuario o programa
    Tienen unicamente 2 propiedades
        ! type -> Completar tarea
        ! payload -> Es la menor cantidad de informacion para realizar la tarea (es opcional)
* REDUCER
    # Consulta el store
    Es una simple funcion que recibe 2 argumentos y siempre retorna un estado
        ? oldState = estado actual de la app (Ejemplo un objeto con tareas,etc)
        ? action = alguna tarea a realizada
* STATE
    Es de solo lectura
    Nunca se mutara de forma directa
    Hay funciones prohibidas de JavaScript,como push
* STORE 
    Es un objeto con lo siguiente:
        Contiene el estado de la aplicacion
        Permite la lectura del estado via getState()
        Permite crear un nuevo estado con dispatch(Action)
        Permite notificar los cambios de estado via suscribe()
-->