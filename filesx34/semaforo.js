function Semaforo(state){
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
	if (state == 1) {
		red_div.className="red_on";
	}
	if (state == 2){
		green_div.className="green_on";
	}
	if (state == 3){
		yellow_div.className="yellow_on";
	}
	if (state >= 3){
		state = 1;
	}

	//agregar elementos a semaforo
	black_rectangle_div.appendChild(red_div);
	black_rectangle_div.appendChild(yellow_div);
	black_rectangle_div.appendChild(green_div);
	return black_rectangle_div ;
}

function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}
var root = document.getElementById("root");
var x = 1;
var boton = document.getElementById("boton");
render(root, Semaforo, x);

boton.onclick = function(){

	if (x==1){
		x=2;
	}
	else if(x==2) {
		x=3;
	}
	else if(x==3){
		x=1;
	}
	render(root, Semaforo, x);
}
