Si no detecta el autoimport abrir el archivo a importar y probar otra vez

npm install react-router
react-router es una libreria de react que sirve para agregar rutas ej: 'pagina./direccion' lo que permite tener instancias separadas en una misma pagina 
simulando que son paginas distintas 

el Link de react-router sirve para ahorrar recursos, en vez de usar el <a> que
renderiza la pagina totalmente y eso consume recursos

En react queremos evitar recargar el DOM lo mas posible
El DOM es muy costoso y complicado de manipular
y se reemplaza por el virtual DOM, una version mucho mas ligero
y facil de manipular, y mis componentes manipulan el virtual DOM

El virtual dom se genera la primera vez que entra el usuario, es una operacion costosa
es costoso de generar

En nuestro trabajo final no puede haber <a> es correcto usar el <Link> de react-router