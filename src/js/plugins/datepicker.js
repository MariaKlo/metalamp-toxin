import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// datepickers from form elements page
new AirDatepicker('#datepicker-here', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // first date input

new AirDatepicker('#datepicker', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // second date input

new AirDatepicker('#datepicker-date', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // third date input

new AirDatepicker('#datepicker-filter-date', {
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // forth date input + range of dates

// datepickers from cards page
new AirDatepicker('#datepicker-rooms-arrival', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // rooms card, arrival

new AirDatepicker('#datepicker-rooms-departure', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // rooms card, departure

new AirDatepicker('#datepicker-birthday', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // registration card, birthday

new AirDatepicker('#datepicker-book-arrival', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // book card, arrival

new AirDatepicker('#datepicker-book-departure', {
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // book departure

new AirDatepicker('#datepicker-calendar', {
    range: true,
    multipleDatesSeparator: ' - ',
    inline: true,
    buttons: ['today', 'clear'],
    navTitles: {
        days: '<strong>MMMM</strong> <i>yyyy</i>',
        months: 'Select month of <strong>yyyy</strong>'    
    },
    prevHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-left" viewBox="0 0 32 32" aria-hidden="true"><path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/></svg>',
    nextHtml: '<svg viewBox="0 0 32 32" class="icon icon-arrow-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M5.975 17.504l14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z"/></svg>',
}) // calendar card