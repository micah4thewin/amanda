var options = {
  strings: [
    "Inclusively supporting unique journeys.",
    "Empowering through compassionate therapy.",
    "Creating a safe, supportive space for healing and growth.",
  ],
  typeSpeed: 60,
  smartBackspace: true, // Default value
  loop: false,
  loopCount: Infinity,
  showCursor: false,
  cursorChar: "",
  autoInsertCss: false
};
var typed = new Typed(".typedDescAbout", options);


// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Find the form element in the DOM
  const form = document.querySelector('form[action="https://formspree.io/f/xwkjqqop"]');

  // If the form is found, clear its input values
  if (form) {
    // Find all input and textarea elements in the form
    const formInputs = form.querySelectorAll('input, textarea');

    // Loop through each input and set its value to an empty string
    formInputs.forEach(input => {
      input.value = '';
    });
  }
});
