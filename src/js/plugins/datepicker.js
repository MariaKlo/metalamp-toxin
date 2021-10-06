import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

// datepickers from form elements page
new AirDatepicker('#datepicker-here', {
    buttons: ['today', 'clear']
}) // first date input

new AirDatepicker('#datepicker', {
    buttons: ['today', 'clear']
}) // second date input

new AirDatepicker('#datepicker-date', {
    buttons: ['today', 'clear']
}) // third date input

new AirDatepicker('#datepicker-filter-date', {
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: ['today', 'clear']
}) // forth date input + range of dates

// datepickers from cards page
new AirDatepicker('#datepicker-rooms-arrival', {
    buttons: ['today', 'clear']
}) // rooms card, arrival

new AirDatepicker('#datepicker-rooms-departure', {
    buttons: ['today', 'clear']
}) // rooms card, departure

new AirDatepicker('#datepicker-birthday', {
    buttons: ['today', 'clear']
}) // registration card, birthday

new AirDatepicker('#datepicker-book-arrival', {
    buttons: ['today', 'clear']
}) // book card, arrival

new AirDatepicker('#datepicker-book-departure', {
    buttons: ['today', 'clear']
}) // book departure

new AirDatepicker('#datepicker-calendar', {
    inline: true,
    buttons: ['today', 'clear']
}) // calendar card