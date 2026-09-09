const malwareData = [
    {
        id: "wannacry",
        nombre: "WannaCry",
        tipo: "Ransomware",
        descripcion: "WannaCry es un criptogusano que cifra los archivos del disco duro de los usuarios y exige un pago en Bitcoin para recuperar el acceso. Aprovechó la vulnerabilidad EternalBlue en sistemas Windows.",
        imagen: "https://asimily.com/wp-content/uploads/2023/08/The-WannaCry-Ransomware-Legacy-Attack-Asimily-png.png",
        audio: "audio/explicacion_wannacry.mp3",
        video: "https://www.youtube.com/embed/aAfuNn2URng?si=d4kXgM5wjU7Nk38B"
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
    {
        id: "darkcomet",
        nombre: "DarkComet",
        tipo: "Control Remoto (RAT)",
        descripcion: "DarkComet es un Troyano de Acceso Remoto (RAT) que otorga al atacante control total sobre el equipo infectado. Permite espiar por la cámara web, escuchar por el micrófono, registrar pulsaciones de teclado y robar contraseñas de forma silenciosa.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Spyware_software.jpg/800px-Spyware_software.jpg", 
        audio: "audio/darkcomet.mp3", 
        video: "https://www.youtube.com/embed/M_hQp0pYnTc"
    },
    {
        id: "mirai",
        nombre: "Mirai",
        tipo: "Uso de recursos (Botnet)",
        descripcion: "Mirai es un malware que infecta dispositivos del 'Internet de las Cosas' (IoT) como cámaras y routers, convirtiéndolos en una red zombi (botnet). En 2016, esta red se usó para lanzar un ataque DDoS masivo que tumbó grandes plataformas de internet.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Mirai_botnet_map.svg/800px-Mirai_botnet_map.svg.png",
        audio: "audio/mirai.mp3",
        video: "https://www.youtube.com/embed/xlE7oX8gE9I"
    },
    {
        id: "poweliks",
        nombre: "Poweliks",
        tipo: "Ocultamiento (Fileless)",
        descripcion: "Poweliks es un malware 'sin archivo' (fileless). A diferencia de los virus tradicionales, no guarda archivos en el disco duro, sino que se oculta directamente en el Registro de Windows y se ejecuta en la memoria RAM, volviéndolo casi invisible para muchos antivirus.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012.svg/800px-Windows_logo_-_2012.svg.png",
        audio: "audio/poweliks.mp3",
        video: "https://www.youtube.com/embed/1B1wK-B_sT0"
    }
];

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

const modal = document.getElementById('modal');

function abrirModal(malware) {
    document.getElementById('modal-title').innerText = malware.nombre;
    document.getElementById('modal-type').innerText = malware.tipo;
    document.getElementById('modal-desc').innerText = malware.descripcion;
    document.getElementById('modal-img').src = malware.imagen;
    
    const reproductorAudio = document.getElementById('modal-audio');
    reproductorAudio.src = malware.audio;
    reproductorAudio.load(); 
    
    document.getElementById('modal-video').src = malware.video;
    
    modal.classList.remove('oculto');
}

function cerrarModal() {
    modal.classList.add('oculto');
    document.getElementById('modal-audio').pause();
    document.getElementById('modal-video').src = ""; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

cargarCatalogo();