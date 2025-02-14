$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  // Generar corazones flotantes
  function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const numHearts = 20; // Número de corazones

    for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart'); // Nueva clase
      heart.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
      heart.style.animationDuration = `${Math.random() * 3 + 5}s`; // Duración aleatoria
      heart.style.animationDelay = `${Math.random() * 5}s`; // Retraso aleatorio
      heartsContainer.appendChild(heart);
    }
  }

  createFloatingHearts();
});