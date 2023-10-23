let nomeHeroi = ""
let experiencia = 0
let classificacao = ""

nomeHeroi = "Hercules"

for (lutas = 1; lutas < 11; lutas++){
    if (lutas % 2 === 0){
      experiencia += 1000  
    }
}

if (experiencia <= 1000){
    classificacao = "Ferro"
} else if (experiencia > 1000 && experiencia <= 2000){
    classificacao = "Bronze"
} else if (experiencia > 2000 && experiencia <= 5000){
    classificacao = "Prata"
} else if (experiencia > 5000 && experiencia <= 7000){
    classificacao = "Ouro"
} else if (experiencia > 7000 && experiencia <= 8000){
    classificacao = "Platina"
} else if (experiencia > 8000 && experiencia <= 9000){
    classificacao = "Ascendente"
} else if (experiencia > 9000 && experiencia <= 10000){
    classificacao = "Imortal"
} else {
    classificacao = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificacao)