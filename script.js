const text = document.getElementById("textToConvert");
const buttoncon = document.getElementById("convertBtn");

buttoncon.addEventListener("click", function () {
  const speechSynth = window.speechSynthesis;
  const enteredText = text.value;
  const error = document.querySelector(".error-para");

  const errorUtter = new SpeechSynthesisUtterance("Error: Please Enter text!");

  //create error message and error changes
  if (!speechSynth.speaking && !enteredText.trim().length) {
    buttoncon.textContent = "ERROR: No text entered";
    buttoncon.style.backgroundColor = "#FFB6C1";
    document.body.style.backgroundColor = "#DE3163";
    speechSynth.speak(errorUtter);
  }

  errorUtter.onend = function () {
    document.body.style.backgroundColor = "#6495ED";
    buttoncon.style.backgroundColor = "#ffffff";
    buttoncon.textContent = "Convert Text";
  };

  //update button and background to indicate conversion
  if (!speechSynth.speaking && enteredText.trim().length) {
    error.textContent = "";
    buttoncon.textContent = "Converting";
    document.body.style.backgroundColor = "#fffff0";
  }

  //text entered will be spoken
  const newUtter = new SpeechSynthesisUtterance(enteredText);
  speechSynth.speak(newUtter);

  //change the button color
  newUtter.onstart = function () {
    buttoncon.style.backgroundColor = "#7FFFD4";
  };

  //reset button and background colors
  newUtter.onend = function () {
    buttoncon.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#6495ED";
  };
});
