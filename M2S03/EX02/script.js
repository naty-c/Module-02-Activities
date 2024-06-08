const professionEl = document.querySelector('.profession span');
const professions = ['Front-End Developer', 'UX/UI Designer', 'Tech Addicted'];
let currentProfessionIndex = 0;

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      professionEl.innerHTML = '<span>&lt;</span>' + ' ' + text.substring(0, i + 1) + '|' + ' ' + '<span>&gt;</span>';
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
  
  function startTextAnimation(i) {
    if (i < professions[currentProfessionIndex].length) {
      typeWriter(professions[currentProfessionIndex], i, function () {
        eraseText(i);
      });
    } else {
      setTimeout(() => {
        eraseText(0);
      }, 1000);
    }
  }
  
  function eraseText(i) {
    const text = professionEl.textContent;
    if (i >= 0) {
      professionEl.textContent = text.substring(0, i) + '|';
      setTimeout(function () {
        eraseText(i - 1);
      }, 50);
    } else {
      currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
      startTextAnimation(0);
    }
  }
  
  startTextAnimation(0);