document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.id === "ac") {
        display.value = "";
      } else if (btn.id === "de") {
        display.value = display.value.slice(0, -1);
      } else if (btn.id === "=") {
        display.value = eval(display.value);
        setTimeout(function() {
            display.value = ""; 
        }, 700); 
      } else {
        display.value += btn.textContent;
      }
    });
  });
});
