
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
var turno_html = document.getElementById("turno");
function sumar_horizontal(a){
	var suma = 0;
	for (var i = 0; i < 3; i++) {
		suma+=a[i];
	}
	return suma;
}
function sumar_vertical(lista, i){
	var suma = 0;
	for (var j = 0; j <= 2; j++) {
		suma += lista[j][i];
		
	}
	return suma
}
function sumar_diagonal_1(c){
	var suma=0;
	for (var i = 0; i < 3; i++) {
		suma+=c[i][i];
	}
	return suma
}
function sumar_diagonal_2(c){
	var suma=0;
	var f = 2;
	for (var i = 0; i < 3; i++) {
		suma+=c[i][f];
		f-=1;
	}
	return suma
}

function Renombrar_elementos(state){
	if (state.tiro==1 && state.lista_tablero[0][0]==0) {
		var coordenadas_tiro=[0,0];
		if (state.turno==true){
			d1.className="D1x";
		}
		else if (state.turno==false){
			d1.className="D1o";
		}
	}
	else if (state.tiro==2 && state.lista_tablero[0][1]==0) {
		var coordenadas_tiro=[0,1];
		

		if (state.turno==true){
			d2.className="D2x";
		}
		else if (state.turno==false){
			d2.className="D2o";
		}
	}
	else if (state.tiro==3 && state.lista_tablero[0][2]==0) {
		var coordenadas_tiro=[0,2];
		

		if (state.turno==true){
			d3.className="D3x";
		}
		else if (state.turno==false){
			d3.className="D3o";
		}
	}
	else if (state.tiro==4 && state.lista_tablero[1][0]==0) {
		var coordenadas_tiro=[1,0];
		

		if (state.turno==true){
			d4.className="D4x";
		}
		else if (state.turno==false){
			d4.className="D4o";
		}
	}
	else if (state.tiro==5 && state.lista_tablero[1][1]==0) {
		var coordenadas_tiro=[1,1];
		

		if (state.turno==true){
			d5.className="D5x";
		}
		else if (state.turno==false){
			d5.className="D5o";
		}
	}
	else if (state.tiro==6 && state.lista_tablero[1][2]==0) {
		var coordenadas_tiro=[1,2];
		

		if (state.turno==true){
			d6.className="D6x";
		}
		else if (state.turno==false){
			d6.className="D6o";
		}
	}
	else if (state.tiro==7 && state.lista_tablero[2][0]==0) {
		var coordenadas_tiro=[2,0];
		

		if (state.turno==true){
			d7.className="D7x";
		}
		else if (state.turno==false){
			d7.className="D7o";
		}
	}
	else if (state.tiro==8 && state.lista_tablero[2][1]==0) {
		var coordenadas_tiro=[2,1];
		

		if (state.turno==true){
			d8.className="D8x";
		}
		else if (state.turno==false){
			d8.className="D8o";
		}
	}
	else if (state.tiro==9 && state.lista_tablero[2][2]==0) {
		var coordenadas_tiro=[2,2];
		

		if (state.turno==true){
			d9.className="D9x";
		}
		else if (state.turno==false){
			d9.className="D9o";
		}
	}
	else{
		alert("Tiro ya utilizado");
	}


	if (state.turno == true) {
		state.lista_tablero[coordenadas_tiro[0]][coordenadas_tiro[1]]=1;

	}
	else if (state.turno == false) {
		state.lista_tablero[coordenadas_tiro[0]][coordenadas_tiro[1]]=5;
		
	}
	//verificador 1 horizontal J1
	for (var f = 0; f < 3; f++) {
		if (sumar_horizontal(state.lista_tablero[f])==3) {
			alert("Ganador J1");
		}
	}
		//verificador 2 vertical J1
	for (var i = 0; i <= 2; i++) {
		if (sumar_vertical(state.lista_tablero, i)==3) {
			alert("Ganador J1");
		} 
	}

		//verificador 3 diagonal izquierda derecha J1
	if (sumar_diagonal_1(state.lista_tablero)==3) {	
			alert("Ganador J1");
	}
		//verificador 3 diagonal derecha izquierda J1
	if (sumar_diagonal_2(state.lista_tablero)==3) {
		alert("Ganador J1");
	}
		//verificador 1 horizontal J2
	for (var f = 0; f < 3; f++) {
		if (sumar_horizontal(state.lista_tablero[f])==15) {
			
			
			alert("Ganador J2");
			}
	}
		//verificador 2 vertical J2
	for (var i = 0; i <= 2; i++) {
		if (sumar_vertical(state.lista_tablero, i)==15) {
			alert("Ganador J2");
		} 
	}
		//verificador 3 diagonal izquierda derecha J2
	if (sumar_diagonal_1(state.lista_tablero)==15) {
			
			
			alert("Ganador J2");
	}
		//verificador 3 diagonal derecha izquierda J2
	if (sumar_diagonal_2(state.lista_tablero)==15) {
	
		
		alert("Ganador J2");
	}

	
	
	return D1, D2, D3, D4, D5, D6, D7, D8, D9
}
	

		
var root = document.getElementById("root");
function render (mountPoint, component, state){
	mountPoint.appendChild(component(state));
}

boton.onclick = function(){
	if (turno == true){
		turno = false;
		turno_html.className="j1";
	}
	else{
		turno = true;
		turno_html.className="j2";
	}
	var tiro = document.getElementById("tiro");
	var state = {"turno": turno, "tiro": tiro.value, "lista_tablero": lista_tablero};
	render(root, Renombrar_elementos, state);

}


//6-19-78