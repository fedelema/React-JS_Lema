Tienda Rakun

El proyecto comprende un e-commerce de una tienda que vende indumentaria y productos personalizados.

Se colocaron en el NavBar 4 categorías con las que vamos a trabajar: "Tazas", "Remeras Blancas", "Remeras Grises" y "Remeras Ranglan" (cada una de ellas va a filtar nuestra lista de productos, dejando solo los de esa categoría).

En cuanto a los productos, se puede ver en cada card el nombre, imagen y precio, y también se puede clickear en "Ver Detalle" para dirigirse a la vista ampliada del producto. 
Aquí dentro se puede ver la imágen ampliada, categoria, nombre, material, descripción, información general del mismo y contador para sumar/restar productos y agregarlos al carrito. Este contador va a poder variar entre 0 y el stock que disponga el producto.

En cada redirección (entre el home, alguna categoría y algún detalle de producto) se colocó un "Loading" para simular que está cargando la página mientras espera los 2 segundos de la promise para ejecutar el componente.

Cada componente se encuentra dentro de una carpeta con el mismo nombre del JSX, todos dentro de la carpeta "components".
Los estilos de todo el sitio se dieron con distintos CSS, ubicados por separado en cada carpeta de los componentes.