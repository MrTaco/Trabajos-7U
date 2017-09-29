var tablero = document.getElementById("tablero");
var j1 = document.createElement("div");
var j2 = document.createElement("div");
var boton = document.getElementById("boton");
var lista_tablero = [[0,0,0],[0,0,0],[0,0,0]];
var d1 = document.getElementById("D1");
var d2 = document.getElementById("D2");
var d3 = document.getElementById("D3");
var d4 = document.getElementById("D4");
var d5 = document.getElementById("D5");
var d6 = document.getElementById("D6");
var d7 = document.getElementById("D7");
var d8 = document.getElementById("D8");
var d9 = document.getElementById("D9");
function sumar_horizontal(a){
	var suma = 0;
	for (var i = 0; i < 3; i++) {
		suma+=a[i];
	}
	return suma;
}
function sumar_vertical(b){
	var suma = 0;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			suma+=b[j][i];
		}
	}
	return suma;
}
function sumar_diagonal_1(c){
	var suma=0;
	for (var i = 0; i < 3; i++) {
		suma+=c[i][i];
	}
}
function sumar_diagonal_2(c){
	var suma=0;
	var f = 2;
	for (var i = 0; i < 3; i++) {
		suma+=c[i][f];
		f-=1;
	}
}

function Crear_tablero(state){
	if (state.tiro==1 && state.lista_tablero[0][0]==0) {
		var coordenadas_tiro=(0,0);
		state.tiro_usado1=true; 
		if (state.turno==true){
			d1.className="D1x";
		}
		else if (state.turno==false){
			d1.className="D1o";
		}
	}
	else if (state.tiro==2 && state.lista_tablero[0][1]==0) {
		var coordenadas_tiro=(0,1);
		state.tiro_usado2=true;

		if (state.turno==true){
			d2.className="D2x";
		}
		else if (state.turno==false){
			d2.classname("D2o");
		}
	}
	else if (state.tiro==3 && state.lista_tablero[0][2]==0) {
		var coordenadas_tiro=(0,2);
		state.tiro_usado3=true;

		if (state.turno==true){
			D3.classname("D3x");
		}
		else if (state.turno==false){
			D3.classname("D3o");
		}
	}
	else if (state.tiro==4 && state.lista_tablero[1][0]==0) {
		var coordenadas_tiro=(1,0);
		state.tiro_usado4=true;

		if (state.turno==true){
			D4.classname("D4x");
		}
		else if (state.turno==false){
			D4.classname("D4o");
		}
	}
	else if (state.tiro==5 && state.lista_tablero[1][1]==0) {
		var coordenadas_tiro=(1,1);
		state.tiro_usado5=true;

		if (state.turno==true){
			D5.classname("D5x");
		}
		else if (state.turno==false){
			D5.classname("D5o");
		}
	}
	else if (state.tiro==6 && state.lista_tablero[1][2]==0) {
		var coordenadas_tiro=(1,2);
		state.tiro_usado6=true;

		if (state.turno==true){
			D6.classname("D6x");
		}
		else if (state.turno==false){
			D6.classname("D6o");
		}
	}
	else if (state.tiro==7 && state.lista_tablero[2][0]==0) {
		var coordenadas_tiro=(2,0);
		state.tiro_usado7=true;

		if (state.turno==true){
			D7.classname("D7x");
		}
		else if (state.turno==false){
			D7.classname("D7o");
		}
	}
	else if (state.tiro==8 && state.lista_tablero[2][1]==0) {
		var coordenadas_tiro=(2,1);
		state.tiro_usado8=true;

		if (state.turno==true){
			D8.classname("D8x");
		}
		else if (state.turno==false){
			D8.classname("D8o");
		}
	}
	else if (state.tiro==9 && state.lista_tablero[2][2]==0) {
		var coordenadas_tiro=(2,2);
		state.tiro_usado9=true;	

		if (state.turno==true){
			D9.className="D9x";
		}
		else if (state.turno==false){
			D9.classname("D9o");
		}
	}
	else{
		alert("Tiro ya utilizado")
	}

	if (state.turno == true) {
		state.lista_tablero[coordenadas_tiro[0]][coordenadas_tiro[1]].push(1);
		state.turno = false;
	}
	else if (state.turno == false) {
		state.lista_tablero[coordenadas_tiro[0]][coordenadas_tiro[1]].push(5);
		state.turno = true;
	}

		//verificador 1 horizontal J1
	for (var f = 0; f < 3; f++) {
		if (sumar_horizontal(lista_tablero[f])==3) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador1");
			contador_turnos=10;
		}
	}
		//verificador 2 vertical J1
	if (sumar_vertical(lista_tablero)==3) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador1");
			contador_turnos=10;
	} 
		//verificador 3 diagonal izquierda derecha J1
	if (sumar_diagonal_1(lista_tablero)==3) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador1");
			contador_turnos=10;
	}
		//verificador 3 diagonal derecha izquierda J1
	if (sumar_diagonal_2(lista_tablero)==3) {
		var ganador = document.createElement("h1");
		ganador.classname("jugador1");
		contador_turnos=10;
	}
		//verificador 1 horizontal J2
	for (var f = 0; f < 3; f++) {
		if (sumar_horizontal(lista_tablero[f])==15) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador2");
			contador_turnos=10;
			}
	}
		//verificador 2 vertical J2
	if (sumar_vertical(lista_tablero)==15) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador2");
			contador_turnos=10;
	} 
		//verificador 3 diagonal izquierda derecha J2
	if (sumar_diagonal_1(lista_tablero)==15) {
			var ganador = document.createElement("h1");
			ganador.classname("jugador2");
			contador_turnos=10;
	}
		//verificador 3 diagonal derecha izquierda J2
	if (sumar_diagonal_2(lista_tablero)==15) {
		var ganador = document.createElement("h1");
		ganador.classname("jugador2");
		contador_turnos=10;
	}
	var turno = state.turno;
		//agregar elementos a semaforo
	return D1, D2, D3, D4, D5, D6, D7, D8, D9, turno
}
	

		
var root = document.getElementById("root");
function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}

boton.onclick = function(){
	
	var tiro = document.getElementById("tiro");
	var state={"turno": turno, "tiro": tiro, "lista_tablero": lista_tablero};

}


//6-19-78