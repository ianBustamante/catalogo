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
        descripcion: "Uno de los primeros y más destructivos gusanos informáticos. Se propagaba por correo electrónico con el asunto 'ILOVEYOU' y un archivo adjunto que, al abrirse, sobreescribía archivos y se reenviaba a los contactos.",
        imagen: "https://hardzone.es/app/uploads-hardzone.es/2024/06/origen-virus-informatico-iloveyou.jpg",
        audio: "audio/iloveyou.mp3",
        video: "https://www.youtube.com/embed/8zsRJ89GG6s?si=KCqNRWP7MuvW0_PG"
    },
    {
        id: "darkcomet",
        nombre: "DarkComet",
        tipo: "Control Remoto (RAT)",
        descripcion: "DarkComet es un Troyano de Acceso Remoto (RAT) que otorga al atacante control total sobre el equipo infectado. Permite espiar por la cámara web, registrar pulsaciones de teclado y robar contraseñas de forma silenciosa.",
        imagen: "https://www.redeszone.net/app/uploads-redeszone.net/2021/08/virus_informatico_destacada.jpg", 
        audio: "audio/darkcomet.mp3", 
        video: "https://www.youtube.com/embed/DLjupVJiU9w?si=mezIDQmWDpoj6Q5O"
    },
    {
        id: "mirai",
        nombre: "Mirai",
        tipo: "Uso de recursos (Botnet)",
        descripcion: "Mirai es un malware que infecta dispositivos del 'Internet de las Cosas' (IoT) como cámaras y routers, convirtiéndolos en una red zombi. En 2016, esta botnet lanzó un ataque DDoS masivo que tumbó grandes plataformas.",
        imagen: "https://www.radware.com/RadwareSite/MediaLibraries/Images/Security/Documents/Threat_Advisories_Attack_Reports/PDF/Radware-ERT-Alert-Mirai-Rapid-Evolution-fig2.jpg",
        audio: "audio/mirai.mp3",
        video: "https://www.youtube.com/embed/ToO1n6ilFuc?si=uM5rBzpmxdTxGgEN"
    },
    {
        id: "poweliks",
        nombre: "Poweliks",
        tipo: "Ocultamiento (Fileless)",
        descripcion: "Poweliks es un malware 'sin archivo' (fileless). No guarda archivos en el disco duro, sino que se oculta directamente en el Registro de Windows y se ejecuta en la memoria RAM, volviéndolo casi invisible para muchos antivirus.",
        imagen: "https://integralads.com/wp-content/uploads/2023/06/Poweliks_672x372.png",
        audio: "audio/poweliks.mp3",
        video: "https://www.youtube.com/embed/Elj21uNqVf0?si=XDrjFHPMNU96ttuA"
    },
    {
        id: "coinhive",
        nombre: "CoinHive",
        tipo: "Uso de recursos (Cryptojacking)",
        descripcion: "Comenzó como un servicio legítimo pero se convirtió en una infame herramienta de cryptojacking. Inyectaba código en sitios web para minar la criptomoneda Monero usando el procesador (CPU) de los visitantes sin su consentimiento.",
        imagen: "https://pbs.twimg.com/media/DT8ov-mXUAAv22j.jpg",
        audio: "audio/coinhive.mp3",
        video: "https://www.youtube.com/embed/PlbPrIVnhEo?si=JO_kO8fpE8XPANQl" // RECUERDA CAMBIAR ESTE ENLACE
    },
    {
        id: "poisonivy",
        nombre: "PoisonIvy",
        tipo: "Control Remoto (Backdoor)",
        descripcion: "PoisonIvy es un troyano de puerta trasera (backdoor) legendario. Permite a los atacantes tomar el control completo y sigiloso de la máquina infectada, manipular archivos y capturar el tráfico de red de la víctima.",
        imagen: "https://www.researchgate.net/publication/333634056/figure/fig2/AS:766490257141760@1559756926193/PI-RAT-Poison-Ivy-Remote-Access-Toolkit.jpg",
        audio: "audio/poisonivy.mp3",
        video: "https://www.youtube.com/embed/U2Y88kw8WVw?si=5MVF0aPtnLtBOPIp" 
    },
    {
        id: "zeroaccess",
        nombre: "ZeroAccess",
        tipo: "Ocultamiento (Rootkit)",
        descripcion: "Un rootkit diseñado para permanecer indetectable en el sistema operativo. Su objetivo principal es descargar malware adicional y obligar a la computadora a participar en una botnet para fraude de clics.",
        imagen: "https://www.cybereason.com/hubfs/image8-7.png",
        audio: "audio/zeroaccess.mp3",
        video: "https://www.youtube.com/embed/v8ThlpeAkFk?si=8TkpuJdxcBfEh8eH" // RECUERDA CAMBIAR ESTE ENLACE
    },
    {
        id: "stuxnet",
        nombre: "Stuxnet",
        tipo: "Ocultamiento (Rootkit / Gusano)",
        descripcion: "Considerada la primera ciberarma del mundo. Es un malware altamente complejo que incluía un rootkit para ocultarse y fue diseñado específicamente para sabotear las instalaciones nucleares de Irán.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHkEdkDAS52a2rnLasQCEWVaTsYy6d6EmWvdp6pJlqqP5p6Uv8Osj7_RG&s=10",
        audio: "audio/stuxnet.mp3",
        video: "https://www.youtube.com/embed/FaeP6xoZOXc?si=QYyUHJufyaYcEqLQ" // RECUERDA CAMBIAR ESTE ENLACE
    },
    {
        id: "cryptolocker",
        nombre: "CryptoLocker",
        tipo: "Impacto (Ransomware)",
        descripcion: "CryptoLocker es un ransomware histórico que popularizó el secuestro de datos modernos. Se distribuía a través de correos electrónicos infectados y cifraba archivos locales y en unidades de red.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkkWbQLHbFNLkD95Zy9J5G-XTwxQeuY8McRYC_l4VY6DN60mTDvKqwVdH&s=10",
        audio: "audio/cryptolocker.mp3",
        video: "https://www.youtube.com/embed/Qbi8TMhVBtI?si=LVd1Lg15U0LcqBRN" 
    },
    {
        id: "petya",
        nombre: "Petya",
        tipo: "Impacto (Ransomware)",
        descripcion: "A diferencia de otros ransomware que cifran archivo por archivo, Petya reinicia la computadora y cifra la tabla maestra de archivos (MFT) del disco duro por completo, impidiendo que el sistema operativo siquiera arranque.",
        imagen: "https://www.een.com/wp-content/uploads/2017/07/petya-FI.jpg",
        audio: "audio/petya.mp3",
        video: "https://www.youtube.com/embed/PTXtd0qm3t8?si=DXiFXKntZdhRTiv4" 
    },
    {
        id: "zeus",
        nombre: "Zeus",
        tipo: "Uso de recursos (Botnet Bancaria)",
        descripcion: "Zeus es uno de los troyanos bancarios más exitosos de la historia. Crea una botnet masiva diseñada principalmente para robar credenciales bancarias mediante el registro de pulsaciones de teclado (keylogging).",
        imagen: "https://images.contentstack.io/v3/assets/blt53c99b43892c2378/blt7ebeadd9c25bca7b/69819baa090b8346f474c74d/cybersecurity-101-zeus-malware_(1).jpg",
        audio: "audio/zeus.mp3",
        video: "https://www.youtube.com/embed/mWtlc7mfA2I?si=1g3HxA1A3p2reL7y" 
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