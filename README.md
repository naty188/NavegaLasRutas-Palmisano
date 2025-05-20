# eldiabloespuerco

Este es un curso de e+commerce Basico en React. La aplicacion permite ver una lista de productos de remeras con estampas diversas que se almacenan y compran en linea. Los productos y las ordenes de compra se almacenan en Firebase.

## Tecnologias Utilizadas:
- Vite
- React
- Router-Router-DOM
- Firebase
- Toastify
- Boostrap 5.3.6

## Funcionalidades de la aplicacion:
- Ver una lista de productos disponibles
- Agregar productos al Carrito de compras
- Ver el carrito de compras
- Realizar una orden de compras con los datos del usuario

## Agregado de dominio

## Instalacion
- Clonar el repositorio en tu maquina
- Abrir la terminal en el directorio del proyecto
- Ejecutar el comando npm install para instalar las dependecias
- Ejecutar el comando install para iniciar la aplicacion
- Abrir el navegasdor de manera local con le localhost5173, para ver en accion la aplicacion


## Componentes ¿ Que incluyen y para que sirve cada uno?

- Navbar: 

- Logo de la tienda

- Enlaces a las distintas categorías

- El componente CartWidget con el ícono del carrito

 Sirve para moverse por toda la aplicación.

- Cart:

- Ver cantidades, subtotales y total

- Eliminar productos del carrito

- Acceder al botón de "Finalizar compra"

 Sirve para revisar y gestionar lo que vas a comprar.

- Cartwidget:

- Muestra la cantidad de productos seleccionados

- Permite acceder al carrito (Cart) al hacer clic

Sirve como acceso rápido al carrito de compras.

- Checkout:

- Ingresa sus datos (nombre, email, etc.)

- Confirma la orden

- Se genera la orden de compra en Firebase

Sirve para finalizar la compra y registrar la orden.

- Error: 

- Se muestra cuando el usuario va a una ruta que no existe o hay un error en la navegación.

Sirve como página 404 o de error general.

- Item:

- Imagen

- Nombre

- Precio

- Botón "Ver detalles"

Sirve para representar cada producto de forma resumida.

- ItemCount:

 - Botones + y - para elegir la cantidad

- Botón "Agregar al carrito"

Sirve para que el usuario seleccione cuántas unidades quiere.

- ItemDetail:

- Muestra la información completa de un producto: descripción, imagen grande, precio, stock, y el ItemCount.

Sirve para ver los detalles del producto y agregarlo al carrito.

- itemDetailContainer:

- Consulta el producto desde Firebase según el ID

- Muestra el ItemDetail una vez que los datos están cargados

Sirve para conectar los datos con la vista detallada de un producto.
 
- ItemList:

- Muestra una lista de varios productos, usando múltiples componentes Item.

Sirve para mostrar todos los productos de una categoría o todos en general.

- ItemListContainer:

- Obtiene los productos desde Firebase (todos o por categoría)

- Muestra un Loader mientras se cargan

- Luego muestra ItemList

Sirve como contenedor de la vista principal de productos.

- Loader:

- Muestra un spinner de carga mientras se están obteniendo los datos de Firebase.

Sirve para dar feedback visual al usuario mientras se carga algo.







