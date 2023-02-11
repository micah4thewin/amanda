

// This function prevents repeated firing of the event.
const disableButton = (buttonClass) => {
  const btn = document.querySelector(buttonClass);
  btn.setAttribute("disabled", true);
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 10000);
};


document.addEventListener("DOMContentLoaded", function () {
  AOS.init();



  document.querySelector(".spanish").addEventListener("click", function () {
    var options = {
      strings: [
        "Hola, soy Amanda Watson, un terapeuta con licencia que ofrece un apoyo compasivo a individuos de una comunidad diversa e inclusiva. Gracias por visitar mi sitio web.",
        "Si está luchando con pensamientos de suicidio, preocupado por alguien cercano a usted o simplemente necesita apoyo emocional, lo animo a buscar ayuda. La Línea Nacional de Prevención del Suicidio está disponible las 24 horas del día, los 7 días de la semana al 988.",
        "Tenga en cuenta que en este momento no estoy aceptando nuevos clientes a través de mi sitio web. Si tiene alguna pregunta o desea obtener más información sobre los servicios que ofrezco, no dude en comunicarse conmigo."
      ],
      typeSpeed: 35,
      smartBackspace: false,
      loop: false,
      loopCount: Infinity,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed2", options);
    disableButton(".spanish");
  });



  document.querySelector(".mandarin").addEventListener("click", function () {
    var options = {
      strings: [
        "你好，我是阿曼达·沃森，一名拥有执照的治疗师，为来自多元和包容社区的个人提供同情的支持。感谢您访问我的网站。",
        "如果您正在面对自杀的想法，对您身边的人感到担忧，或仅仅需要情感上的支持，我鼓励您寻求帮助。全国自杀预防热线24/7可用，电话号码为988。",
        "请注意，我目前不通过我的网站接受新客户。如果您有任何问题或想了解我提供的服务，请随时与我联系。"
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: Infinity,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed4", options);
    disableButton(".mandarin");
  });

  document.querySelector(".swahili").addEventListener("click", function () {
    var options = {
      strings: [
        "Habari, Mimi ni Amanda Watson, Mtendaji wa kadi wa leseni wa kutumika katika kusaidia watu kutoka katika jamii inayojumuika na inayojumuika. Asante kwa kutembelea tovuti yangu.",
        "Kama unataka kupata matatizo na matatizo ya kifo, unaona mtu wa karibu wako au inapata ushauri wa kimazingira, nashukuru kuwasiliana kwa usaidizi. Ufafanuzi wa kuzuia kifo wa Taasisi ya Taasisi unapatikana 24/7 katika 988.",
        "Tafadhali tafadhali zingatia kwamba sijapata wateja mpya kupitia tovuti yangu. Kama una maswali au unataka kujifunza zaidi kuhusu huduma ambazo nazo, tafadhali wasiliana."
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: Infinity,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed5", options);
    disableButton(".swahili");
  });

  document.querySelector(".arabic").addEventListener("click", function () {
    var options = {
      strings: [
        "مرحبا، أنا أماندا واتسون، مستشارة مرخصة تقدم الدعم اللطيف للأفراد من مجتمع متنوع وشامل. شكرا لزيارة موقعي على الويب.",
        "إذا كنت تعاني من أفكار الإخوان أو قلق بشأن شخص عندما كنت بالقرب منه أو مجرد بحاجة للدعم النفسي، أشجع عليك التواصل مع شخص للحصول على المساعدة. خط الإنفاذ الوطني للوقاية من الإخوان هو متاح 24 ساعة على التوالي على 988.",
        "يرجى ملاحظة أنني حاليًا لا أقبل عملاء جدد من خلال موقعي على الويب. إذا كان لديك أي أسئلة أو تود التعرف على المزيد عن الخدمات التي أقدمها، لا تتردد في التواصل معي."
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: Infinity,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed6", options);
    disableButton(".arabic");
  });
});

var options = {
  strings: [
    "Empowering individuals to live their best lives.",
    "Providing a culturally-sensitive and inclusive approach to therapy.",
    "Fostering a safe space for healing and personal development."
  ],
  typeSpeed: 60,
  smartBackspace: true, // Default value
  loop: false,
  loopCount: Infinity,
  showCursor: false,
  cursorChar: "",
  autoInsertCss: false
};
var typed = new Typed(".typedDesc", options);

// Change the copyright
const copyRight = document.getElementById("copyright"); // Auto Update Copyright
const currentYear = new Date().getFullYear();
copyRight.innerHTML = "Amanda Watson ©" + currentYear;
