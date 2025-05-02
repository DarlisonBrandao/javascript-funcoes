// function contagem(){
//   let voltasValue = Number(document.querySelector("#voltas").value);

//   for(let i = 0; i <= voltasValue; i++) {
//     console.log(i);
//   }
// }

// function tabuada(){
//     let numeroValue = Number(document.querySelector("#numero").value);
  
//     for(let i = 0; i <= 10; i++) {
//       console.log(`${numeroValue} X ${i} = ${numeroValue * i}`);
//     }  
// }

// function soma(){
//     let resultadoValue = Number(document.querySelector("#resultado").value);

//     for(let i= 0; i <= resultadoValue; i++){
//         console.log(`${resultadoValue} + ${i} = ${resultadoValue + i}`);
//     }
// }

// for(let i =10; i >= 0; i--) {
//     console.log(i);
// }

  // Questão 2 

function contarAteDez(){
  for(let i = 0; i <= 10; i++){
    console.log(i);
  }
}
//contarAteDez();

// Questão 3

function mostrarDataHora(){
  let data = new Date();
  console.log(data.toLocaleDateString("pt-BR"));
  console.log(data.toLocaleTimeString("pt-BR"));
  console.log(data.toTimeString("pt-BR"));
}
// mostrarDataHora()

function mostrarAlerta(){
  alert("isso é um alerta js !")
}

// mostrarAlerta()

function repetirPalavra(palavra, vezes){
  for(let i = 0; i < vezes; i++){
    console.log(palavra);
  }

}
repetirPalavra("JavaScript", 5);