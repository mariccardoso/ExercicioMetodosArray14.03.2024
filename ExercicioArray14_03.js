//ATIVIDADE JS - ARRAYS E GITHUB

//Método 01: .concat()
//O método concat() é usado para combinar dois ou mais arrays em um único array.

//sintaxe 
//array1.concat(array2)

//Declarar os Arrays
let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['x', 'y', 'z'];


//Testes práticos:
console.log("Testes práticos: .concat");

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
console.log("Testes práticos: .join()");
let equipe = ['Júlia', 'Vinicius', 'Fernanda', 'Rayssa', 'Mariana'];

//Mostrar os elementos da seguinte forma: Júlia,Vinicius,Fernanada,Rayssa,Mariana
console.log(equipe.join());

//Separar os elementos da seguinte forma: Júlia-Vinicius-Fernanada-Rayssa-Mariana
console.log(equipe.join('-'));


//Metodo 03: .slice()
//O método slice() é usado para retornar uma cópia de parte de um array, especificada pelos índices de início e fim.

//Sintaxe:
//slice(start)
//slice(start, end)

//Testes Práticos: 
console.log("Testes práticos: .slice()");

//Resultado esperado: Array ['Vinicius', 'Fernanda', 'Rayssa', 'Mariana']
console.log(equipe.slice(1));

//Resultado esperado: Array['a', 'b', 'c']
console.log(array1.slice(0, 3));


//Método 04: .reverse()
//O método .reverse() inverte um array no lugar e retorna a referência ao mesmo array.
//O primeiro elemento do array agora se tornando o último, e o último elemento do array se tornando o primeiro.

//Sintaxe:
//reverse()

//Testes práticos:
console.log("Testes práticos: .reverse()");

let numeros = [1, 2, 3, 4];
console.log(numeros)
console.log(numeros.reverse());

let ordem = ['primeiro', 'segundo', 'terceiro'];
console.log(ordem);
console.log(ordem.reverse());


//Método 05: .includes()  
//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

//Sintaxe
//array.includes(searchElement[, fromIndex])
//SearchElement:O elemento a buscar
//fromIndex: Opcional. A posição no array de onde a busca pelo searchElement se iniciará.

//Testes práticos:
console.log("Testes práticos: .includes()");

let cidades = ["Rio de Janeiro", "São Paulo", "Campinas", "Valinhos"];
console.log(cidades.includes("São Paulo"));
//Retorna "true", pois a string "São Paulo" está dentro do array "cidades"
console.log(cidades.includes("Banana"));
//Retorna "false", pois a string "Banana" não faz parte do array "cidades"


//Método 06: .sort()
//O método sort classifica os elementos do array em ordem crescente por padrão.

//Sintaxe:
//arr.sort(funcaoDeComparacao)
//funcaoDeComparação(opcional): Especifica uma função que define a ordenação. Se omitido, o array é ordenado de acordo com a pontuação de código Unicode

//Testes práticos:
console.log("Testes práticos: .sort()");

let array5 = [2, 3, 5, 1, 4];
console.log(array5.sort());
//Resultado esperado: números ordenados em ordem crescente pelo Unicode

let frutas = ["caju", "amora", "banana"];
console.log(frutas.sort());
//Resultado esperado: Frutas ordenadas em ordem alfabetica pelo Unicode


//Método 07: .find()
//O find() retorna o primeiro elemento na matriz fornecida que satisfaz a função de teste fornecida.

//Sintaxe:
//find(callbackFn)
//find(callbackFn, thisArg)
//callbackFn: Uma função a ser executada para cada elemento da matriz.
//thisArg(opcional): Um valor a ser usado ao executar callbackFn.

//Funções
//Uma função é um conjunto de instruções que executa uma tarefa ou calcula um valor. 
//A definição da função (também chamada de declaração de função) consiste no uso da palavra chave function seguida por:
//Nome da Função.
//Lista de argumentos para a função, entre parênteses e separados por vírgulas.
//Declarações JavaScript que definem a função, entre chaves

//Testes práticos:
console.log("Testes práticos: .find()");

let array6 = [5, 12, 8, 130, 44];

let resultado = array6.find((element) => element > 10);
console.log(resultado);
//A função passada para o método find verifica se o elemento é maior do que 10: (element) => element > 10
//Se encontrar um elemento que atenda a essa condição, ele será atribuído à variável "resultado"

let resultado1 = array6.find((element) => element < 130);
console.log(resultado1);
//A função passada para o método find verifica se o elemento é menor do que 130: (element) => element < 130
//Se encontrar um elemento que atenda a essa condição, ele será atribuído à variável "resultado1"


//Método 08: indexOf()
//O método indexOf retorna o índice do elemento fornecido na matriz se for encontrado e retorna -1 se não for encontrado.

//Sintaxe:
//array.indexOf(elementoDePesquisa, [pontoInicial = 0])
//elementoDePesquisa: Elemento a ser pesquisado no array.
//pontoInicial: O índice para iniciar a procura.

//Testes práticos:
console.log("Testes práticos: indexOf()");

let dezenas = [10, 20, 30, 40, 50];
let result = dezenas.indexOf(30);
console.log(result); // 2

let result1 = dezenas.indexOf(50);
console.log(result1); //4


//Método 09: filter()
//O método filter verifica cada elemento na matriz em relação à condição na função passada e retorna apenas os elementos que atendem a essa condição.

//Sintaxe:
//newArray = arr.filter(callback[, thisArg])
//callback: Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário.
//thisArg (Opcional): Valor a ser usado como this durante a execução do callback.

//Testes práticos:
console.log("Testes práticos: filter()");

let todosnum = [1, 2, 3, 4, 5, 6];
let pares = todosnum.filter((element) => element % 2 === 0);
//Se o elemento for par (o resto da divisão por 2 é igual a 0) ele será incluído no novo array que será armazenado na variável "pares".
console.log(pares);

let impares = todosnum.filter((element) => element % 2 != 0);
//Se o elemento for ímpar (o resto da divisão por 2 é diferente de 0) ele será incluído no novo array que será armazenado na variável "ímpares".
console.log(impares);


//Método 10: map()
//O método map pega um elemento individual da matriz fornecida e altera seu valor de acordo com a função passada, 
//então retorna uma nova matriz com esses valores modificados.

//Sintaxe:
//arr.map(callback[, thisArg])
//callback: Função cujo retorno produz o elemento do novo Array
//thisArg: Opcional. Valor a ser utilizado como o this no momento da execução da função callback.

//Testes práticos:
console.log("Testes práticos: map()");

//Math.sqrt: A função Math.sqrt() retorna a raiz quadrada de um número. 
let radicandos = [4, 9, 16, 25];
let raizes = radicandos.map(Math.sqrt);
console.log(raizes);

// (e) => e ** 2: O operador de exponenciação (**) retorna o resultado de elevar o primeiro operando à potência do segundo operando.
let potencias = numeros.map((e) => e ** 2);
console.log(potencias);



//SPLICE ()

//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

//Sintaxe:
//array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])
//indice: Índice o qual deve iniciar a alterar a lista.
//deleteCount: Um inteiro indicando o número de antigos elementos que devem ser removidos.
    //Se deleteCount é 0, nenhum elemento é removido.
//elemento1, ..., elementoN: Os elementos a adicionar na lista.

//Testes Práticos:
console.log("Testes práticos: SPLICE");

let mariana = ['feia', 'linda', 'cheirosa', 'carismatica', 'inteligente'];

//Exemplo removendo
mariana.splice(0, 1);// Remove o primeiro elemento: "feia"
console.log(mariana);

//Exemplo adicionando
mariana.splice(1, 0, 'perfeita'); // Adiciona o elemento "perfeita" no índice 1
console.log(mariana);

//Exemplo Substituindo
mariana.splice(4, 1, 'talentosa'); // Substituí o elemento do índice 4 por "talentosa"
console.log(mariana);
