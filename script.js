const malwareData = [
    {
        id: "wannacry",
        nombre: "WannaCry",
        tipo: "Ransomware",
        descripcion: "WannaCry es un criptogusano que cifra los archivos de los usuarios y exige un pago en Bitcoin. Se propagó globalmente en mayo de 2017 aprovechando EternalBlue, un exploit filtrado de la NSA. Atacaba una vulnerabilidad en el protocolo SMB de Windows, lo que le permitía infectar equipos sin intervención del usuario e instalarse mediante un programa llamado DoublePulsar.",
        imagen: "https://asimily.com/wp-content/uploads/2023/08/The-WannaCry-Ransomware-Legacy-Attack-Asimily-png.png",
        video: "https://www.youtube.com/embed/aAfuNn2URng?si=d4kXgM5wjU7Nk38B"
    },
    {
        id: "iloveyou",
        nombre: "ILOVEYOU",
        tipo: "Gusano (Worm)",
        descripcion: "Uno de los gusanos más destructivos de la historia, liberado en el año 2000. Se propagaba por correo electrónico engañando a las víctimas con el asunto 'ILOVEYOU' y un archivo adjunto VBScript disfrazado de archivo de texto (.txt.vbs). Al abrirse, sobreescribía archivos locales (como imágenes y música) y se enviaba automáticamente a todos los contactos de la libreta de direcciones de Microsoft Outlook del usuario, colapsando servidores a nivel mundial.",
        imagen: "https://hardzone.es/app/uploads-hardzone.es/2024/06/origen-virus-informatico-iloveyou.jpg",
        video: "https://www.youtube.com/embed/8zsRJ89GG6s?si=KCqNRWP7MuvW0_PG"
    },
    {
        id: "darkcomet",
        nombre: "DarkComet",
        tipo: "Control Remoto (RAT)",
        descripcion: "Desarrollado en 2008, DarkComet es un Troyano de Acceso Remoto (RAT) que utiliza una arquitectura de socket inverso para conectar a la víctima con el atacante. Otorga control total y sigiloso sobre el equipo infectado, permitiendo espiar por la cámara web, registrar pulsaciones de teclado (keylogging), realizar capturas de pantalla y robar contraseñas. Fue utilizado activamente en campañas de espionaje gubernamental.",
        imagen: "https://www.redeszone.net/app/uploads-redeszone.net/2021/08/virus_informatico_destacada.jpg", 
        video: "https://www.youtube.com/embed/DLjupVJiU9w?si=mezIDQmWDpoj6Q5O"
    },
    {
        id: "mirai",
        nombre: "Mirai",
        tipo: "Uso de recursos (Botnet)",
        descripcion: "Mirai es un malware especializado en infectar dispositivos del Internet de las Cosas (IoT), como cámaras de seguridad y routers basados en Linux. Escanea la red en busca de puertos Telnet abiertos y obtiene acceso aplicando ataques de fuerza bruta con credenciales de fábrica por defecto (como admin/admin). Al infectarlos, convierte los equipos en una botnet zombi que ejecuta en memoria RAM y se utiliza para lanzar devastadores ataques de denegación de servicio distribuido (DDoS).",
        imagen: "https://www.radware.com/RadwareSite/MediaLibraries/Images/Security/Documents/Threat_Advisories_Attack_Reports/PDF/Radware-ERT-Alert-Mirai-Rapid-Evolution-fig2.jpg",
        video: "https://www.youtube.com/embed/ToO1n6ilFuc?si=uM5rBzpmxdTxGgEN"
    },
    {
        id: "poweliks",
        nombre: "Poweliks",
        tipo: "Ocultamiento (Fileless)",
        descripcion: "Un malware avanzado de tipo 'fileless' (sin archivo) que no deja rastro en el disco duro tradicional. Se instala ocultándose directamente en las claves del Registro de Windows y ejecuta su código malicioso en la memoria RAM. Poweliks a menudo aprovecha herramientas legítimas del sistema operativo, como PowerShell, para mantener su persistencia y fue utilizado principalmente para generar ingresos ilícitos mediante fraudes de clics publicitarios.",
        imagen: "https://integralads.com/wp-content/uploads/2023/06/Poweliks_672x372.png",
        video: "https://www.youtube.com/embed/Elj21uNqVf0?si=XDrjFHPMNU96ttuA"
    },
    {
        id: "coinhive",
        nombre: "CoinHive",
        tipo: "Uso de recursos (Cryptojacking)",
        descripcion: "Surgió en 2017 como un script de JavaScript para monetizar sitios web de forma legítima, pero rápidamente se convirtió en la principal herramienta de cryptojacking. Los atacantes inyectaban este código de forma invisible en sitios web y extensiones de navegador. De esta forma, secuestraban los recursos del procesador (CPU) de los visitantes sin su consentimiento para minar la criptomoneda Monero, provocando lentitud extrema en los equipos afectados.",
        imagen: "https://pbs.twimg.com/media/DT8ov-mXUAAv22j.jpg",
        video: "https://www.youtube.com/embed/PlbPrIVnhEo?si=JO_kO8fpE8XPANQl" 
    },
    {
        id: "poisonivy",
        nombre: "PoisonIvy",
        tipo: "Control Remoto (Backdoor)",
        descripcion: "Es un legendario troyano de puerta trasera (backdoor) que otorga al atacante un control encubierto y total de la máquina infectada. Se distribuye habitualmente mediante correos de suplantación de identidad (phishing) o descargas ocultas. Una vez instalado, permite manipular archivos, instalar malware adicional y utilizar técnicas de sigilo avanzadas para eludir la detección de los antivirus, manteniéndose oculto en la red durante largos periodos.",
        imagen: "https://www.researchgate.net/publication/333634056/figure/fig2/AS:766490257141760@1559756926193/PI-RAT-Poison-Ivy-Remote-Access-Toolkit.jpg",
        video: "https://www.youtube.com/embed/U2Y88kw8WVw?si=5MVF0aPtnLtBOPIp" 
    },
    {
        id: "zeroaccess",
        nombre: "ZeroAccess",
        tipo: "Ocultamiento (Rootkit)",
        descripcion: "Es un sofisticado rootkit y troyano diseñado para sistemas Windows que creó una de las botnets más grandes de la historia. Se destaca por su extrema persistencia y el uso de técnicas de ocultamiento a nivel del sistema operativo. Su objetivo principal era comprometer el equipo para descargar malware adicional, forzando a las computadoras de las víctimas a participar en fraudes masivos de clics y en operaciones de minería de Bitcoin.",
        imagen: "https://www.cybereason.com/hubfs/image8-7.png",
        video: "https://www.youtube.com/embed/v8ThlpeAkFk?si=8TkpuJdxcBfEh8eH" 
    },
    {
        id: "stuxnet",
        nombre: "Stuxnet",
        tipo: "Ocultamiento (Rootkit / Gusano)",
        descripcion: "Considerada la primera ciberarma a nivel de Estado del mundo, descubierta en 2010. Es un gusano informático altamente complejo que incluía un rootkit para evadir la detección y se propagaba incluso en redes aisladas (air-gapped) mediante memorias USB. Fue diseñado específicamente para sabotear los controladores lógicos programables (PLCs) de Siemens, logrando destruir físicamente las centrifugadoras nucleares de las instalaciones de enriquecimiento de uranio en Irán.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHkEdkDAS52a2rnLasQCEWVaTsYy6d6EmWvdp6pJlqqP5p6Uv8Osj7_RG&s=10",
        video: "https://www.youtube.com/embed/FaeP6xoZOXc?si=QYyUHJufyaYcEqLQ" 
    },
    {
        id: "cryptolocker",
        nombre: "CryptoLocker",
        tipo: "Impacto (Ransomware)",
        descripcion: "Este ransomware histórico, surgido en 2013, popularizó los ataques modernos de secuestro de datos. Se distribuía mediante correos con adjuntos engañosos y a través de la botnet Gameover ZeuS. Una vez activo, conectaba con un servidor de comando y control para generar un par de claves RSA de 2048 bits, cifrando los archivos locales y de red de la víctima. Exigía el pago de cientos de dólares en Bitcoin con un límite de tiempo bajo amenaza de borrar los datos.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkkWbQLHbFNLkD95Zy9J5G-XTwxQeuY8McRYC_l4VY6DN60mTDvKqwVdH&s=10",
        video: "https://www.youtube.com/embed/Qbi8TMhVBtI?si=LVd1Lg15U0LcqBRN" 
    },
    {
        id: "petya",
        nombre: "Petya",
        tipo: "Impacto (Ransomware)",
        descripcion: "A diferencia del ransomware tradicional que cifra archivo por archivo, Petya infecta el Registro de Arranque Principal (MBR) y cifra la Tabla Maestra de Archivos (MFT) del disco duro. Esto impide que el sistema operativo Windows pueda siquiera arrancar, mostrando una nota de rescate en la pantalla de inicio. Su variante más letal, NotPetya (2017), utilizó el exploit EternalBlue para propagarse automáticamente y actuó como un 'wiper', destruyendo la información permanentemente en lugar de solo secuestrarla.",
        imagen: "https://www.een.com/wp-content/uploads/2017/07/petya-FI.jpg",
        video: "https://www.youtube.com/embed/PTXtd0qm3t8?si=DXiFXKntZdhRTiv4" 
    },
    {
        id: "zeus",
        nombre: "Zeus",
        tipo: "Uso de recursos (Botnet Bancaria)",
        descripcion: "Descubierto en 2007, es uno de los troyanos bancarios más prolíficos de la historia y se utiliza para robar credenciales financieras mediante técnicas de 'man-in-the-browser'. Captura pulsaciones de teclado e intercepta la información enviada en formularios web antes de que sea cifrada, modificando la apariencia de las páginas bancarias legítimas. La filtración de su código fuente en 2011 permitió la creación de múltiples subvariantes peligrosas.",
        imagen: "https://images.contentstack.io/v3/assets/blt53c99b43892c2378/blt7ebeadd9c25bca7b/69819baa090b8346f474c74d/cybersecurity-101-zeus-malware_(1).jpg",
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
    document.getElementById('modal-video').src = malware.video;
    
    modal.classList.remove('oculto');
}

function cerrarModal() {
    modal.classList.add('oculto');
    // Ya solo pausamos y reiniciamos el video, no hay audio
    document.getElementById('modal-video').src = ""; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

cargarCatalogo();