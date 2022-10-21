import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

class Datepicker {
  datepickerId = [
    '.js-datepicker_first', '.js-datepicker_second', '.js-datepicker_third', '.js-datepicker_fifth',
    '.js-datepicker_sixth', '.js-datepicker_seventh', '.js-datepicker_eight', '.js-datepicker_ninth',
    '.js-datepicker_tenth', '.js-datepicker_eleventh', '.js-datepicker_twelfth', '.js-datepicker-thirteenth',
    '.js-datepicker_fourteenth', '.js-datepicker_fifteenth',
  ];

  datepickerIdWithRange = ['.js-datepicker_fourth', '#datepicker-calendar'];

  button = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: () => {
      const $isDatePickerActive = $('.air-datepicker.-active-');
      const $isDatePickerInline = $('.air-datepicker.-inline-');
      $isDatePickerActive.css('display', 'none');
      $isDatePickerInline.css('display', 'none');
    },
  };

  constructor() {
    this.init();
  }

  init() {
    this.callDatepickerPlugin();
  }

  callDatepickerPlugin() {
    for (let i = 0; i < this.datepickerId.length; i += 1) {
      const datePlugin = new AirDatepicker(this.datepickerId[i], {
        buttons: ['clear', this.button],
        navTitles: {
          days: '<strong>MMMM</strong> <i>yyyy</i>',
          months: 'Select month of <strong>yyyy</strong>',
        },
        prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
        nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
      });
    }
    for (let i = 0; i < this.datepickerIdWithRange.length; i += 1) {
      const datePlugin = new AirDatepicker(this.datepickerIdWithRange[i], {
        range: true,
        multipleDatesSeparator: ' - ',
        buttons: ['clear', this.button],
        navTitles: {
          days: '<strong>MMMM</strong> <i>yyyy</i>',
          months: 'Select month of <strong>yyyy</strong>',
        },
        prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
        nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
      });
    }
  }
}

const datepickerPlugin = new Datepicker();
