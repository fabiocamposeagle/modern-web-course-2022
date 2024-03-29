const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas1.push(notas[i]);
		// para add um elemento em uma array vc chama a funcao push
	}
}

console.log(notasBaixas1);

// com callback
const notasBaixas2 = notas.filter(function (nota) {
	return nota < 7;
});

console.log(notasBaixas2);

// const notasBaixas3 = notas.filter(nota => nota < 7)
// console.log(notasBaixas3)

// mais functional e mais elegante
const notasMenorQue7 = (nota) => nota < 7;
const notasBaixas3 = notas.filter(notasMenorQue7);
console.log(notasBaixas3);
