const malwareData = [
    {
        id: "wannacry",
        nombre: "WannaCry",
        tipo: "Ransomware",
        anio: "2017",
        propagacion: "Explotación de vulnerabilidad EternalBlue (SMBv1) de Windows sin intervención del usuario.",
        objetivo: "Extorsión financiera masiva mediante el secuestro de datos críticos.",
        funcionamiento: "Utiliza el exploit DoublePulsar para instalarse y cifra los archivos del disco duro utilizando cifrado asimétrico RSA-2048 y AES-128, bloqueando el acceso por completo.",
        consecuencias: "Paralización de infraestructuras críticas a nivel global, incluyendo hospitales del NHS en Reino Unido, telecomunicaciones y redes logísticas.",
        prevencion: "Aplicar parches de seguridad (MS17-010), deshabilitar el protocolo SMBv1 obsoleto y mantener copias de seguridad aisladas.",
        imagen: "https://asimily.com/wp-content/uploads/2023/08/The-WannaCry-Ransomware-Legacy-Attack-Asimily-png.png",
        video: "https://www.youtube.com/embed/aAfuNn2URng?si=d4kXgM5wjU7Nk38B",
        caracteristicas: ["Criptogusano", "EternalBlue", "Cifrado de archivos", "Rescate en Bitcoin"]
    },
    {
        id: "iloveyou",
        nombre: "ILOVEYOU",
        tipo: "Gusano (Worm)",
        anio: "2000",
        propagacion: "Correo electrónico con ingeniería social (adjunto malicioso .txt.vbs).",
        objetivo: "Propagación masiva y destrucción indiscriminada de archivos locales.",
        funcionamiento: "Al ejecutar el script VBScript, el gusano sobreescribe archivos multimedia e imágenes, y utiliza la API de Microsoft Outlook para enviarse a toda la libreta de contactos.",
        consecuencias: "Colapso de servidores de correo electrónico a nivel mundial y pérdida masiva de datos personales corporativos con daños estimados en miles de millones de dólares.",
        prevencion: "Bloqueo de extensiones ejecutables (.vbs, .exe) en pasarelas de correo y capacitación anti-phishing.",
        imagen: "https://hardzone.es/app/uploads-hardzone.es/2024/06/origen-virus-informatico-iloveyou.jpg",
        video: "https://www.youtube.com/embed/8zsRJ89GG6s?si=KCqNRWP7MuvW0_PG",
        caracteristicas: ["Ingeniería Social", "VBScript", "Propagación masiva"]
    },
    {
        id: "darkcomet",
        nombre: "DarkComet",
        tipo: "Control Remoto (RAT)",
        anio: "2008",
        propagacion: "Descargas engañosas (Drive-by downloads) y archivos adjuntos maliciosos.",
        objetivo: "Espionaje y control total y sigiloso sobre el equipo de la víctima.",
        funcionamiento: "Establece una conexión de socket inverso desde el equipo infectado hacia el servidor del atacante, evadiendo cortafuegos básicos al iniciar la comunicación desde adentro.",
        consecuencias: "Robo de credenciales, violación severa de la privacidad (activación de webcam/micrófono) y uso del equipo para lanzar ataques secundarios.",
        prevencion: "Uso de firewalls con inspección profunda de paquetes (DPI) y análisis de comportamiento de red (EDR).",
        imagen: "https://www.redeszone.net/app/uploads-redeszone.net/2021/08/virus_informatico_destacada.jpg", 
        video: "https://www.youtube.com/embed/DLjupVJiU9w?si=mezIDQmWDpoj6Q5O",
        caracteristicas: ["Keylogging", "Capturas de pantalla", "Webcam", "Robo de información"]
    },
    {
        id: "mirai",
        nombre: "Mirai",
        tipo: "Uso de recursos (Botnet)",
        anio: "2016",
        propagacion: "Escaneo autónomo de red buscando puertos Telnet (23) expuestos a Internet.",
        objetivo: "Secuestrar hardware para crear una red zombi masiva capaz de lanzar ataques DDoS.",
        funcionamiento: "Accede a dispositivos IoT (cámaras, routers) realizando ataques de fuerza bruta de diccionario con credenciales por defecto (ej. admin/1234) y se aloja en la memoria RAM.",
        consecuencias: "Ataques de Denegación de Servicio Distribuido (DDoS) históricos que lograron tumbar infraestructuras clave como el proveedor de DNS Dyn (afectando a Twitter, Netflix, etc.).",
        prevencion: "Cambiar contraseñas predeterminadas de fábrica en dispositivos IoT, deshabilitar Telnet y aislar hardware inteligente en VLANs separadas.",
        imagen: "https://www.radware.com/RadwareSite/MediaLibraries/Images/Security/Documents/Threat_Advisories_Attack_Reports/PDF/Radware-ERT-Alert-Mirai-Rapid-Evolution-fig2.jpg",
        video: "https://www.youtube.com/embed/ToO1n6ilFuc?si=uM5rBzpmxdTxGgEN",
        caracteristicas: ["IoT", "Telnet", "Botnet", "DDoS", "Credenciales por defecto"]
    },
    {
        id: "poweliks",
        nombre: "Poweliks",
        tipo: "Ocultamiento (Fileless)",
        anio: "2014",
        propagacion: "Campañas de spam y exploit kits alojados en sitios web comprometidos.",
        objetivo: "Generar ingresos fraudulentos mediante el robo de clics publicitarios sin ser detectado.",
        funcionamiento: "Se ejecuta enteramente en la memoria RAM y guarda su código cifrado directamente en las subclaves del Registro de Windows, utilizando PowerShell para mantener persistencia sin archivos físicos.",
        consecuencias: "Consumo excesivo de ancho de banda y CPU, y dificultad extrema para ser detectado y eliminado por software antivirus tradicional basado en firmas.",
        prevencion: "Restringir la ejecución de scripts de PowerShell (ExecutionPolicy), usar sistemas de prevención de intrusiones (HIPS) y monitorear anomalías en el Registro.",
        imagen: "https://integralads.com/wp-content/uploads/2023/06/Poweliks_672x372.png",
        video: "https://www.youtube.com/embed/Elj21uNqVf0?si=XDrjFHPMNU96ttuA",
        caracteristicas: ["Fileless", "Ocultamiento en Registro", "Ejecución en RAM", "Fraude publicitario"]
    },
    {
        id: "coinhive",
        nombre: "CoinHive",
        tipo: "Uso de recursos (Cryptojacking)",
        anio: "2017",
        propagacion: "Inyección silenciosa de código en sitios web legítimos y extensiones de navegador.",
        objetivo: "Minería de criptomonedas (Monero) utilizando recursos de terceros.",
        funcionamiento: "Ejecuta un script JavaScript/WebAssembly directamente en el navegador del visitante. Al abrir la página infectada, el script comienza a resolver algoritmos criptográficos para minar Monero.",
        consecuencias: "Ralentización severa de las computadoras de los visitantes, desgaste prematuro del hardware por sobrecalentamiento y aumento en la factura eléctrica.",
        prevencion: "Uso de extensiones bloqueadoras de scripts (como NoScript o bloqueadores de anuncios) e implementación de Content Security Policy (CSP) en servidores web.",
        imagen: "https://pbs.twimg.com/media/DT8ov-mXUAAv22j.jpg",
        video: "https://www.youtube.com/embed/PlbPrIVnhEo?si=JO_kO8fpE8XPANQl",
        caracteristicas: ["Cryptojacking", "Minería web", "Monero", "Inyección JavaScript"]
    },
    {
        id: "poisonivy",
        nombre: "PoisonIvy",
        tipo: "Control Remoto (Backdoor)",
        anio: "2005",
        propagacion: "Spear-phishing (correos dirigidos) explotando vulnerabilidades en software común.",
        objetivo: "Crear una puerta trasera para infiltrarse en redes corporativas a largo plazo (APT).",
        funcionamiento: "Inyecta su hilo de ejecución en procesos legítimos de Windows (como explorer.exe o svchost.exe) para ocultar su actividad de red y sus manipulaciones de sistema.",
        consecuencias: "Pérdida masiva de propiedad intelectual corporativa, robo de bases de datos de clientes y compromiso prolongado de la seguridad perimetral.",
        prevencion: "Segmentación estricta de redes, sistemas de detección de intrusos (IDS) y listas blancas de aplicaciones (Application Whitelisting).",
        imagen: "https://www.researchgate.net/publication/333634056/figure/fig2/AS:766490257141760@1559756926193/PI-RAT-Poison-Ivy-Remote-Access-Toolkit.jpg",
        video: "https://www.youtube.com/embed/U2Y88kw8WVw?si=5MVF0aPtnLtBOPIp",
        caracteristicas: ["Backdoor", "Control total encubierto", "APT", "Evasión de antivirus"]
    },
    {
        id: "zeroaccess",
        nombre: "ZeroAccess",
        tipo: "Ocultamiento (Rootkit)",
        anio: "2011",
        propagacion: "Descargas piratas (cracks/keygens) e infecciones por exploit kits web.",
        objetivo: "Fraude de clics (click-fraud) y minería de Bitcoin mediante una botnet P2P.",
        funcionamiento: "Modifica el kernel de Windows o sobrescribe drivers críticos del sistema operativo para ocultar por completo sus archivos, procesos y conexiones de red a los administradores.",
        consecuencias: "Participación forzada en redes de cibercrimen y extrema dificultad para desinfectar el sistema, a menudo requiriendo un formateo completo del disco duro.",
        prevencion: "Evitar software pirata, habilitar Secure Boot en la BIOS/UEFI para evitar modificaciones a bajo nivel en el arranque y usar escáneres anti-rootkit dedicados.",
        imagen: "https://www.cybereason.com/hubfs/image8-7.png",
        video: "https://www.youtube.com/embed/v8ThlpeAkFk?si=8TkpuJdxcBfEh8eH",
        caracteristicas: ["Rootkit", "Botnet masiva", "P2P", "Modificación del Kernel"]
    },
    {
        id: "stuxnet",
        nombre: "Stuxnet",
        tipo: "Ocultamiento (Rootkit / Gusano)",
        anio: "2010",
        propagacion: "Medios extraíbles (memorias USB) diseñados para saltar redes aisladas (air-gapped).",
        objetivo: "Sabotaje físico de infraestructura crítica industrial (enriquecimiento de uranio iraní).",
        funcionamiento: "Utilizaba cuatro exploits de 'día cero'. Se ocultaba con un rootkit y reprogramaba silenciosamente los Controladores Lógicos Programables (PLCs) Siemens Step7, alterando la velocidad de los motores industriales.",
        consecuencias: "Destrucción física de más de 1,000 centrifugadoras nucleares al hacerlas girar fuera de control mientras enviaba métricas falsas de 'normalidad' a los monitores de los ingenieros.",
        prevencion: "Prohibición estricta de dispositivos USB no autorizados, endurecimiento de redes OT (Operational Technology) y auditoría constante del código de PLCs.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHkEdkDAS52a2rnLasQCEWVaTsYy6d6EmWvdp6pJlqqP5p6Uv8Osj7_RG&s=10",
        video: "https://www.youtube.com/embed/FaeP6xoZOXc?si=QYyUHJufyaYcEqLQ",
        caracteristicas: ["Ciberarma", "Sabotaje físico", "Air-gap", "Ataque a PLCs Siemens"]
    },
    {
        id: "cryptolocker",
        nombre: "CryptoLocker",
        tipo: "Impacto (Ransomware)",
        anio: "2013",
        propagacion: "Adjuntos PDF o ZIP engañosos en correos electrónicos y a través de la botnet ZeuS.",
        objetivo: "Lucro directo mediante la extorsión a usuarios y pequeñas empresas.",
        funcionamiento: "Se contacta con un servidor de Comando y Control (C2) alojado en la red Tor para generar un par de claves públicas/privadas. Cifra documentos (Office, fotos) y borra las copias instantáneas de volumen (Shadow Copies).",
        consecuencias: "Pérdida irrecuperable de información si no se contaba con respaldos externos, estableciendo el modelo de negocio moderno del cibercrimen de secuestro.",
        prevencion: "Implementar copias de seguridad bajo la regla 3-2-1 (3 copias, 2 soportes distintos, 1 offline) y filtrado de tráfico de red saliente hacia dominios sospechosos.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkkWbQLHbFNLkD95Zy9J5G-XTwxQeuY8McRYC_l4VY6DN60mTDvKqwVdH&s=10",
        video: "https://www.youtube.com/embed/Qbi8TMhVBtI?si=LVd1Lg15U0LcqBRN",
        caracteristicas: ["Ransomware", "Cifrado RSA-2048", "Borrado de Shadow Copies"]
    },
    {
        id: "petya",
        nombre: "Petya",
        tipo: "Impacto (Ransomware)",
        anio: "2016",
        propagacion: "Correos electrónicos maliciosos (falsos CVs en Dropbox) que requerían permisos de administrador.",
        objetivo: "Secuestrar el disco duro completo, a diferencia de archivos individuales.",
        funcionamiento: "Sobreescribe el Registro de Arranque Principal (MBR) provocando un pantallazo azul. Al reiniciar, simula ser un escáner de disco (CHKDSK) mientras cifra la Tabla Maestra de Archivos (MFT) impidiendo iniciar Windows.",
        consecuencias: "Equipos completamente inutilizables de manera instantánea. Su variante destructiva NotPetya causó más de 10 mil millones de dólares en pérdidas corporativas mundiales.",
        prevencion: "Restringir privilegios de administrador a usuarios estándar (Principio de Menor Privilegio) y protección a nivel de arranque del sistema (Secure Boot).",
        imagen: "https://www.een.com/wp-content/uploads/2017/07/petya-FI.jpg",
        video: "https://www.youtube.com/embed/PTXtd0qm3t8?si=DXiFXKntZdhRTiv4",
        caracteristicas: ["Infección MBR", "Cifrado MFT", "Bloqueo de arranque OS"]
    },
    {
        id: "zeus",
        nombre: "Zeus",
        tipo: "Uso de recursos (Botnet Bancaria)",
        anio: "2007",
        propagacion: "Campañas masivas de Phishing e infecciones Drive-by download.",
        objetivo: "Robo de credenciales bancarias y fraude financiero automatizado.",
        funcionamiento: "Utiliza técnicas 'Man-in-the-Browser' (MitB). Intercepta y modifica en tiempo real las páginas web bancarias en el navegador de la víctima, insertando campos falsos para robar pines y tarjetas antes del cifrado HTTPS.",
        consecuencias: "Millones de dólares extraídos ilícitamente de cuentas personales y corporativas. Su código fuente filtrado dio origen a troyanos modernos como TrickBot.",
        prevencion: "Uso de Autenticación Multifactor (MFA/2FA), validación de transacciones fuera de banda (confirmación por móvil) y software anti-keylogger.",
        imagen: "https://images.contentstack.io/v3/assets/blt53c99b43892c2378/blt7ebeadd9c25bca7b/69819baa090b8346f474c74d/cybersecurity-101-zeus-malware_(1).jpg",
        video: "https://www.youtube.com/embed/mWtlc7mfA2I?si=1g3HxA1A3p2reL7y",
        caracteristicas: ["Troyano bancario", "Man-in-the-browser", "Keylogging"]
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
    // Títulos e Imagen
    document.getElementById('modal-title').innerText = malware.nombre;
    document.getElementById('modal-type').innerText = malware.tipo;
    document.getElementById('modal-img').src = malware.imagen;
    
    // Inyección de la nueva información estructurada
    document.getElementById('modal-anio').innerText = malware.anio;
    document.getElementById('modal-propagacion').innerText = malware.propagacion;
    document.getElementById('modal-objetivo').innerText = malware.objetivo;
    document.getElementById('modal-funcionamiento').innerText = malware.funcionamiento;
    document.getElementById('modal-consecuencias').innerText = malware.consecuencias;
    document.getElementById('modal-prevencion').innerText = malware.prevencion;
    
    // Video
    document.getElementById('modal-video').src = malware.video;
    
    // Generación de etiquetas (tags)
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = ''; 
    
    malware.caracteristicas.forEach(caracteristica => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.innerText = caracteristica;
        tagsContainer.appendChild(span);
    });
    
    modal.classList.remove('oculto');
}

function cerrarModal() {
    modal.classList.add('oculto');
    document.getElementById('modal-video').src = ""; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        cerrarModal();
    }
}

cargarCatalogo();