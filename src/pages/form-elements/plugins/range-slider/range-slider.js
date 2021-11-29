import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 1,
    range: {
        'min':[0],
        'max': [15000]
    },
});

var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

slider.noUiSlider.on('update', function (values) {
    const valuesAsNumbers = values.map((i) => Number(i));
    nonLinearStepSliderValueElement.innerHTML = valuesAsNumbers.join('₽ - ').concat('₽');
});