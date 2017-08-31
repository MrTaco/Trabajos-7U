function Semaforo(){
	//crear elementos semaforo
	var black_rectangle_div = document.createElement("div");
	var red_div = document.createElement("div");
	var yellow_div = document.createElement("div");
	var green_div = document.createElement("div");

	//nombrar elementos semaforo
	black_rectangle_div.className = "black_rectangle";
	red_div.className="red";
	yellow_div.className="yellow";
	green_div.className="green";

	//agregar elementos a semaforo
	black_rectangle_div.appendChild(red_div);
	black_rectangle_div.appendChild(yellow_div);
	black_rectangle_div.appendChild(green_div);

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