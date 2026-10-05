// ==========================================
// 1. CONTAGEM REGRESSIVA PARA OS 6 MESES
// ==========================================
// Data dos 6 meses: 11 de Outubro de 2026 às 18:00:00 (Mês 9 = Outubro no JS)
const dataSurpresa = new Date(2026, 9, 11, 18, 0, 0); 

function atualizarContador() {
    const agora = new Date();
    const diferenca = dataSurpresa - agora; // Calcula quanto tempo FALTA até a data

    // Se já passou ou chegou a hora exata da comemoração
    if (diferenca <= 0) {
        document.getElementById("dias").innerText = "0";
        document.getElementById("horas").innerText = "0";
        document.getElementById("minutos").innerText = "0";
        document.getElementById("segundos").innerText = "0";
        return;
    }

    // Conversão de milissegundos para tempo restante
    const segundosTotais = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotais / (3600 * 24));
    const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = Math.floor(segundosTotais % 60);

    // Atualiza os números na tela
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
}

// Atualiza a contagem regressiva a cada 1 segundo
setInterval(atualizarContador, 1000);
atualizarContador();


// ==========================================
// 2. MÚSICA DE FUNDO EM LOOP (2:32 até 3:35)
// ==========================================
const tempoInicio = 152; // 2 min e 32 seg em segundos
const tempoFim = 215;    // 3 min e 35 seg em segundos

function toggleMusica() {
    const musica = document.getElementById("musica");
    const btn = document.getElementById("btn-musica");

    if (musica.paused) {
        // Se a música estiver fora do trecho selecionado, ajusta para 2:32
        if (musica.currentTime < tempoInicio || musica.currentTime >= tempoFim) {
            musica.currentTime = tempoInicio;
        }
        musica.play();
        btn.innerText = "⏸️ Pausar Trilha Sonora";
    } else {
        musica.pause();
        btn.innerText = "🎵 Ouvir Trilha Sonora";
    }
}

// Monitora o tempo da música para reiniciar o trecho em loop contínuo
const musicaElemento = document.getElementById("musica");
if (musicaElemento) {
    musicaElemento.addEventListener("timeupdate", function() {
        if (musicaElemento.currentTime >= tempoFim) {
            musicaElemento.currentTime = tempoInicio; // Volta instantaneamente para 2:32
            musicaElemento.play();
        }
    });
}