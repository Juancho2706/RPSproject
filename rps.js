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
        resultado = rondas(getComputerChoice(),seleccionPLAYER);
        if(resultado == 0){
            victoriasPC  += 1;
            rondastotales += 1;
            $puntoscomputadora.innerText = victoriasPC;
            document.querySelector('.computadora').appendChild($puntoscomputadora);
            losResultados.innerText = 'Rondas Totales:'+rondastotales;
            quienGano.innerText = 'Punto para la PC';
            document.querySelector('body').appendChild(quienGano);
        }else if(resultado == 1){
            victoriasPlayer += 1;
            rondastotales += 1;
            $puntosplayer.innerText = victoriasPlayer;
            document.querySelector('.jugador').appendChild($puntosplayer);
            losResultados.innerText = 'Rondas Totales:'+rondastotales;
            quienGano.innerText = 'Punto para el Jugador';
            document.querySelector('body').appendChild(quienGano);
        }else{
            rondastotales += 1;
            losResultados.innerText = 'Rondas Totales:'+rondastotales;
            quienGano.innerText = 'Fue empate uwu, no hay puntos!';
            document.querySelector('body').appendChild(quienGano);
        }
}
function seterminaeljuego(){
    if(victoriasPC == 5){
        quienGano.innerText = 'GANO LA PC';
        victoriasPC = 0;
        victoriasPlayer = 0;
        $puntosplayer.innerText = '0';
        $puntoscomputadora.innerText = '0';
    }else if(victoriasPlayer == 5){
        quienGano.innerText = 'GANO EL JUGADOR';
        victoriasPC = 0;
        victoriasPlayer = 0;
        $puntosplayer.innerText = '0';
        $puntoscomputadora.innerText = '0';
    }
}
let rondastotales = 0,
victoriasPC = 0,
victoriasPlayer = 0;

const elbotonselectorPiedra = document.querySelector(".piedra"),
elbotonselectorPapel = document.querySelector(".papel"),
elbotonselectorTijera = document.querySelector(".tijera"),
losResultados = document.querySelector(".resultados"),
quienGano = document.createElement('p'),
$puntosplayer = document.createElement('p')
$puntoscomputadora = document.createElement('p');
$puntosplayer.innerText = '0';
$puntoscomputadora.innerText = '0';
document.querySelector('.computadora').appendChild($puntoscomputadora);
document.querySelector('.jugador').appendChild($puntosplayer);
quienGano.style.color = "white";
quienGano.textContent = "?";

elbotonselectorPiedra.addEventListener("click", function(e){
    juego(playerSelection("piedra"));
    seterminaeljuego();
});
elbotonselectorPapel.addEventListener("click", function(e){
    juego(playerSelection("papel"));
    seterminaeljuego();
});
elbotonselectorTijera.addEventListener("click", function(e){
    juego(playerSelection("tijera"));
    seterminaeljuego();
});

losResultados.style.color = "white";
losResultados.textContent = 'Rondas Totales:'+rondastotales;