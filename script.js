// AQUI ESTÁ LA "BASE DE DATOS". Solo tienen que llenar esto.
const malwareData = [
    {
        id: "wannacry",
        nombre: "WannaCry",
        tipo: "Ransomware",
        descripcion: "WannaCry es un criptogusano que cifra los archivos del disco duro de los usuarios y exige un pago en Bitcoin para recuperar el acceso. Aprovechó la vulnerabilidad EternalBlue en sistemas Windows.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Wana_Decrypt0r_screenshot.png/800px-Wana_Decrypt0r_screenshot.png", // Puedes poner una URL o ruta local ej: "img/wannacry.jpg"
        audio: "audio/explicacion_wannacry.mp3", // Graben un audio corto y pónganlo en una carpeta "audio"
        video: "https://www.youtube.com/embed/1B1wK-B_sT0" // IMPORTANTE: Usar el enlace de "embed" de YouTube, no el link normal.
    },
    {
        id: "iloveyou",
        nombre: "ILOVEYOU",
        tipo: "Gusano (Worm)",
        descripcion: "Uno de los primeros y más destructivos gusanos informáticos. Se propagaba por correo electrónico con el asunto 'ILOVEYOU' y un archivo adjunto que, al abrirse, sobreescribía archivos y se reenviaba a los contactos de la víctima.",
        imagen: "https://upload.wikimedia.org/wikipedia/en/2/23/Iloveyou_source_code.png",
        audio: "audio/iloveyou.mp3",
        video: "https://www.youtube.com/embed/5U2zBv0rYVE"
    },
    // COPIEN Y PEGUEN EL BLOQUE DE ARRIBA PARA AGREGAR MÁS MALWARES
];

// Función para generar las tarjetas al cargar la página
function cargarCatalogo() {
    const contenedor = document.getElementById('catalogo-grid');
    
    malwareData.forEach(malware => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';
        tarjeta.innerHTML = `
            <h3>${malware.nombre}</h3>
            <p class="tipo">${malware.tipo}</p>
            <p>Haz clic para ver más...</p>
        `;
        tarjeta.onclick = () => abrirModal(malware);
        contenedor.appendChild(tarjeta);
    });
}

// Funciones para el Modal
const modal = document.getElementById('modal');

function abrirModal(malware) {
    document.getElementById('modal-title').innerText = malware.nombre;
    document.getElementById('modal-type').innerText = malware.tipo;
    document.getElementById('modal-desc').innerText = malware.descripcion;
    document.getElementById('modal-img').src = malware.imagen;
    
    // Cargar multimedia
    const reproductorAudio = document.getElementById('modal-audio');
    reproductorAudio.src = malware.audio;
    reproductorAudio.load(); // Recarga el audio nuevo
    
    document.getElementById('modal-video').src = malware.video;
    
    modal.classList.remove('oculto');
}

function cerrarModal() {
    modal.classList.add('oculto');
    // Pausar audio y video al cerrar
    document.getElementById('modal-audio').pause();
    document.getElementById('modal-video').src = ""; 
}

// Cerrar el modal si hacen clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

// Iniciar
cargarCatalogo();