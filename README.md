
# Bot de Pokémon Discord

Este es un bot de Discord que asigna Pokémon a los miembros del servidor. Cada miembro puede recibir un Pokémon aleatorio y cambiarlo por otro si lo desean.

## Pasos de implementación

Sigue los siguientes pasos para implementar este bot de Pokémon en Node.js:

### 1. Configuración del entorno

Asegúrate de tener Node.js instalado en tu sistema. También necesitarás una cuenta de Discord y un token de bot, que puedes obtener creando una aplicación de bot en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).

### 2. Configuración del proyecto

1.  Clona este repositorio o crea un nuevo proyecto de Node.js.
2.  Abre una terminal en la carpeta raíz del proyecto.

### 3. Instalación de dependencias

Ejecuta el siguiente comando en la terminal para instalar las dependencias necesarias:

bash

    `npm install discord.js dotenv` 

### 4. Configuración de variables de entorno

Crea un archivo `.env` en la carpeta raíz del proyecto y define las siguientes variables:

makefile

    `TOKEN=tu_token_de_bot_aquí` 

### 5. Implementación del código

Copia y pega el código proporcionado en un archivo llamado `bot.js` en la carpeta raíz del proyecto.

### 6. Ejecución del bot

Ejecuta el siguiente comando en la terminal para iniciar el bot:

bash

    `node bot.js` 

### 7. Configuración del bot en Discord

1.  Ve al [Portal de Desarrolladores de Discord](https://discord.com/developers/applications) y selecciona tu aplicación de bot.
2.  En la sección "Bot", haz clic en "Add Bot" para convertir tu aplicación en un bot.
3.  Copia el token del bot y reemplaza `tu_token_de_bot_aquí` en el archivo `.env` con tu token de bot.

¡Listo! Ahora tu bot de Pokémon está en funcionamiento y listo para asignar Pokémon a los miembros de tu servidor de Discord.

Recuerda invitar a tu bot al servidor de Discord y configurar los permisos necesarios para que pueda interactuar con los miembros.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de enviar pull requests o reportar problemas en la página de issues del repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Agradecimientos

Este bot de Pokémon se basa en la biblioteca Discord.js y utiliza la PokeAPI para obtener información y sprites de los Pokémon. Agradecimientos especiales a los desarrolladores de Discord.js y la PokeAPI por proporcionar estas herramientas.

