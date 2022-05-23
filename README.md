# Tienda e-commerce con React JS

----

## Tienda Rakun

El proyecto comprende un e-commerce de un **emprendimiento que vende indumentaria y productos personalizados**.


### Distribución de la página


***Barra de navegación (NavBar)***

- Se colocaron en el NavBar 4 categorías con las que vamos a trabajar: 
1. "Tazas"
2. "Remeras Blancas"
3. "Remeras Grises" 
4. "Remeras Ranglan" 
Cada una de ellas va a filtar nuestra lista de productos, dejando solo los de esa categoría.

- El logo de la marca redirige al inicio al hacer click en él.

- Al tener productos en el carrito de compra, aparecerá un botón con la cantidad de productos que hay en el carrito en ese momento. Adicional a esto se podrá vaciar el carrito con otro botón que habrá a la derecha.


***Listado de productos (ItemListContainer)***

- En cuanto a los productos, se puede ver en cada card:
1. Nombre
2. Imagen
3. Precio

- Se puede clickear en "Ver Detalle" para dirigirse a la vista ampliada del producto.


***Detalle de producto (ItemDetailContainer)***

- Aquí dentro se puede ver:
1. Imágen ampliada del producto
2. Categoria
3. Nombre
4. Material
5. Descripción
6. Información general del mismo
7. Contador para sumar/restar productos y agregarlos al carrito (este contador va a poder variar entre 0 y el stock que disponga el producto)
8. Botón para seguir comprando, que redirecciona al inicio

- Al agregar al carrito una determinada cantidad del producto, aparecerán 3 nuevos botones que reemplazaran el contador: para ir al carrito, quitar el producto o quitar 1 unidad del mismo.


***Carrito y fin de compra (Cart + Checkout)***

- Los productos del carrito (Cart) se guardan en el Context mientras el cliente los va eligiendo y, al ir al carrito, los podrá ver uno debajo del otro con su respectiva información (imagen, nombre, precio y cantidad elegida). Adicionalmente, habrá 2 botones por cada ítem: para quitar el producto en su totalidad o para quitar sólo 1 unidad del mismo.

- Abajo de todo se ve el precio total y se puede redireccionar al inicio para seguir comprando o a finalizar la compra.

- Al finalizar (redirección al checkout) mostramos un formulario que el cliente debe completar para poder cerrar su compra, con los datos:
1. Nombre completo
2. E-mail
3. Teléfono
Estos datos se van a guardar en Firestore, en una collection llamada "orders", con la información del cliente, los productos comprados, la fecha y el monto total.

- Con estos datos ingresados, se informa al cliente que finalizó la compra y se le pasa un código de compra (id de la órden generada por la compra).


### Aclaraciones

- En cada redirección (entre home/categoría/detalle/carrito) se colocó un "Loading" mientras espera para ejecutar el componente.

- Cada componente se encuentra dentro de una carpeta con el mismo nombre del JSX, todos dentro de la carpeta "components".

- Los estilos de todo el sitio se dieron con distintos CSS, ubicados por separado en cada carpeta de los componentes.

- Los productos se traen de Firestore, de una colección llamada "items", para mostrarlos tanto en el listado de productos como en el detalle de cada uno.