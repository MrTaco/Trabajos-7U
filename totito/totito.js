var tablero = document.getElementById("tablero");
var j1 = document.createElement("div");
var j2 = document.createElement("div");
var turno = document.getElementById("turno");
var boton = document.getElementById("boton");
var lista_tablero = [[0,0,0],[0,0,0],[0,0,0]];
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

var tiro_usado1 = false;
var tiro_usado2 = false;
var tiro_usado3 = false;
var tiro_usado4 = false;
var tiro_usado5 = false;
var tiro_usado6 = false;
var tiro_usado7 = false;
var tiro_usado8 = false;
var tiro_usado9 = false;
lista_tiros_usados=[tiro_usado1, tiro_usado2, tiro_usado3, tiro_usado4, tiro_usado5, tiro_usado6, tiro_usado7, tiro_usado8, tiro_usado9];

function Crear_tablero(state){
	for (var contador_turnos = 0; contador_turnos < 10; contador_turnos++) {
		if (state.tiro==1 && state.lista_tiros_usados[0]==false) {
			var coordenadas_tiro=(0,0);
			state.tiro_usado1=true;
		}
		else if (state.tiro==2 && tiro_usado2==false) {
			var coordenadas_tiro=(0,1);
			state.tiro_usado2=true;
		}
		else if (state.tiro==3 && tiro_usado3==false) {
			var coordenadas_tiro=(0,2);
			state.tiro_usado3=true;
		}
		else if (state.tiro==4 && tiro_usado4==false) {
			var coordenadas_tiro=(1,0);
			state.tiro_usado4=true;
		}
		else if (state.tiro==5 && tiro_usado5==false) {
			var coordenadas_tiro=(1,1);
			state.tiro_usado5=true;
		}
		else if (state.tiro==6 && tiro_usado6==false) {
			var coordenadas_tiro=(1,2);
			state.tiro_usado6=true;
		}
		else if (state.tiro==7 && tiro_usado7==false) {
			var coordenadas_tiro=(2,0);
			state.tiro_usado7=true;
		}
		else if (state.tiro==8 && tiro_usado8==false) {
			var coordenadas_tiro=(2,1);
			state.tiro_usado8=true;
		}
		else if (state.tiro==9 && tiro_usado9==false) {
			var coordenadas_tiro=(2,2);
			state.tiro_usado9=true;	
		}
		else{
			return ("Tiro ya utilizado")
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
				var ganador = document.createElement("h1")
				ganador.classname("jugador1");
				contador_turnos=10;
			}
		}
		//verificador 2 vertical J1
		if (sumar_vertical(lista_tablero)==3) {
				var ganador = document.createElement("h1")
				ganador.classname("jugador1");
				contador_turnos=10;
		} 
		//verificador 3 diagonal izquierda derecha J1
		if (sumar_diagonal_1(lista_tablero)==3) {
				var ganador = document.createElement("h1")
				ganador.classname("jugador1");
				contador_turnos=10;
		}
		//verificador 3 diagonal derecha izquierda J1
		if (sumar_diagonal_2(lista_tablero)==3) {
			var ganador = document.createElement("h1")
			ganador.classname("jugador1");
			contador_turnos=10;
		}
		//verificador 1 horizontal J2
		for (var f = 0; f < 3; f++) {
			if (sumar_horizontal(lista_tablero[f])==15) {
				var ganador = document.createElement("h1")
				ganador.classname("jugador2");
				contador_turnos=10;
			}
		}
		//verificador 2 vertical J2
		if (sumar_vertical(lista_tablero)==15) {
				var ganador = document.createElement("h1")
				ganador.classname("jugador2");
				contador_turnos=10;
		} 
		//verificador 3 diagonal izquierda derecha J2
		if (sumar_diagonal_1(lista_tablero)==15) {
				var ganador = document.createElement("h1")
				ganador.classname("jugador2");
				contador_turnos=10;
		}
		//verificador 3 diagonal derecha izquierda J2
		if (sumar_diagonal_2(lista_tablero)==15) {
			var ganador = document.createElement("h1")
			ganador.classname("jugador2");
			contador_turnos=10;
		}
		//agregar elementos a semaforo
		return state.lista_tablero;
	}

		
}
function interpretar_tablero (tablero){

}
var root = document.getElementById("root");
function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}

boton.onclick = function(){
	
	var tiro = document.getElementById("tiro");
	var state={turno, tiro, lista_tiros_usados,lista_tablero};

	render(root, interpretar_tablero, );
}

//6-19-78