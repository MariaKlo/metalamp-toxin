import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

class RangeSlider {

  constructor() {
    this.init();
  }

  init() {
    this.callSlider();
    this.setStringValues();
  }

  callSlider() {
    let slider = document.getElementById('js-slider');

    noUiSlider.create(slider, {
      start: [5000, 10000],
      connect: true,
      step: 1,
      range: {
          'min':[0],
          'max': [15000]
      },
    });
  }

  setStringValues() {
    let slider = document.getElementById('js-slider');
    let nonLinearStepSliderValueElement = document.getElementById('js-slider-non-linear-step-value');
    
    slider.noUiSlider.on('update', function (values) {
      const valuesAsNumbers = values.map((i) => Number(i));
      nonLinearStepSliderValueElement.innerHTML = valuesAsNumbers.join('₽ - ').concat('₽');
    });
  }
}

let slider = new RangeSlider();