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
    decisionplayer = prompt("Coloca tu decision: (piedra, papel o tijera)");
    decisionplayer = decisionplayer.toLowerCase();
    if(decisionplayer == "piedra" || decisionplayer == "papel" || decisionplayer == "tijera"){
        return decisionplayer;
    }else{
        alert("Tiene que ser piedra, papel o tijera, dude!...");
    }
}

function rondas(ladecisionCPU, ladecisionPlayer){
    if(ladecisionCPU == ladecisionPlayer){
        return "empate";
    }else{
        switch(ladecisionCPU){
            case "piedra":
                if(ladecisionPlayer == "papel"){
                    return 1;   //los 1 son gano el jugador
                }else{
                    return 0;   //los 0 son gano la pc
                }
                break;
            case "papel":
                
        }
    }
}

console.log(getComputerChoice(), playerSelection());