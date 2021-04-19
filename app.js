
let symbol = ["&#9824", "&#9827", "&#9829", "&#9830"];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13];
let boton = document.querySelector("#boton");
let ordenar = document.querySelector("#ordenar")
let cantidad;
var orden=[];

//FUNCION
boton.addEventListener('click',crearCarta)

function crearCarta(){
    cantidad =  document.getElementById("cantidad").value;
    document.querySelector("#content").innerHTML="";

    //RECORRE Y GENERA LAS CARAS
    for (let i = 0; i < cantidad; i++) {
       
        numero=number[Math.floor(Math.random() * number.length)];
        simbolo=symbol[Math.floor(Math.random() * symbol.length)];
        
        //Carta
        let card = document.createElement("div");
        card.classList.add("card");
        document.querySelector("#content").appendChild(card);

        //TopSuit
        let topSuit = document.createElement("div");
        topSuit.id = "topSuit";
        topSuit.innerHTML=simbolo;
        card.appendChild(topSuit);

       //BottomSuit
        let bottomSuit = document.createElement("div");
         bottomSuit.id = "bottomSuit";
        bottomSuit.innerHTML=simbolo;
        card.appendChild(bottomSuit);
        
        if(simbolo==="&#9829" || simbolo==="&#9830"){
          bottomSuit.style.color="red";
          topSuit.style.color="red";
        }
        
      //Numero
        let numberCard = document.createElement("div");
        numberCard.classList.add("numberCard");
        numberCard.innerHTML=numLetra(numero);
        card.appendChild(numberCard);

        let todo ={
            num:numero,
            sim:simbolo
        }
        //Agrego los numeros generador al orden
        orden.push(todo);

    } //FIN DEL RECORRIDO
    
};  //FIN DE LA FUNCION

function numLetra(numero){
  switch (numero) {
    case 1: return "A";
     case 11:return "J";
     case 12:return "Q";
     case 13:return "K";
    default:return numero;
  }}

ordenar.addEventListener('click',function(){
    let wall = orden.length - 1; //iniciamos el wall o muro al final del array
    while (wall > 0){
        let index = 0;
        while (index < wall) {
          //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
          if (orden[index].num > orden[index + 1].num) { 
            let aux = orden[index]; 
            orden[index] = orden[index + 1];
            orden[index + 1] = aux;
            final();
          }
          index++;
        }
        wall--; //disminuir la pared para optimizar
    }
    //Recorrer para mostrar nuevas cartas en fila
})

    function final(){
    let card = document.createElement("div");
    card.classList.add();
    document.querySelector("#nuevas").appendChild(card);

    for(let i=0; i<orden.length;i++){

    //Carta
    let card = document.createElement("div");
    card.classList.add("card");
    document.querySelector("#nuevas").appendChild(card);

    //TopSuit
    let topSuit = document.createElement("div");
    topSuit.classList.add("suit");
    topSuit.id = "topSuit";
    topSuit.innerHTML=orden[i].sim;
    card.appendChild(topSuit);

   //BottomSuit
    let bottomSuit = document.createElement("div");
    bottomSuit.classList.add("suit");
    bottomSuit.id = "bottomSuit";
    bottomSuit.innerHTML=orden[i].sim;
    card.appendChild(bottomSuit);

    if(orden[i].sim==="&#9829" || orden[i].sim==="&#9830"){
      bottomSuit.style.color="red";
      topSuit.style.color="red";
    }

  //Numero
    let numberCard = document.createElement("div");
    numberCard.classList.add("numberCard");
    numberCard.innerHTML=numLetra(orden[i].num);
    card.appendChild(numberCard);
    }}




