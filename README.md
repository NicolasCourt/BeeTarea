# README
* Ruby version 3.0.0
* Rails version 6.1.4.1
* npm version 6.14.12


* Gemas:
  - fast_jsonapi usado para serializar los datos

* Api
  - Leaflet usado para hacer el mapa y los puntos dentro de el

* Base de datos: postgresql
______________________________
Informacion para uso:

1) Si uno hace click sobre una de las marcas, se desplegara el numero de patente de dicho punto
2) En caso que no se ingresen datos, o se ingresen datos incorrectos nada cambiara, solo se refrescara la pagina
3) Pude que se ingrese una latitud o longitud que no exista, en ese caso al igual que el punto anterior, no ocurriran cambios, se asume error de tipeo
4) Las patentes son alfanumericas de cualquier longitud, debe ser minimo 1 y maximo 8
5) Heroku no esta mostrando los css ni scss, por lo que el front no se ve como deberia, en el siguiente link hay una imagen de como se deberia ver: https://ibb.co/72vxM7Z

