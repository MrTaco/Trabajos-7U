var tablero = document.getElementById("tablero");
var j1 = document.createElement("div");
var j2 = document.createElement("div");
var tiro = document.getElementById("tiro");
var lista_tablero = [[0,0,0],[0,0,0],[0,0,0]];
function sumar_horizontal(a){
	var suma = 0;
	for (var i = 0; i < 3; i++) {
		suma+=a[i];
	}
function sumar_vertical(b){
	var suma = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			suma+=b[j][i];
		}
	}
}
function sumar_diagonal(c){
	var suma=0;
}
}
function totito(state){
	for (var contador_turnos = 0; i < 10; i++) {
		if (state.tiro==1) {
			var coordenadas_tiro=(0,0);
		}
		if (state.tiro==2) {
			var coordenadas_tiro=(0,1);
		}
		if (state.tiro==3) {
			var coordenadas_tiro=(0,2);
		}
		if (state.tiro==4) {
			var coordenadas_tiro=(1,0);
		}
		if (state.tiro==5) {
			var coordenadas_tiro=(1,1);
		}
		if (state.tiro==6) {
			var coordenadas_tiro=(1,2);
		}
		if (state.tiro==7) {
			var coordenadas_tiro=(2,0);
		}
		if (state.tiro==8) {
			var coordenadas_tiro=(2,1);
		}
		if (state.tiro==9) {
			var coordenadas_tiro=(2,2);
		}
		if (state.turno == true) {
			lista_tablero[var coordenadas_tiro[0]][var coordenadas_tiro[1]] .push(1);
			state.turno = false;
		}
		else if (state.turno == false) {
			lista_tablero[var coordenadas_tiro[0]][var coordenadas_tiro[1]].push(2);
			state.turno = true;
		}

		//verificador 1 horizontal
		for (var f = 0; f < 3; f++) {
			if (sumar_horizontal(lista_tablero[f])==3) {
				var ganador = document.createElement("h1")
				ganador.classname("j1");
				contador_turnos=10;
			}
		}
		//verificador 2 vertical
		if (sumar_vertical(lista_tablero)==3) {
				var ganador = document.createElement("h1")
				ganador.classname("j1");
				contador_turnos=10;
		}
		//verificador 3 diagonal

		}
		//agregar elementos a semaforo
		black_rectangle_div.appendChild(red_div);
		black_rectangle_div.appendChild(yellow_div);
		black_rectangle_div.appendChild(green_div);
		return black_rectangle_div ;
	}

		
}

function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}
var root = document.getElementById("root");
var x = 1;
var boton = document.getElementById("boton");
var turno = document.getElementById("turno");
var state={turno, tiro};
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
