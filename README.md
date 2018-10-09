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
1. ATTACHMENTS: Ver todos los archivos adjuntos, agregar un archivo adjunto, actualizar un archivo adjunto y eliminar un archivo
adjunto.

2. EMAILS: Ver todos los correos electrónicos, validar un nuevo correo electrónico, mostrar un correo electrónico, actualizar un correo electrónico y eliminar un correo electrónico,

3. FRIENDSHIPS: Ver todos tus amigos, agregar a un nuevo amigo, mostrar un amigo, actualizar y eliminar un amigo.

4. SCORES: Ver todas las puntuaciones, iniciar una nueva puntuación, mostrar una puntuación, actualizar y eliminar una calificación.

5. ROLES: Ver todos los roles disponibles, crear un nuevo rol, mostrar cierto rol, actualizar un rol y eliminar un rol.

6. COMMENTS: Mostrar todos los comentarios, crear un nuevo comentario,  mostrar un comentario, actualizar un comentario y eliminar un comentario.

7. MESSAGES: Mostrar todos los mensajes, crear un nuevo mensaje, mostrar un mensaje, actualizar un mensaje y eliminar un mensaje.

8. USERS: Ver todos los usuarios, crear un nuevo usuario, mostrar un usuario, actualizar la información de un usuario y eliminar un usuario.

9. POSTS: Mostrar todas las publicaciones, crear un nueva publicación, mostrar una publicación, actualizar un publicación y eliminar una publicación.



AUTORES
=======

- Diego Frías Acosta
- Laura Marcela Hernández Bitar
- Adrián Octavio Terrazas García

