function numeroadecision(elnumeroelejido){
    switch (elnumeroelejido){
        case 0:
            return "piedra";
            break;
        case 1:
            return "papel";
            break;
        case 2:
            return "tijera";
            break;
        default:
            break;
    }
}

function getComputerChoice(){
    let decisionPC = numeroadecision(Math.floor(Math.random() * 3));
    return decisionPC;
}

function playerSelection(decisionplayer){
    do{
        decisionplayer = prompt("Coloca tu decision: (piedra, papel o tijera)");
        if(decisionplayer == null){
            alert("Juego cancelado!");
        }else{
            decisionplayer = decisionplayer.toLowerCase();
            if(decisionplayer == "piedra" || decisionplayer == "papel" || decisionplayer == "tijera"){
                return decisionplayer;
            }else{
                alert("Tiene que ser piedra, papel o tijera, dude!... Intenta de nuevo!");
                decisionplayer = null;
            }
        }
    }while(decisionplayer == null);
}

function rondas(ladecisionCPU, ladecisionPlayer){
    if(ladecisionCPU == ladecisionPlayer){
        return 2; // los 2 son empate, osea no puntos
    }else{
        switch(ladecisionCPU){
            case "piedra":
                if(ladecisionPlayer == "papel"){
                    return 1;   //los 1 son gano el jugador
                }else{
                    return 0;   //los 0 son gano la pc
                }
            case "papel":
                if(ladecisionPlayer == "piedra"){
                    return 0;
                }else{
                    return 1;
                }
            case "tijera":
                if(ladecisionPlayer == "papel"){
                    return 0;
                }else{
                    return 1;
                }
            default:
                return 2;
        }
    }
}
function juego(){
    let resultado = 0;
    for(let i = 0; i <= 4; i++){
        resultado = rondas(getComputerChoice(),playerSelection());
        console.log(resultado);
        if(resultado == 0){
            victoriasPC  += 1;
            console.log('Gano la pc');
            // alert("Gano la PC! /nPC:" + victoriasPC + " Player:" + victoriasPlayer);
        }else if(resultado == 1){
            victoriasPlayer += 1;
            console.log('Gano el jugador');
            // alert("Gano el Jugador! /nPC:" + victoriasPC + " Player:" + victoriasPlayer);
        }else{
            console.log('Fue empate');
            // alert("Fue empate xD");
        }
    }
}

let rondastotales = 0;
let victoriasPC = 0;
let victoriasPlayer = 0;
// juego();
console.log("PC: "+victoriasPC+"  Player: "+victoriasPlayer);
if(victoriasPC > victoriasPlayer){
    victoriasPC = 0;
    victoriasPlayer = 0;
    rondastotales += 1;
    console.log("GANO LA PC!, Rondas totales:"+rondastotales);
}else if(victoriasPC < victoriasPlayer){
    victoriasPC = 0;
    victoriasPlayer = 0;
    rondastotales += 1;
    console.log("GANO EL JUGADOR!, Rondas totales:"+rondastotales);
}else{
    victoriasPC = 0;
    victoriasPlayer = 0;
    rondastotales += 1;
    console.log("QUEDARON EMPATADOS!, Rondas totales:"+rondastotales);
}