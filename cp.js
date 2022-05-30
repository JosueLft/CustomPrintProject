var camisas = ["./img/camisa-red.png", "./img/camisa-black.png", "./img/camisa-white.png", "./img/camisa-blue.png", "./img/camisa-yellow.png"];
var estampas =["./img/kirby.png", "./img/4estrelas.png", "./img/heisenberg.png", "./img/catpotter.png"];
var camisasestampadasRED = ["img/camisa-red-kirby.png", "img/camisa-red-4estrelas.png", "img/camisa-red-heisenberg.png", "img/camisa-red-catpotter.png"];
var camisasestampadasBLACK = ["img/camisa-black-kirby.png", "img/camisa-black-4estrelas.png", "img/camisa-black-heisenberg.png", "img/camisa-black-catpotter.png"];
var camisasestampadasWHITE = ["img/camisa-white-kirby.png", "img/camisa-white-4estrelas.png", "img/camisa-white-heisenberg.png", "img/camisa-white-catpotter.png"];
var camisasestampadasBLUE = ["img/camisa-blue-kirby.png", "img/camisa-blue-4estrelas.png", "img/camisa-blue-heisenberg.png", "img/camisa-blue-catpotter.png"];
var camisasestampadasYELLOW = ["img/camisa-yellow-kirby.png", "img/camisa-yellow-4estrelas.png", "img/camisa-yellow-heisenberg.png", "img/camisa-yellow-catpotter.png"];

var esta = document.querySelector('#esta');
var cami = document.querySelector('#cami');
var img = document.querySelector('#resul'); //Aqui é referenciado o id do img onde as camisas estampadas ficam.
var c = document.querySelector('#camisas'); //Aqui é pego o valor do primeiro selection para camisas
var e = document.querySelector('#estampas');//Aqui é pego o segundo valor das estampas

  function exibir(){ // Função gambiarra de comparação
    //Camisa vermelha
    if(c.value == camisas[0] && e.value == estampas[0]){

        img["src"] = camisasestampadasRED[0];
    }else if(c.value == camisas[0] && e.value == estampas[1]){
        img["src"] = camisasestampadasRED[1];
    }
    else if(c.value == camisas[0] && e.value == estampas[2]){
        img["src"] = camisasestampadasRED[2];
    }
    else if(c.value == camisas[0] && e.value == estampas[3]){
        img["src"] = camisasestampadasRED[3];
    }

    //Camisa preta
    else if(c.value == camisas[1] && e.value == estampas[0]){
        img["src"] = camisasestampadasBLACK[0];
    }
    else if(c.value == camisas[1] && e.value == estampas[1]){
        img["src"] = camisasestampadasBLACK[1];
    }
    else if(c.value == camisas[1] && e.value == estampas[2]){
        img["src"] = camisasestampadasBLACK[2];
    }
    else if(c.value == camisas[1] && e.value == estampas[3]){
        img["src"] = camisasestampadasBLACK[3];
    }

    //Camisa branca
    else if(c.value == camisas[2] && e.value == estampas[0]){
        img["src"] = camisasestampadasWHITE[0];
    }
    else if(c.value == camisas[2] && e.value == estampas[1]){
        img["src"] = camisasestampadasWHITE[1];
    }
    else if(c.value == camisas[2] && e.value == estampas[2]){
        img["src"] = camisasestampadasWHITE[2];
    }
    else if(c.value == camisas[2] && e.value == estampas[3]){
        img["src"] = camisasestampadasWHITE[3];
    }

    //Camisa Azul
    else if(c.value == camisas[3] && e.value == estampas[0]){
        img["src"] = camisasestampadasBLUE[0];
    }
    else if(c.value == camisas[3] && e.value == estampas[1]){
        img["src"] = camisasestampadasBLUE[1];
    }
    else if(c.value == camisas[3] && e.value == estampas[2]){
        img["src"] = camisasestampadasBLUE[2];
    }
    else if(c.value == camisas[3] && e.value == estampas[3]){
        img["src"] = camisasestampadasBLUE[3];
    }

    //Camisa Amarela
    else if(c.value == camisas[4] && e.value == estampas[0]){
        img["src"] = camisasestampadasYELLOW[0];
    }
    else if(c.value == camisas[4] && e.value == estampas[1]){
        img["src"] = camisasestampadasYELLOW[1];
    }
    else if(c.value == camisas[4] && e.value == estampas[2]){
        img["src"] = camisasestampadasYELLOW[2];
    }
    else if(c.value == camisas[4] && e.value == estampas[3]){
        img["src"] = camisasestampadasYELLOW[3];
    }
  }

function camisaChange(){

    cami.src = c.value;
    
}

function estampaChange(){

    esta.src = e.value;

}