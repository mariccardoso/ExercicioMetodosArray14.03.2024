//ATIVIDADE JS - ARRAYS E GITHUB

//Método 01: .concat()
//O método concat() é usado para combinar dois ou mais arrays em um único array.

//sintaxe 
//array1.concat(array2)

//Declarar os Arrays
let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['x', 'y', 'z'];


//Testes práticos:
console.log("Testes práticos: .concat")

let array3 = array1.concat(array2);
console.log(array3);

let array4 = array1.concat(array2, array3);
console.log(array4);


//Metodo 02: .join()
//O método join() é usado para criar uma string a partir dos elementos de um array.
//O método join() junta os elementos do array em uma única string, separando cada elemento com um separador especificado.

//Sintaxe:
//join()
//join(separador)

//Testes práticos:
console.log("Testes práticos: .join()")
let equipe = ['Júlia', 'Vinicius', 'Fernanda', 'Rayssa', 'Mariana']

//Mostrar os elementos da seguinte forma: Júlia,Vinicius,Fernanada,Rayssa,Mariana
console.log(equipe.join());

//Separar os elementos da seguinte forma: Júlia-Vinicius-Fernanada-Rayssa-Mariana
console.log(equipe.join('-'))


//Metodo 03: .slice()
//O método slice() é usado para retornar uma cópia de parte de um array, especificada pelos índices de início e fim.

//Sintaxe:
//slice(start)
//slice(start, end)

//Testes Práticos: 
console.log("Testes práticos: .slice()")

//Resultado esperado: Array ['Vinicius', 'Fernanda', 'Rayssa', 'Mariana']
console.log(equipe.slice(1));

//Resultado esperado: Array['a', 'b', 'c']
console.log(array1.slice(0, 3));