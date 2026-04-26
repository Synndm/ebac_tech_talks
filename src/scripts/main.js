import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    once: false
});

const dataDoEvento = new Date('Dec 12, 2026 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();
const diaEmMs = 1000 * 60 * 60 * 24;
const horaEmMs = 1000 * 60 * 60;
const minutoEmMs = 1000 * 60;

const constaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutoAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoAteOEvento}m ${segundosAteOevento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(constaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento já expirou!';
    }

}, 1000);