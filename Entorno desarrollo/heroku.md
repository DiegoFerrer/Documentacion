esplegar en Heroku
1. Descargar heroku cli
2. heroku login
3. instalar gunicorn desde la carpeta virtual | pip install gunicorn
4. crear archivo Procfile en la carpeta src con lo siguiente:
    web : gunicorn index:app
5. crear archivo runtime.txt con lo siguiente
    Python 3.7.2 # Poner la version que se usa en el proyecto
6. desde la carpeta src ejecutar : pip freeze > requirements.txt
7. desde src : heroku create nameProyecto
8. enlazar con git : heroku git:remote nameProyect
9. git push heroku master
10. heroku open para compartir la web