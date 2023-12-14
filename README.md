# Aplicación de Validación de Tokens con Node.js y Express.js

Bienvenido a la Aplicación de Validación de Tokens, donde puedes ingresar información personal y recibir un token por correo electrónico para su validación.

## Descripción de la Aplicación

La aplicación consta de dos pasos:

1. **Página Inicial y Formulario de Registro:** En la página inicial, los usuarios pueden completar un formulario con su nombre, apellidos y dirección de correo electrónico. Al enviar el formulario, se les enviará un correo electrónico con un token único.

2. **Página de Validación de Token:** Después de recibir el correo electrónico, los usuarios deben copiar el token proporcionado y pegarlo en un formulario de validación en la aplicación. Al enviar el token, la aplicación verificará su autenticidad y mostrará un mensaje indicando si el token es válido o no.

## Tecnologías utilizadas
- Node.js
- Express.js
- Nodemailer
