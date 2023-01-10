

//let usuario = "vitorolg"
//let senha = 12345;


//if((usuario == "vitorolg" || usuario == "voolegario2018@gmail.com") && senha == 12345){
    //console.log('login efetuado com sucesso...')}

    //if(usuario == "voolegario2018@gmail.com"){
       // console.log('acesso de admin')

        //posso colocar um if dentro de outro para informa um acesso especial como no ex: um acess de "Admin"
    //}

//}else{
  //  console.log('login ou senha inválido')
//}

// operador % == resto ou Remainder


//let numero = prompt("Digite o numero para saber si e par ou impar")

//if (numero % 2 == 0) {
   // console.log('numero par')
//}else{
   // console.log('numero impar')
//}


// Number serve para transforma toda string em numero ex:
 

//let numero1 = prompt('digite um numero')
//let numero2 = prompt('digite um numero')
//let resultado = 0

//if (numero1 >0 && numero2 >0){
  //resultado = Number(numero1) + Number(numero2)
  //alert(resultado)
//}else{
  //alert('resposta inválida')
//}


// Ex basíco de calculadora
let operacao = prompt('digite a operação (+,-,/,*) ')
let numero1 = prompt('digite um numero')
let numero2 = prompt('digite um numero')
let resultado = 0

if(operacao == "+"){
  resultado = Number(numero1) + Number(numero2)
  alert(resultado)
  
}else if(operacao == "-"){
  resultado = Number(numero1) - Number(numero2)
  alert(resultado)
}else if(operacao == "/"){
  resultado = Number(numero1) / Number(numero2)
  alert(resultado)
}