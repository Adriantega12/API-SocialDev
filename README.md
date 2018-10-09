A P I  S O C I A L  D E V
==========================


CONTROLADORES
-------------

Un controlador nos permite mediante código la manipulación de nuestras entidades y así lograr "controlar" (como ya su nombre lo 
dice) los datos de la aplicación. Además, estos nos permitirá la interacción con los "middlewares" y que así este se puede agregar
a todas las entidades.
Los controladores creados son:
1. Attachments
2. Emails
3. Friendships
4. Scores
5. Roles
6. Comments
7. Messages
8. Users
9. Posts


BASE DE DATOS
-------------

La base de datos seá nuestro "almacen" del proyecto donde podremos guardar cantidades gransdes de información de manera organizada 
y así poder encontrarlas para su uso de manera sencilla. Para esta, se ha decido usar "MySQL Workbench", la cual es una herramienta
visual que nos facilitará el uso de las operaciones básicas: CRUD (Create, Read, Update and Delete), y de la conexión.


MIDDLEWARES
-----------

El middleware será nuestro software que facilitará la interacción entre el cliente y el servidor quenos dirá si la entrada fue o no
correcta y así poder enviar la respuesta correspondiente según sea el caso. Esto permitirá la validación de información ingresada 
como un correo y así poder comprobar que es legítimo.


MODELOS
-------

Los modelos son, básicamente, los esqueletos de nuestras entidades, tales como usuario o publicaciones. Estas nos indicarán qué
deben llevar como parte de sus atributos.
Los modelos creados son:
1. Attachments
2. Emails
3. Friendships
4. Scores
5. Roles
6. Comments
7. Messages
8. Users
9. Posts


RUTAS
-----

Las rutas serán nuestros endpoints que nos permitirán la gestión de las peticiones (a través de métodos) de HTTP para indicar las
acciones que realizarán y retornar el código de estado de respuesta según sea el caso.
Las rutas creadas son:
1. ATTACHMENTS: 
-------
Ver todos los archivos adjuntos, agregar un archivo adjunto, actualizar un archivo adjunto y eliminar un archivo
adjunto.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index attachment | /attachments | GET | Mostrar todos los archivos adjuntos|
| New attachment | /attachments | POST | Crear un nuevo archivo adjunto |
| Show attachment | /attachments/{attachmentId} | GET | Mostrar un archivo adjunto |
| Update attachment | /attachments/{attachmentId} | PUT | Actualizar un archivo adjunto | 
| Destroy attachment | /attachments/{attachmentId} | DELETE | Eliminar un archivo adjunto | 


2. EMAILS: 
-------
Ver todos los correos electrónicos, validar un nuevo correo electrónico, mostrar un correo electrónico, actualizar un correo electrónico y eliminar un correo electrónico.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index email | /users/{id}/emails | GET | Mostrar todos los correos electrónicos de un usuario |
| New email | /users/{id}/emails | POST | Agregar un nuevo correo electrónico para un usuario |
| Show email | /users/{id}/emails/{emailId} | GET | Mostrar un correo electrónico específico de un usuario |
| Update email | /users/{id}/emails/{emailId} | PUT | Actualizar un correo electrónico de un usuaurio | 
| Destroy email | /users/{id}/emails/{emailId} | DELETE | Eliminar un correo electrónico de un usuario | 


3. FRIENDSHIPS:
-------
Ver todos tus amigos, agregar a un nuevo amigo, mostrar un amigo, actualizar y eliminar un amigo.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index friendship | /users/{id}/friendship | GET | Mostrar amistades existentes para un usuario |
| New friendship | /users/{id}/friendship | POST | Crear una nueva amistad para un usuario |
| Show friendship | /users/{id}/friendship/{friendshipId} | GET | Mostrar una amistad en específico de un usuario |
| Update friendship | /users/{id}/friendship/{friendshipId} | PUT | Actualizar una amistad de un usuario | 
| Destroy friendship | /users/{id}/friendship/{friendshipId} | DELETE | Eliminar una amistad de un usuario | 

4. SCORES: 
-------
Ver todas las puntuaciones, iniciar una nueva puntuación, mostrar una puntuación, actualizar y eliminar una calificación.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index score | /scores | GET | Mostrar todos los puntajes |
| New score | /scores | POST | Crear un nuevo puntaje en una publicación |
| Show score | /scores/{scoreId} | GET | Mostrar un puntaje asignado por un usuario en una publicación |
| Update score | /scores/{scoreId} | PUT | Actualizar un puntaje asignado por un usuario en una publicación | 
| Destroy score | /scores/{scoreId}  | DELETE | Eliminar un puntaje con un código específico | 


5. ROLES: 
-------
Ver todos los roles disponibles, crear un nuevo rol, mostrar cierto rol, actualizar un rol y eliminar un rol.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index | /roles | GET | Mostrar todos los roles |
| New | /roles | POST | Crear un nuevo rol |
| Show | /roles/{roleId} | GET | Mostrar un role |
| Update | /roles/{roleId} | PUT | Actualizar un rol | 
| Destroy | /roles/{roleId} | DELETE | Eliminar un rol | 


6. COMMENTS: 
-------
Mostrar todos los comentarios, crear un nuevo comentario,  mostrar un comentario, actualizar un comentario y eliminar un comentario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index comment | /comments | GET | Mostrar todos los comentarios |
| New comment | /comments | POST | Crear un nuevo comentario |
| Show comment | /comments/{commentId} | GET | Mostrar un comentario |
| Update comment | /comments/{commentId} | PUT | Actualizar un comentario | 
| Destroy comment | /comments/{commentId} | DELETE | Eliminar un comentario | 


7. MESSAGES: 
-------
Mostrar todos los mensajes, crear un nuevo mensaje, mostrar un mensaje, actualizar un mensaje y eliminar un mensaje.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index message | /messages | GET | Mostrar todos los mensajes |
| New message | /messages | POST | Crear un nuevo mensaje |
| Show message | /messages/{messageId} | GET | Mostrar un mensaje |
| Update message | /messages/{messageId} | PUT | Actualizar un mensaje | 
| Destroy message | /messages/{messageId} | DELETE | Eliminar un mensaje | 


8. USERS: 
-------
Ver todos los usuarios, crear un nuevo usuario, mostrar un usuario, actualizar la información de un usuario y eliminar un usuario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index users | /users | GET | Mostrar todos los usuarios |
| New user | /users | POST | Crear un nuevo usario |
| Show user | /users/{id} | GET | Mostrar un usuario |
| Update user | /users/{id} | PUT | Actualizar información de usuario | 
| Destroy user | /users/{id} | DELETE | Eliminar un usuario | 



9. POSTS: 
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

