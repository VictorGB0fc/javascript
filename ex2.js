#javascript
  //Encontrar a Média de um Array de Números
function mediaArray(arr) {
 let soma = arr.reduce((acc, num)) => acc + num
 return soma / arr.length;
}
console.log(mediaArray([10, 20, 30, 40]));
