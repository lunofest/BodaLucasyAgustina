AOS.init();

//   --------------------------musica------------------------------




// Obtener referencias a los elementos
const audio = document.getElementById('audio');
const playPauseIcon = document.getElementById('playPause');
const rewindIcon = document.getElementById('rewind');
const forwardIcon = document.getElementById('forward');

// Función para alternar entre play y pause
playPauseIcon.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playPauseIcon.classList.remove('fa-pause');
        playPauseIcon.classList.add('fa-play');
    }
});

// Función para rebobinar 10 segundos
rewindIcon.addEventListener('click', () => {
    audio.currentTime -= 10;
});

// Función para adelantar 10 segundos
forwardIcon.addEventListener('click', () => {
    audio.currentTime += 10;
});



  // ---------------------- temporizador -------------------------
function updateTimer() {
    const targetDate = new Date("February 7, 2025 20:00:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);



//   -------------- fancybox --------------------------------- 



Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: [
            { id: "zoom", position: "left" },
            { id: "slideshow", position: "left" },
            { id: "fullscreen", position: "left" },
            { id: "download", position: "left" },
            { id: "thumbs", position: "left" },
            { id: "close", position: "right" }
        ]
    },
    Thumbs: {
        autoStart: true, // Iniciar la visualización en miniatura automáticamente
        axis: 'x' // Opción para cambiar el eje de la cuadrícula a 'y' si prefieres
    },
    Infinite: true, // Habilitar bucle infinito
    SlideShow: {
        autoStart: false, // Cambia a true para iniciar automáticamente
        speed: 3000 // Velocidad del slideshow en milisegundos
    },
    Download: {
        text: 'Download', // Texto para la opción de descarga
        // Puedes personalizar la función de descarga aquí
    },
    Thumbs: {
        autoStart: true // Muestra las miniaturas automáticamente
    },
    Buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});



// ------------------- dresscode ----------------------


const showImageBtn = document.getElementById("showImage");
const lightbox = document.getElementById("lightbox");
const closeButton = document.getElementById("closeButton");

showImageBtn.addEventListener("click", function () {
    lightbox.style.display = "flex";
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});

const boton = document.getElementById('mostrarBoton');
const textoDesplegable = document.getElementById('textoDesplegable');

boton.addEventListener('click', () => {
    textoDesplegable.classList.toggle('oculto');
});



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');
  
    boton.addEventListener('click', function () {
      textoDesplegable.classList.toggle('mostrar');
    });
  });
  
  
  function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
  }
  
  
  
  function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');
  
    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
  }


// --------------------------------Invitados---------------------------------

// Función para normalizar el texto eliminando acentos
function eliminarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  // Función para capitalizar la primera letra
  function capitalizarPrimeraLetra(texto) {
    if (texto.length === 0) return texto;
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
  // Función para buscar la mesa por nombre
  function buscarMesa() {
    // Obtener el valor del nombre de la búsqueda, eliminar espacios y convertirlo a minúsculas y eliminar acentos
    var nombreBuscado = eliminarAcentos(document.getElementById("nombreBusqueda").value.trim().toLowerCase());
  
    // Validar si se ingresó un nombre
    if (nombreBuscado !== "") {
      // Simular una búsqueda (puedes ajustar esto según tu situación real)
      var mesaInfo = obtenerInformacionMesa(nombreBuscado);
  
      // Validar si se encontró la mesa
      if (mesaInfo !== null) {
        // Capitalizar la primera letra del nombre
        var nombreCapitalizado = capitalizarPrimeraLetra(mesaInfo.nombre);
  
        // Crear el texto a desplegar
        var texto = "¡Hola, " + nombreCapitalizado + "! " + mesaInfo.textoLibre;
  
        // Mostrar el texto en el div de resultado con transición suave
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerText = texto;
        resultadoDiv.style.display = "block"; // Mostrar el div
        resultadoDiv.style.opacity = 1;
  
        // Limpiar el input de búsqueda
        document.getElementById("nombreBusqueda").value = "";
      } else {
        alert("Lo siento, no se encontró el nombre ingresado, prueba con mayúsculas o minúsculas");
      }
    } else {
      alert("Por favor, ingrese su nombre.");
    }
  }
  
  // Función de ejemplo para obtener la información de la mesa (puedes personalizar según tus necesidades)
  function obtenerInformacionMesa(nombre) {
    // Simulamos una búsqueda, aquí deberías implementar la lógica real
    var invitados = [
      { nombre: "Sofia Nitzana", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Josefina Francesa", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Martin Yanos", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Emilio Yanos", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Dario Zalazar", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Camello Cuevas", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Carlos Luccioni", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Carlos Teran", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Mario Montes", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Pedro Castillo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Lucas Garcia", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Luis Rodriguez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Florencia Vasquez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Angelica Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Andres Rene Yanos", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Berta Gomez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Yola Ponce", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Clelia", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Rafael Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Lida Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Daniela Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Sara Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Claudia Lasquera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Jose Cruz", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Amanda Alancay", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Franco Cuevas", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Juan Carlos Martinez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Belen Altamirano", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Marcela Quiroga", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Vanesa Sanchez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Celeste Maldonado", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Aldo Paz", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Paola Palomo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Jose Nogales Campos", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Rolando Alanoca", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Fernanda Quintana", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Marcela Aleman", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Cristian Claros", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Sergio Vilca", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Paula Karina Valdez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Magdalena Guerra", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Salvi", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Carmen", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Camila Murua", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Victor Maraz", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Maria Eugenia", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Tia Fany", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Gustavo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Tamara Miranda", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Ivonne Salva", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Natalia Velasquez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Noelia Rivera", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Gisela Valdiviezo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Doña Vicky", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Cecilia  Vilte", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Patricia Naser", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Natalia Baspineiro", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Beatriz Flores", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Carmen Palomo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Marcela Mendoza", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Marcela Rivero", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Roxana Zarate", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Nadia Castillo", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Patricia Gutierrez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Valeria Veliz", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Leticia Farfan", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Adriana", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Noemi Martinez", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Gladis Solis", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Carolina Bracamonte", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Romina Barboza", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Ana Muñoz", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Justina Alancay", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Ivana Correa", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Melisa Mamani", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Matias Amador", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Angela Peña", textoLibre: "Su invitación corresponde para 1 persona" },
      { nombre: "Analia Villagra", textoLibre: "Su invitación corresponde para 1 persona" },

      { nombre: "Matias Yanos", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Familia Salvatierra ", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Mario Peralta", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Claudio Martinez", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Leo Serrano y Familia", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Gustavo Virreyra y Familia", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Monica Quispe", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Miguel Delgado", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Gustavo Galarza", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Rodrigo Paz", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Joaquin Yanos", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Vanesa Lasquera", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Emanuel Agostini", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Hector Nuñez", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Andres Espinoza", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Eduardo Heredia", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Walter Villareal", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Estela y Abraham", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Diego y Bety", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Javier y Martina", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Miriam y Alejandro", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Rafael Guerra", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Daniela Cazon", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Cecilia Segovia", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Veronica Ibañez", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Marcela y Marcelo", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Gloria y Roberto", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Paola Lizarazo", textoLibre: "Su invitación corresponde para 2 personas" },
      { nombre: "Angelica", textoLibre: "Su invitación corresponde para 2 personas" },

      { nombre: "Juan Maraz y Familia", textoLibre: "Su invitación corresponde para 3 personas" },
      { nombre: "Javier Aramayo y Familia", textoLibre: "Su invitación corresponde para 3 personas" },

    ];
  
    for (var i = 0; i < invitados.length; i++) {
      // Convertir los nombres a minúsculas y eliminar acentos para la comparación
      if (eliminarAcentos(invitados[i].nombre.toLowerCase()) === nombre) {
        return invitados[i]; // Retornar el objeto completo para usar el nombre capitalizado
      }
    }
  
    return null; // Retornar null si no se encuentra el nombre
  }
  
  
  
  
  


  // --------------- confirmacion --------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const recipientNumber1 = '54'; // Número para el primer botón
    const recipientNumber2 = '54'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const userName = document.getElementById('userFullName').value.trim();
        const userMessage = document.getElementById('customMessage').value.trim();
        const attendanceStatus = document.querySelector('input[name="attendanceOption"]:checked');
  
        if (!attendanceStatus) {
            alert('Por favor, selecciona si asistirás o no.');
            return;
        }
  
        if (userName === '') {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }
  
        const alimenticioSeleccionado = document.querySelector('input[name="alimenticioOption"]:checked');
        let restriccionAlimenticia = 'N/A';
        if (alimenticioSeleccionado) {
            const selectedId = alimenticioSeleccionado.id;
            switch (selectedId) {
                case 'celiaca':
                    restriccionAlimenticia = 'Celíac@';
                    break;
                case 'vegetariana':
                    restriccionAlimenticia = 'Vegetarian@';
                    break;
                case 'hipertesion':
                    restriccionAlimenticia = 'Hipertensión';
                    break;
                case 'diabetica':
                    restriccionAlimenticia = 'Diabétic@';
                    break;
                case 'ninguna':
                    restriccionAlimenticia = 'Ninguna';
                    break;
            }
        }
  
        const finalMessage = `*Presencia:* ${attendanceStatus.value}\n*Nombre y Apellido:* ${userName}\n*Restricción alimenticia:* ${restriccionAlimenticia}\n*Mensaje:* ${userMessage ? userMessage : 'N/A'}`;
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userFullName').value = '';
        document.getElementById('customMessage').value = '';
        document.querySelectorAll('input[name="attendanceOption"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="alimenticioOption"]').forEach(radio => radio.checked = false);
  
        // Redirigir a la sección con id 'correo'
        window.location.hash = 'correo';
    }
  
    // Asignar eventos a los botones
    document.getElementById('btnConfirmacion1').addEventListener('click', function() {
        sendMessage(recipientNumber1);
    });
  
    document.getElementById('btnConfirmacion2').addEventListener('click', function() {
        sendMessage(recipientNumber2);
    });
  });



  // --------------------------- playlist --------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const phoneNumber1 = '542617170300'; // Número para el primer botón
    const phoneNumber2 = '543885851928'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;
  
        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }
  
        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';
  
        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('recomendarPlay1').addEventListener('click', function() {
        sendMessage(phoneNumber1);
    });
  
    document.getElementById('recomendarPlay2').addEventListener('click', function() {
        sendMessage(phoneNumber2);
    });
  });
  
  
  