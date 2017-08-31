var lista = [1 , 2 , 3];
function agregar(lista){
	var lista_copia = lista;
	lista_copia.push(4);
	return lista_copia;
}
console.log(agregar(lista));
console.log(lista);
