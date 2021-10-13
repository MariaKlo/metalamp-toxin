import './item-quantity-dropdown.min.js';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
      setSelectionText: (itemCount, totalItems) => {
        // if (itemCount === 1) return `${totalItems} гость`
        // if (itemCount >= 2 && itemCount <= 4) return `${totalItems} гостя`
        // if (itemCount >= 5 && itemCount <= 20) return `${totalItems} гостей`
        return `Сколько гостей`
    },
  });
});