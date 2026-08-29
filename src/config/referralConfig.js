/**
 * CONFIGURACIÓN CENTRALIZADA DE REFERIDOS Y CONTENIDO DE KGEN
 * Todos los datos, enlaces, códigos e IDs de YouTube se modifican fácilmente en este archivo.
 */

export const REFERRAL_CONFIG = {
  // Tu enlace de referido personalizado oficial
  referralLink: "https://www.kgen.quest/invite/81cdef49",
  
  // Tu código de referido promocional para KGEN
  referralCode: "81cdef49",

  // Código de invitación OBLIGATORIO para Minute
  minuteInviteCode: "5TBCT4ZC",

  // Nombre y distintivos de la aplicación
  appName: "KGEN",
  appBadge: "Guía de Onboarding Oficial",

  // Pasos tutoriales unificados
  steps: [
    {
      number: 1,
      id: "dispositivo",
      title: "1. ¿Qué dispositivo tienes?",
      subtitle: "Verifica que tu teléfono sea compatible antes de comenzar el proceso de registro.",
      youtubeId: null, // Video en proceso
      videoTitle: "Cómo saber qué teléfono tienes y la importancia del modelo compatible",
      instructions: [
        "iPhone: Modelo iPhone 12 o superior.",
        "Samsung Galaxy: Modelo S21 o superior.",
        "Google Pixel: Modelo Pixel 6 o superior.",
        "Es de suma importancia contar con uno de estos dispositivos para poder ejecutar las tareas de grabación en la app de Minute."
      ],
      ctaText: "Registrarme en KGEN con Referido",
      badge: "Requisito"
    },
    {
      number: 2,
      id: "registro-kgen",
      title: "2. Registro en KGEN",
      subtitle: "Crea tu cuenta oficial en la plataforma KGEN utilizando nuestro enlace directo.",
      youtubeId: "fu9kz1jjr1E", // Video oficial Paso 2
      videoTitle: "Tutorial Paso 2: Cómo registrarte en KGEN con tu cuenta de Google",
      instructions: [
        "Haz clic en el enlace verde de referido 'Registrarme en KGEN'.",
        "Selecciona la opción 'Crear cuenta con Google'.",
        "Completa los datos necesarios del formulario de registro."
      ],
      ctaText: "Registrarme en KGEN Ahora",
      badge: "Cuenta KGEN"
    },
    {
      number: 3,
      id: "descarga-minute",
      title: "3. Descarga la App de Minute",
      subtitle: "Descarga la aplicación oficial de Minute en tu teléfono e ingresa el código de invitación obligatorio.",
      youtubeId: "8eTP4YLSzzE", // Video oficial Paso 3
      videoTitle: "Tutorial Paso 3: Descarga de Minute y uso del código de invitación",
      instructions: [
        "Descarga la aplicación 'Minute' desde la AppStore (iOS) o PlayStore (Android).",
        "Crea tu cuenta utilizando OBLIGATORIAMENTE el mismo correo electrónico que usaste en KGEN.",
        "Ingresa el código de invitación OBLIGATORIO: 5TBCT4ZC (Sin este código NO se vinculará KGEN con la app de grabación)."
      ],
      ctaText: "Ir a KGEN con Referido",
      showMinuteCode: true,
      badge: "Código Clave"
    },
    {
      number: 4,
      id: "vincular-minute",
      title: "4. Vincular Minute con KGEN",
      subtitle: "Conecta tu cuenta recién creada de Minute dentro de la plataforma KGEN.",
      youtubeId: "HnPEoX6FBt4", // Video oficial Paso 4
      videoTitle: "Tutorial Paso 4: Vincular el correo de Minute con la tarea de KGEN",
      instructions: [
        "Copia el correo electrónico que utilizaste al registrarte en Minute.",
        "Ingresa en KGEN y dirígete a la sección de 'Oportunidades'.",
        "Haz clic en 'Start Tarea' o 'Comenzar Tarea'.",
        "Pega el correo electrónico que creaste en la app de Minute para sincronizar ambas plataformas."
      ],
      ctaText: "Ir a KGEN para Vincular Minute",
      badge: "Sincronización"
    },
    {
      number: 5,
      id: "vincular-binance",
      title: "5. Vincular cuenta de Binance con KGEN",
      subtitle: "Configura tu billetera de Binance para recibir tus pagos directos. Los datos deben ser exactos.",
      youtubeId: "VWti0UHqQac", // Video oficial Paso 5 (Binance)
      videoTitle: "Tutorial Paso 5: Cómo obtener tu wallet de Polygon (USDT) en Binance y vincularla",
      instructions: [
        "Entra a tu cuenta de Binance (si no tienes una, créala; hay muchos videos en YouTube de cómo hacerlo).",
        "Haz clic en la opción 'Depositar'.",
        "Selecciona 'Depositar activo'.",
        "Selecciona la criptomoneda: USDT.",
        "Selecciona la red: Polygon (POL).",
        "Copia tu dirección de Wallet (es una combinación única de números y letras).",
        "Entra en KGEN (Perfil), busca la opción del formulario 'Billetera Digital (Polygon)', pega tu wallet y guarda los cambios."
      ],
      ctaText: "Ir a KGEN para Configurar Wallet",
      customLink: "https://www.kgen.quest/profile",
      badge: "Crucial / Pagos"
    },
    {
      number: 6,
      title: "6. Crea tu Soporte Casero o Cómpralo en KGEN",
      subtitle: "Prepara el soporte para tu teléfono para poder realizar las grabaciones correctamente.",
      youtubeId: "g6hugiLrs0k", // Video oficial Paso 6 (Soporte Casero)
      videoTitle: "Tutorial Paso 6: Cómo fabricar tu propio soporte casero para celular",
      instructions: [
        "Mira el video demostrativo para aprender a fabricar tu propio soporte de cabeza casero de manera fácil y económica.",
        "O si lo prefieres, puedes adquirir el soporte oficial directamente dentro de la tienda de KGEN.",
        "Asegúrate de que tu teléfono quede estable y firme a la altura recomendada para las grabaciones."
      ],
      ctaText: "Ver Soporte en KGEN",
      badge: "Equipamiento"
    },
    {
      number: 7,
      title: "7. ¡Todo Listo! Únete a la Comunidad",
      subtitle: "Has completado la configuración inicial. Ahora es momento de ingresar al grupo oficial.",
      youtubeId: "m3nUENe6ahc", // Video oficial Paso 7 (Comunidad)
      videoTitle: "Tutorial Paso 7: Bienvenida a la comunidad KGEN",
      instructions: [
        "¡Felicidades! Todo está configurado correctamente.",
        "Únete a nuestra comunidad oficial en Discord / Telegram.",
        "Pregunta cualquier inquietud que tengas sobre las tareas disponibles y consulta la guía de tareas para empezar a generar ganancias."
      ],
      ctaText: "Ir a la Comunidad KGEN",
      badge: "Comunidad"
    },
    {
      number: 8,
      title: "8. Preguntas y Respuestas (FAQ)",
      subtitle: "Respuestas a las dudas más comunes sobre los dispositivos, pagos y vinculación.",
      youtubeId: null, // Video en proceso
      videoTitle: "Video Resumen: Preguntas frecuentes y resolución de dudas comunes",
      instructions: [
        "¿Por qué es obligatorio el código 5TBCT4ZC en Minute? Sin este código no se vinculan las tareas con KGEN.",
        "¿Qué pasa si mi correo de Minute y KGEN son distintos? No se sincronizarán tus tareas ni tus pagos. Deben ser idénticos.",
        "¿Por qué la red debe ser Polygon (POL) en Binance? KGEN procesa los pagos de USDT a través de la red Polygon para comisiones mínimas.",
        "¿Puedo usar un teléfono que no sea iPhone 12+, Galaxy S21+ o Pixel 6+? No, la app Minute no habilitará las tareas de grabación en modelos inferiores."
      ],
      ctaText: "Ir a KGEN con Mi Referido",
      badge: "Soporte FAQ"
    }
  ]
};
