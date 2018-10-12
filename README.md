API  SocialDev
==========================

# Tabla de contenidos

1. [Introducción](#1-introducción)
  1. [Meta](#11-meta)
  2. [Alcance](#12-alcance)
2. [Descripción general](#2-descripción-general)
  1. [Perspectiva de _SocialDev_](#21perspectiva-de-socialdev)
  2. [Funcionalidad de _SocialDev_](#22funcionalidad-de-socialdev)
  3. [Características de los usuarios](#23características-de-los-usuarios)
  4. [Restricciones](#24restricciones)
3. [Requisitos](#3requisitos)
  1. [Controladores](#31controladores)
  2. [Datos](#32datos)
  3. [Middlewares](#33middlewares)
  4. [Modelos](#34modelos)
  5. [Rutas](#35rutas)
    1. [Attachments](#351attachments)
    2. [Emails](#352emails)
    3. [Friendships](#353friendships)
    4. [Scores](#354scores)
    5. [Comments](#355comments)
    6. [Messages](#356messages)
    7. [Users](#357users)
    8. [Posts](#358posts)


##  1. Introducción
_SocialDev_ es una red social dirigida para programadores de cualquier nivel y personas interesadas en el desarrollo de software. Esta plataforma permitirá compartir publicaciones que pueden ser texto o imágenes, y con ello, sus amigos podrán reaccionar a cada publicación con una calificación que definirá el nivel de cada usuario, así pues, entre más calificaciones positivas exitan, más alto será su nivel.


### 1.1. Meta
Al ser una red social para desarrolladores de software, el contenido en su gran mayoría será de programación y así todos los usuarios podrán compartir desde sus experiencias personales hasta contenido divertido relacionado al tema, lo cual permitirá que los usuarios puedan conectarse de manera virtual con personas interesadas en el mismo ámbito.

### 1.2. Alcance
Este proyecto pretende poder comunicar a diversos usuarios interesados en la programación por medio de esta plataforma que se conocerá como _SocialDev_. El objetivo es que los usuarios que formen parte de la comunidad, puedan compartir contenido, ya sean publicaciones de texto o contenido multimedia, para comunicar sus ideas, anécdotas, aprendizajes y cualquier otro material que pueda impulsar el desarrollo de la comunidad.

## 2. Descripción general
La aplicación WEB cuenta con cuatro entidades esenciales para el funcionamiento básico de la plataforma.

#### 1. Usuarios
Los usuarios serán capaces de ver las publicaciones (tengan cuenta o no), sin embargo, al crear una cuenta con su correo electrónico y su información básica (contraseña, nombre completo, edad, foto de perfil) podrán crear sus propias publicaciones, comentar publicaciones, agregar a otros usuarios como amigos y enviarles mensajes.

#### 2. Publicaciones
Las publicaciones serán creadas por un usuario utilizando una cuenta en la que podrán compartir contenido multimedia o simplemente texto y así poder crear un tema de discusión en la red social o simplemente mostrar algo interesante.

  #### 3. Comentarios
Cuando se ha realizado una publicación, se tendrá la opción de poder compartir tu opinión mediante un comentario de texto lo que permite a los usuarios interactuar entre ellos y hacer más agradable y práctico el uso de la red social.

#### 4. Mensajes
Poder enviar mensajes permitirá la comunicación directa entre dos usuarios registrados distintos para poder hablar de forma privada.

### 2.1. Perspectiva de _SocialDev_

**¿Por qué _SocialDev_ es distinto a otras redes sociales?**

Antes que nada, se debe entender qué es una calificación en _SocialDev_. Ésta básicamente son los puntos otorgados por un usuario a otro usuario que realizó una publicación. Según sea el agrado del usuario, será la calificación añadida, es decir, si a un usuario le gustó una publicación, éste tendrá mayor probabilidad de otorgrar una buena calificación, lo cuál ayudaría al usuario autor de la publicación a subir de nivel. Como es de esperarse, entre más alto el nivel del usuario, es mayor su prestigio. Esto funcionará como una forma de moderar el contenido que se publica en la red social y así quedarse con contenido de calidad que aporte lo mejor a otros usuarios.


### 2.2. Funcionalidad de _SocialDev_

_SocialDev_ busca conectar a programadores que vayan de los rangos de principiante a experto para ayudarse a crecer mutuamente en conocimientos relacionados al desarrollo de software.

### 2.3. Características de los usuarios
Actualmente se encuentran definidos dos tipos de usuarios, que son:

* **Super usuario**

También conocido como _root_ es el nombre convencional de la cuenta de usuario que posee todos los derechos en todos los modos (monousuario o multiusuario). Es la cuenta de administrador. El usuario root puede hacer muchas cosas que un usuario común no puede, tales como crear nuevos roles, acceder a todas las funciones, entre otras.

* **Usuario común**

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
1. Comments
2. Messages
3. Users
4. Posts


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


## 4. Instalación

### 4.1. Dependencias

- **Git**

  Para poder descargar el proyecto, y en caso de querer trabajar con él y todas las ramas y archivos presentes en este proyecto, será necesario instalar Git.

  `sudo apt-get install git-core`

- **Node**

  Node es el programa utilizado para correr el servidor de forma local.

  Generalmente, para instalar Node, el método preferido es utilizar un manejador de versiones de Node llamado NVM. La forma más directa de instalar NVM es corriendo el siguiente comando:

  `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash`

  O bien:

  `wget -q0- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash`

  Para más detalles sobre la instalación de cómo instalar NVM, visitar el [repositorio de NVM][NVMRepo] oficial.

  Posteriormente, Node podrá ser instalado con el siguiente comando:

  `nvm install node`

  _Nota: Si desea instalar Node de una forma distinta, en la documentación oficial de [NodeJS][NodeGuide] se entra más en detalle todavía sobre el funcionamiento de Node y las opciones que hay para instalarlo._

- **MySQL**

  El manejador de base de datos implementado en este proyecto es MySQL, por lo que para correrlo de forma local es necesario tenerlo instalado sobre la computadora local. Para esto se sugiere seguir la [guía oficial de MySQL][MySQLGuide] para instalar y configurar adecuadamente.


### 4.2. Descargar el repositorio a tu máquina local

Para descargar el repositorio a tu local se corre el siguiente comando desde la terminal:

`git clone https://github.com/Darktega/API-SocialDev.git`

### 4.3. Configuración

#### 4.3.1. NPM (Más dependencias)

Para correr la aplicación es necesario correr el comando `npm install` que se encargará de descargar, instalar y manejar las versiones de todas las dependencias instaladas y que son necesarias para poder correr el proyecto de forma efectiva. Estas dependencias están especificadas en el archivo `package.json`.

### 4.3.2. Base de datos

Es necesario crear una base de datos de forma local, por lo que se recomienda hacer las configuraciones que se crean necesarias para poder trabajar de la forma que más sea pertinente para el usuario que usará la base de datos. La forma en la que se generará será utlizando el [script generador][DBCreate] que se anexa en la wiki del proyecto.

Una vez que se tenga el script generador en la máquina local, sólo es necesario correr el siguiente comando:

`mysql -u [nombre_de_usuario] -p < [nombre_de_archivo].sql`

A lo que la terminal pedirá la contraseña para el usuario correspondiente. De ser esta correcta, el script habrá generado una base de datos de nombre _SocialDev_ lista para utilizarse con la aplicación.

### 4.3.3. Variables de entorno

Entre las dependencias instaladas se encuentra una llamada `dotenv` utilizada para manejar variables de entorno. En el repositorio se colocó un archivo llamado `.sample-env` donde se muestra una plantilla de cómo configurar un archivo `.env` para poder correr nuestra aplicación. Se crea un archivo con dicho nombre y procedemos a llenar la información de la forma correspondiente:

| Variable | Ejemplo | Descripción |
| - | - | - |
| `PORT` | `3000` | Número de puerto sobre el que el servidor estará escuchando. |
| `DB_USER` | `root` | Nombre del usuario que se utilizará para acceder y administrar a la base de datos. Es importante que este cuente con todos los permisos necesarios. (No necesariamente tiene que ser root) |
| `DB_PASS` | `123456` | Contraseña del usuario mencionado anteriormente. |
| `DB_NAME` | `SocialDev` | Nombre de la base de datos a utilizar. Por defecto es `SocialDev`, acorde al script generador. |
| `DB_HOST` | `localhost` | Host de la base de datos. Si está corriendo de forma local, deberá ser localhost o bien, `127.0.0.1`. |

### 4.3.4. Correr aplicación

Habiendo realizado todas las configuraciones necesarias, el servidor puede ser corrido con el comando `node app.js`.

### 4.3.5. Debuggear aplicación

Para debuggear la aplicación, es posible utilizar el comando siguiente:

`node --inspect app.js`

Esto activará el modo de debuggeo de la aplicación. La aplicación puede ser debuggeada desde Chrome como con cualquier otro debugger accediento a la ruta `chrome://inspect` desde este mismo navegador, y procediendo a elegir la opción `Open dedicated DevTools for Node`.

_Nota: Para Firefox, es posible debuggear utilizando el paquete `node-firefox` de NPM que se puede instalar con `npm install node-firefox --save-dev`._

## 5. URL de app en vivo

URL: https://socialdev-218019.appspot.com/

##  6. Colección de Postman utilizada para hacer pruebas

Colección: https://www.getpostman.com/collections/b88701d2295f78763b3e

## 7. Autores

- Diego Frías Acosta: _diego142_
- Laura Marcela Hernández Bitar: _MarceFromMars_
- Adrián Octavio Terrazas García: _Darktega_

[NVMRepo]: https://github.com/creationix/nvm#installation
[NodeGuide]: https://blog.teamtreehouse.com/install-node-js-npm-linux
[MySQLGuide]: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
[DBCreate]: https://github.com/Darktega/API-SocialDev/wiki/Database-CREATE-Script
