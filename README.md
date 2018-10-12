API  SocialDev
==========================

##  1. Introducción

_SocialDev_ es una red social dirigida para programadores de cualquier nivel y personas interesadas en el desarrollo de software. Esta plataforma permitirá compartir publicaciones que pueden ser texto o imágenes, y con ello, sus amigos podrán reaccionar a cada publicación con una calificación que definirá el nivel de cada usuario, así pues, entre más calificaciones positivas exitan, más alto será su nivel. 


### 1.1. Meta

Al ser una red social para desarrolladores de software, el contenido en su gran mayoría será de programación y así todos los usuarios podrán compartir desde sus experiencias personales hasta contenido divertido relacionado al tema, lo cual permitirá que los usuarios puedan conectarse de manera virtual con personas interesadas en el mismo ámbito.

### 1.2. Alcance

Este proyecto consiste en poder conetar de manera virtual a diversos usuarios interesados en la programación, es decir, se centra en el compartimiento de conteido textual o multimedia quepermite que los usuarios aprendan sobre distintos temas orientados al desarrollo de software; Para ello se necesita:
* La creación correcta de una base datos para que no exista ningúmn tipo de redundancia.
* Elección de un buen servidor para que el sistema pueda estar disponible en cualquier plataforma.
* Dispoinibilidad en diversos navegadores WEB como Chrome, Mozilla Firefox, Safari, Microsoft Edge e Interet Explorer.

### 1.3. Definiciones


### 1.4. Referencias
* _Unknown. (2005). MDN. 2018, de MDN web docs Sitio web: https://developer.mozilla.org/es/_

## 2. Descripción general

La aplicación WEB cuenta con cuatro entidades esenciales para el funcionamiento básico de la plataforma.

#### 1. Usuarios
Los usuarios serán capaces de ver las publicaciones (tengan cuenta o no), sin embargo, al crear una cuenta con su correo electrónico y su información básica (contraseña, nombre completo, edad, foto de perfil) podrán crear sus propias publicaciones, comentar publicaciones, agregar a otros usuarios como amigos y enviarles mensajes.

#### 2. Publicaciones
Las publicaciones serán creadas por un usuario a través de una cuenta en la que podrán compartir contenido multimedia o simplemente texto y así poder crear un tema de discusión en la red social o simplemente mostrar algo interesante.

  #### 3. Comentarios
Cuando se ha realizado una publicación, se tendrá la opción de poder compartir tu opinión mediante un comentario de texto lo que permite a los usuarios interactuar entre ellos y hacer más agradable y práctico el uso de la red social.

#### 4. Mensajes
Los mensajes serán aquellos recados de texto que enviará una persona a otro. Como ya se ha mencionado, los usuarios con cuenta tendrán la opción de enviar mensajes a otros usuarios que estén en su lista de contactos y así poder comunicarse con ellos en cualquier momento.


### 2.1. Perspectiva de _SocialDev_

**¿Por qué _SocialDev_ es distinto a otras redes sociales?**

Antes que nada, debemos entender qué es una calificación en _SocialDev_. Esta básicamente son los puntos otorgados por otro usuario en una publicación que hayas realizado; Según sea el agrado del usuario amigo, será la calificación añadida, es decir, si a tu amigo le gustó tu publicación podrá una buena calificación, lo cual haría que subieras de nivel y, como es de esperarse, entre más alto tu nivel, es mayor tu popularidad en la red social y así existe un incentivo para todos los usuarios de la plataforma.


### 2.2. Funcionalidad de _SocialDev_

_SocialDev_ busca conectar a programadores que sean desde principiantes hasta veteranos para ayudarlos a crecer en canto a conocimientos de la programación tal cual como diversas áreas.

### 2.3. Características de los usuarios
Actualmente se encuentran definidos dos tipos de usuarios, que son:
* Super usuario
* Usuario común

**Super usuario**
También conocido como _root_ es el nombre convencional de la cuenta de usuario que posee todos los derechos en todos los modos (monousuario o multiusuario). Es la cuenta de administrador. El usuario root puede hacer muchas cosas que un usuario común no puede, tales como crear nuevos roles, acceder a todas las funciones, entre otras.

**Usuario común**
Serán aquellas personas que deseen usar la aplicación WEB con las funciones básicas que serán compatir, buscar, agregar como amigo, comentar, reaccionar y enviar mensajes, por mencionar algunas. Este usuario únicamente podrá realizar acciones bajo su propia cuenta, a diferencia del superusuario que puede acceder a todo.


### 2.4. Restricciones

El sistema contará con algunas restricciones, tales como:
* El sistema no permitirá que un usuario sin cuenta pueda comentar una publicación de la plataforma.
* El sistema no permitirá que un usuario sin cuenta pueda calificar una publicación de la plataforma.
* El sistema no permitirá que un usuario vea un perfil del cual ha sido bloqueado.

## 3. Requisitos

### 3.1. Controladores

Un controlador nos permite mediante código la manipulación de nuestras entidades y así lograr "controlar" (como ya su nombre lo  dice) los datos de la aplicación. Además, estos nos permitirá la interacción con los "middlewares" y que así este se puede agregar a todas las entidades.
Los controladores creados son:
**1.** Comments
**2.** Messages
**3.** Users
**4.** Posts


### 3.2. Base de Datos

La base de datos seá nuestro "almacen" del proyecto donde podremos guardar cantidades gransdes de información de manera organizada y así poder encontrarlas para su uso de manera sencilla. Para esta, se ha decido usar "MySQL". Nos facilitará el uso de las operaciones básicas: CRUD (Create, Read, Update and Delete), y de la conexión.


### 3.3. Middlewares

El middleware es la parte del programa que nos ayudará a a controlar el flujo de datos del programa, en este caso, fueron necesarios múltiples middlewares para verificar formatos, si un campo está lleno o no, etc.


### 3.4. Modelos

Los modelos son, básicamente, los esqueletos de nuestras entidades, tales como usuario o publicaciones. Estas nos indicarán qué deben llevar como parte de sus atributos, a su vez, nos ayudan con operaciones para acceder a la base de datos.
Los modelos creados son:
**1.** Comments
**2.** Messages
**3.** Users
**4.** Posts


### 3.5. Rutas
Las rutas serán nuestros endpoints que nos permitirán la gestión de las peticiones (a través de métodos) de HTTP para indicar las acciones que realizarán y retornar el código de estado de respuesta según sea el caso.
Las rutas creadas son:

#### 3.5.1. Attachments
Ver todos los archivos adjuntos, agregar un archivo adjunto, actualizar un archivo adjunto y eliminar un archivo
adjunto.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index attachment | posts/{postId}/attachments | GET | Mostrar todos los archivos adjuntos|
| New attachment | posts/{postId}/attachments | POST | Crear un nuevo archivo adjunto |
| Destroy attachment | posts/{postId}/attachments/{attachmentId} | DELETE | Eliminar un archivo adjunto |


#### 3.5.2. Emails
Ver todos los correos electrónicos, validar un nuevo correo electrónico, mostrar un correo electrónico, actualizar un correo electrónico y eliminar un correo electrónico.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index email | /users/{id}/emails | GET | Mostrar todos los correos electrónicos de un usuario |
| New email | /users/{id}/emails | POST | Agregar un nuevo correo electrónico para un usuario |
| Destroy email | /users/{id}/emails/{emailId} | DELETE | Eliminar un correo electrónico de un usuario |


#### 3.5.3. Friendships
Ver todos tus amigos, agregar a un nuevo amigo, mostrar un amigo, actualizar y eliminar un amigo.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index friendship | /users/{id}/friendship | GET | Mostrar amistades existentes para un usuario |
| New friendship | /users/{id}/friendship | POST | Crear una nueva amistad para un usuario |
| Show friendship | /users/{id}/friendship/{friendshipId} | GET | Mostrar una amistad en específico de un usuario |
| Update friendship | /users/{id}/friendship/{friendshipId} | PUT | Actualizar una amistad de un usuario |
| Destroy friendship | /users/{id}/friendship/{friendshipId} | DELETE | Eliminar una amistad de un usuario |

#### 3.5.4. Scores
Ver todas las puntuaciones, iniciar una nueva puntuación y eliminar una calificación.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index score | posts/{postId}/scores | GET | Mostrar todos los puntajes |
| New score | posts/{postId}/scores | POST | Crear un nuevo puntaje en una publicación |
| Destroy score | posts/{postId}/scores/{scoreId}  | DELETE | Eliminar un puntaje con un código específico |


#### 3.5.5. Comments
Mostrar todos los comentarios, crear un nuevo comentario,  mostrar un comentario, actualizar un comentario y eliminar un comentario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index comment | posts/{postId}/comments | GET | Mostrar todos los comentarios |
| New comment | posts/{postId}/comments | POST | Crear un nuevo comentario |
| Show comment | posts/{postId}/comments/{commentId} | GET | Mostrar un comentario |
| Update comment | posts/{postId}/comments/{commentId} | PUT | Actualizar un comentario |
| Destroy comment | posts/{postId}/comments/{commentId} | DELETE | Eliminar un comentario |


#### 3.5.6. Messages
Mostrar todos los mensajes, crear un nuevo mensaje, mostrar un mensaje, actualizar un mensaje y eliminar un mensaje.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index message | /messages | GET | Mostrar todos los mensajes |
| New message | /messages | POST | Crear un nuevo mensaje |
| Show message | /messages/{messageId} | GET | Mostrar un mensaje |
| Update message | /messages/{messageId} | PUT | Actualizar un mensaje |
| Destroy message | /messages/{messageId} | DELETE | Eliminar un mensaje |


#### 3.5.7. Users
Ver todos los usuarios, crear un nuevo usuario, mostrar un usuario, actualizar la información de un usuario y eliminar un usuario.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index users | /users | GET | Mostrar todos los usuarios |
| New user | /users | POST | Crear un nuevo usario |
| Show user | /users/{id} | GET | Mostrar un usuario |
| Update user | /users/{id} | PUT | Actualizar información de usuario |
| Destroy user | /users/{id} | DELETE | Eliminar un usuario |



#### 3.5.8. Posts
Mostrar todas las publicaciones, crear un nueva publicación, mostrar una publicación, actualizar un publicación y eliminar una publicación.

| Nombre | Path | Verbo | Descripción |
|---|---|---|---|
| Index post | /posts | GET | Mostrar todos las publicación |
| New post | /posts | POST | Crear una nuevo publicación |
| Show post | /posts/{postId} | GET | Mostrar una publicación |
| Update post | /posts/{postId} | PUT | Actualizar una publicación |
| Destroy post | /posts/{postId} | DELETE | Eliminar una publicación |

Autores
=======
- Diego Frías Acosta: _diego142_
- Laura Marcela Hernández Bitar: _MarceFromMars_
- Adrián Octavio Terrazas García: _Darktega_

URL de App
=======
URL: https://socialdev-218019.appspot.com/

Colección de Postman utilizada para hacer pruebas
=======
Colección: https://www.getpostman.com/collections/b88701d2295f78763b3e
