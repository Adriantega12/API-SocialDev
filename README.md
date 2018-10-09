A P I  S O C I A L  D E V
==========================


CONTROLADORES
-------------

Un controlador nos permite mediante código la manipulación de nuestras entidades y así lograr "controlar" (como ya su nombre lo  dice) los datos de la aplicación. Además, estos nos permitirá la interacción con los "middlewares" y que así este se puede agregar a todas las entidades.
Los controladores creados son:
1. Comments
2. Messages
3. Users
4. Posts


BASE DE DATOS
-------------

La base de datos seá nuestro "almacen" del proyecto donde podremos guardar cantidades gransdes de información de manera organizada y así poder encontrarlas para su uso de manera sencilla. Para esta, se ha decido usar "MySQL". Nos facilitará el uso de las operaciones básicas: CRUD (Create, Read, Update and Delete), y de la conexión.


MIDDLEWARES
-----------

El middleware es la parte del programa que nos ayudará a a controlar el flujo de datos del programa, en este caso, fueron necesarios múltiples middlewares para verificar formatos, si un campo está lleno o no, etc.


MODELOS
-------

Los modelos son, básicamente, los esqueletos de nuestras entidades, tales como usuario o publicaciones. Estas nos indicarán qué deben llevar como parte de sus atributos, a su vez, nos ayudan con operaciones para acceder a la base de datos.
Los modelos creados son:
1. Comments
2. Messages
3. Users
4. Posts


RUTAS
-----

Las rutas serán nuestros endpoints que nos permitirán la gestión de las peticiones (a través de métodos) de HTTP para indicar las acciones que realizarán y retornar el código de estado de respuesta según sea el caso.
Las rutas creadas son:

1- ATTACHMENTS:
   ---
Ver todos los archivos adjuntos, agregar un archivo adjunto, actualizar un archivo adjunto y eliminar un archivo
adjunto.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index attachment | posts/{postId}/attachments | GET | Mostrar todos los archivos adjuntos|
| New attachment | posts/{postId}/attachments | POST | Crear un nuevo archivo adjunto |
| Destroy attachment | posts/{postId}/attachments/{attachmentId} | DELETE | Eliminar un archivo adjunto |


2- EMAILS:
   ---
Ver todos los correos electrónicos, validar un nuevo correo electrónico, mostrar un correo electrónico, actualizar un correo electrónico y eliminar un correo electrónico.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index email | /users/{id}/emails | GET | Mostrar todos los correos electrónicos de un usuario |
| New email | /users/{id}/emails | POST | Agregar un nuevo correo electrónico para un usuario |
| Destroy email | /users/{id}/emails/{emailId} | DELETE | Eliminar un correo electrónico de un usuario |


3- FRIENDSHIPS:
   ---
Ver todos tus amigos, agregar a un nuevo amigo, mostrar un amigo, actualizar y eliminar un amigo.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index friendship | /users/{id}/friendship | GET | Mostrar amistades existentes para un usuario |
| New friendship | /users/{id}/friendship | POST | Crear una nueva amistad para un usuario |
| Show friendship | /users/{id}/friendship/{friendshipId} | GET | Mostrar una amistad en específico de un usuario |
| Update friendship | /users/{id}/friendship/{friendshipId} | PUT | Actualizar una amistad de un usuario |
| Destroy friendship | /users/{id}/friendship/{friendshipId} | DELETE | Eliminar una amistad de un usuario |

4-  SCORES:
-------
Ver todas las puntuaciones, iniciar una nueva puntuación y eliminar una calificación.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index score | posts/{postId}/scores | GET | Mostrar todos los puntajes |
| New score | posts/{postId}/scores | POST | Crear un nuevo puntaje en una publicación |
| Destroy score | posts/{postId}/scores/{scoreId}  | DELETE | Eliminar un puntaje con un código específico |


6- COMMENTS:
-------
Mostrar todos los comentarios, crear un nuevo comentario,  mostrar un comentario, actualizar un comentario y eliminar un comentario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index comment | posts/{postId}/comments | GET | Mostrar todos los comentarios |
| New comment | posts/{postId}/comments | POST | Crear un nuevo comentario |
| Show comment | posts/{postId}/comments/{commentId} | GET | Mostrar un comentario |
| Update comment | posts/{postId}/comments/{commentId} | PUT | Actualizar un comentario |
| Destroy comment | posts/{postId}/comments/{commentId} | DELETE | Eliminar un comentario |


7- MESSAGES:
-------
Mostrar todos los mensajes, crear un nuevo mensaje, mostrar un mensaje, actualizar un mensaje y eliminar un mensaje.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index message | /messages | GET | Mostrar todos los mensajes |
| New message | /messages | POST | Crear un nuevo mensaje |
| Show message | /messages/{messageId} | GET | Mostrar un mensaje |
| Update message | /messages/{messageId} | PUT | Actualizar un mensaje |
| Destroy message | /messages/{messageId} | DELETE | Eliminar un mensaje |


8- USERS:
-------
Ver todos los usuarios, crear un nuevo usuario, mostrar un usuario, actualizar la información de un usuario y eliminar un usuario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index users | /users | GET | Mostrar todos los usuarios |
| New user | /users | POST | Crear un nuevo usario |
| Show user | /users/{id} | GET | Mostrar un usuario |
| Update user | /users/{id} | PUT | Actualizar información de usuario |
| Destroy user | /users/{id} | DELETE | Eliminar un usuario |



9- POSTS:
-------
Mostrar todas las publicaciones, crear un nueva publicación, mostrar una publicación, actualizar un publicación y eliminar una publicación.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index post | /posts | GET | Mostrar todos las publicación |
| New post | /posts | POST | Crear una nuevo publicación |
| Show post | /posts/{postId} | GET | Mostrar una publicación |
| Update post | /posts/{postId} | PUT | Actualizar una publicación |
| Destroy post | /posts/{postId} | DELETE | Eliminar una publicación |

AUTORES
=======

- Diego Frías Acosta
- Laura Marcela Hernández Bitar
- Adrián Octavio Terrazas García

URL DEL HOST ACTUAL
=======

URL: https://obscure-spire-45734.herokuapp.com/

COLECCIÓN DE POSTMAN
=======

Colección: https://www.getpostman.com/collections/b88701d2295f78763b3e
