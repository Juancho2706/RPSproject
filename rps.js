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
function juego(seleccionPLAYER){
    let resultado = 0;
        resultado = rondas(getComputerChoice(),seleccionPLAYER);
        console.log(resultado);
        if(resultado == 0){
            victoriasPC  += 1;
            rondastotales += 1;
            losResultados.textContent = 'Rondas Totales:'+rondastotales;
            quienGano.textContent = 'Gano la pc';
        }else if(resultado == 1){
            victoriasPlayer += 1;
            rondastotales += 1;
            losResultados.textContent = 'Rondas Totales:'+rondastotales;
            quienGano.textContent = 'Gano el Jugador';
        }else{
            rondastotales += 1;
            losResultados.textContent = 'Rondas Totales:'+rondastotales;
            quienGano.textContent = 'Fue empate uwu';
        }
}

let rondastotales = 0,
victoriasPC = 0,
victoriasPlayer = 0;

const elbotonselectorPiedra = document.querySelector(".piedra"),
elbotonselectorPapel = document.querySelector(".papel"),
elbotonselectorTijera = document.querySelector(".tijera"),
losResultados = document.querySelector(".resultados"),
quienGano = document.createElement('p');
quienGano.style.color = "white";
quienGano.textContent = "?";

elbotonselectorPiedra.addEventListener("click", function(e){
    juego(playerSelection("piedra"));
});
elbotonselectorPapel.addEventListener("click", function(e){
    juego(playerSelection("papel"));
});
elbotonselectorTijera.addEventListener("click", function(e){
    juego(playerSelection("tijera"));
});

losResultados.style.color = "white";
losResultados.textContent = 'Rondas Totales:'+rondastotales;
losResultados.appendChild(quienGano);
