let sliderItems = document.querySelectorAll('.slider__item')

let sliderPrevBtn = document.querySelector('.slider__btn_left')
let sliderNextBtn = document.querySelector('.slider__btn_right')

let slidesCount = sliderItems.length

let range = 215;

let step = 0;

sliderNextBtn.onclick = () => {
  step -= range
  let i = 0;
  console.log(step);
  if (step <= -(range * slidesCount)) {
    step = 0
  }
  while (i < slidesCount) {
    console.log(`${step}px`);
    sliderItems[i].style.translate = `${step}px`;
    i++
  }
}

sliderPrevBtn.onclick = () => {
  step += range
  let i = 0;
  console.log(step);
  if (step <= -(range * slidesCount) || step > 0) {
    step = 0
  }
  while (i < slidesCount) {
    console.log(`${step}px`);
    sliderItems[i].style.translate = `${step}px`;
    i++
  }
}  


