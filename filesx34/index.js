function CuadradoCirculo(posicion){
	//titulo
	var h1Titulo = document.createElement("h1");
	var titulo = document.createTextNode("Ejemplo dibujo:");
	h1Titulo.appendChild(titulo);

	//crear cuadrado
	var divCuadro = document.createElement("div");
	divCuadro.className="cuadro";

	//crear circulo
	var divCirculo = document.createElement("div");
	divCirculo.className="circulo";
	divCirculo.style.left=posicion.x+"px";
	divCirculo.style.right=posicion.y+"px";


	//agregar circulo a cuadrado
	divCuadro.appendChild(divCirculo);

	//crear un elemento base
	var app = document.createElement("div");
	app.className="app";

	//agregar titulo y cuadrado al elemento base
	app.appendChild(h1Titulo);
	app.appendChild(divCuadro);

	return app;
}

function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}
// obtener la interfaz y "montarla" en el div con id root
var root = document.getElementById("root");
render(root, CuadradoCirculo, {x:100, y:700});