/* 1 Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”*/


function reverse(string) {
    var o = "";
    for (var i = string.length - 1; i >= 0; i--) {
        o += string[i];
    }
    return o;
}

console.log(reverse("Inverta essa string!"))


/* 2 Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem
 (maiusculas e minusculas) “salve” => 2*/

 const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

console.log(countVowel("testAndO essa bAgaça!"))


/*Extra: Criar a função (fazerRelatorio) que recebe uma string e retorna um objeto com a própria string,
 o inverso da string e quantas vogais ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”,
     numeroVogais: 2 }*/


     function makeReport(string) {
        const size = string.lenght;
        let reverse = "";
        let addletter = "";
        let resultVowels = 0;
        for (let letter of string) {
          if (
            letter == "a" ||
            letter == "e" ||
            letter == "i" ||
            letter == "o" ||
            letter == "u" ||
            letter == "A" ||
            letter == "E" ||
            letter == "I" ||
            letter == "O" ||
            letter == "U"
          ) {
            resultVowels++;
          }
          if (
            letter == "a" ||
            letter == "e" ||
            letter == "i" ||
            letter == "o" ||
            letter == "u" ||
            letter == "A" ||
            letter == "E" ||
            letter == "I" ||
            letter == "O" ||
            letter == "U"
          ) {
            addletter = addletter + letter;
          }
        }
        for (let letter of string) {
          reverse = letter + reverse;
        }
      
        if (resultVowels > 0) {
          console.log(
            `A palavra escrita foi ${string} e ao contrário fica assim ${reverse}.`
          );
          console.log(`Ela tem ${resultVowels} vogais, que são: ${addletter}.`);
        } else {
          console.log("Não tem vogais.");
        }
      }
      makeReport("alan");