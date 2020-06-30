window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const square = document.querySelector('.square');
  const btnStart = document.querySelector('.btn_start');
  const btnReset = document.querySelector('.btn_reset');

  let squareAnimation;
  let count = 0;
  let animate = true;

  let animation = () => {
    squareAnimation = requestAnimationFrame(animation);
    count++;

    if(count > 400){
      cancelAnimationFrame(squareAnimation);
      btnStart.style.display = 'none';
    }else{
      square.style.transform = 'rotate(' + count * 2 + 'deg)';
      square.style.left = count * 3 + 'px';
    }
  };

  btnStart.addEventListener('click', function (e) {
    if(animate){
      squareAnimation = requestAnimationFrame(animation);
      animate = false;
      e.target.textContent = 'Стоп';
    }else{
      animate = true;
      cancelAnimationFrame(squareAnimation);
      e.target.textContent = 'Старт';
    }
  });

  btnReset.addEventListener('click', function () {
    btnStart.style.display = 'flex';
    btnStart.textContent = 'Старт';
    square.style.transform = 'none';
    square.style.left = 0;
    animate = true;
    count = 0;
    cancelAnimationFrame(squareAnimation);
  });
});
