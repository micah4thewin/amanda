document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  document.querySelector(".english").addEventListener("click", function () {
    var options = {
      strings: [
        "My name is Amanda Watson.",
        "Thanks for visiting my website.",
        "Have a great day."
      ],
      typeSpeed: 35,
      smartBackspace: false, // Default value
      loop: false,
      loopCount: 0,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed", options);
  });

  document.querySelector(".spanish").addEventListener("click", function () {
    var options = {
      strings: [
        "Mi nombre es Amanda Watson.",
        "Gracias por visitar mi sitio web.",
        "Que tengas un gran día."
      ],
      typeSpeed: 35,
      smartBackspace: false,
      loop: false,
      loopCount: 0,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed2", options);
  });

  document.querySelector(".french").addEventListener("click", function () {
    var options = {
      strings: [
        "Mon nom est Amanda Watson.",
        "Merci de visiter mon site web.",
        "Passez une belle journée."
      ],
      typeSpeed: 80,
      smartBackspace: false,
      loop: false,
      loopCount: 2,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed3", options);
  });

  document.querySelector(".mandarin").addEventListener("click", function () {
    var options = {
      strings: [
        "我的名字是阿曼达·沃森。",
        "感谢您访问我的网站。",
        "祝你有一个美好的一天。"
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: 2,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed4", options);
  });

  document.querySelector(".swahili").addEventListener("click", function () {
    var options = {
      strings: [
        "Jina langu ni Amanda Watson.",
        "Asante kwa kutembelea tovuti yangu.",
        "Habari njema kutoka siku njema."
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: 2,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed5", options);
  });

  document.querySelector(".arabic").addEventListener("click", function () {
    var options = {
      strings: [
        "اسمي أماندا واتسون.",
        "شكرا لزيارة موقعي على الويب.",
        "أتمنى لك يوم عظيم"
      ],
      typeSpeed: 80,
      smartBackspace: true,
      loop: false,
      loopCount: 2,
      showCursor: false,
      cursorChar: "",
      autoInsertCss: false
    };
    var typed = new Typed(".typed6", options);
  });
});

// Change the copyright
const copyRight = document.getElementById("copyright"); // Auto Update Copyright
const currentYear = new Date().getFullYear();
copyRight.innerHTML = "Amanda Watson ©" + currentYear;
