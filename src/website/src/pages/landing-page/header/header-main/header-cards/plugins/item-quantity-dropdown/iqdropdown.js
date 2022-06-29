/* global jQuery */

/* eslint-disable func-names */
(function ($) {
    const defaults = {
      maxItems: Infinity,
      minItems: 0,
      selectionText: 'item',
      textPlural: 'items',
      controls: {
        position: 'right',
        displayCls: 'iqdropdown-content',
        controlsCls: 'iqdropdown-item-controls',
        counterCls: 'counter',
      },
      items: {},
      onChange: () => {},
      beforeDecrement: () => true,
      beforeIncrement: () => true,
      setSelectionText (itemCount, totalItems) {
        const usePlural = totalItems !== 1 && this.textPlural.length > 0;
        const text = usePlural ? this.textPlural : this.selectionText;
        return `${totalItems} ${text}`;
      },
    };
  
    $.fn.iqDropdown = function (options) {
      this.each(function () {
        const $this = $(this);
        const $selection = $this.find('p.iqdropdown-selection').last();
        const $menu = $this.find('div.iqdropdown-menu');
        const $items = $menu.find('div.iqdropdown-menu-option');
        const dataAttrOptions = {
          selectionText: $selection.data('selection-text'),
          textPlural: $selection.data('text-plural'),
        };
        const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
        const itemCount = {};
        let totalItems = 0;
  
        function updateDisplay () {
          $selection.html(settings.setSelectionText(itemCount, totalItems));
        }
  
        function setItemSettings (id, $item) {
          const minCount = Number($item.data('mincount'));
          const maxCount = Number($item.data('maxcount'));
  
          settings.items[id] = {
            minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
            maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
          };
        }
  
        function addControls (id, $item) {
          const $controls = $('<div />').addClass(settings.controls.controlsCls);
          const $decrementButton = $(`
            <button class="button-decrement">
              <i class="icon-decrement"></i>
            </button>
          `);
          const $incrementButton = $(`
            <button class="button-increment">
              <i class="icon-decrement icon-increment"></i>
            </button>
          `);
          const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);
  
          $item.children('div').addClass(settings.controls.displayCls);
          $controls.append($decrementButton, $counter, $incrementButton);
  
          if (settings.controls.position === 'right') {
            $item.append($controls);
          } else {
            $item.prepend($controls);
          }
  
          const $firstDecrementButton = $(".iqdropdown-menu-option:nth-child(1)").find(".button-decrement");
          const $secondDecrementButton = $(".iqdropdown-menu-option:nth-child(2)").find(".button-decrement");
          const $thirdDecrementButton = $(".iqdropdown-menu-option:nth-child(3)").find(".button-decrement");
          const $firstIncrementButton = $(".iqdropdown-menu-option:nth-child(1)").find(".button-increment");
          const $secondIncrementButton = $(".iqdropdown-menu-option:nth-child(2)").find(".button-increment");
          const $thirdIncrementButton = $(".iqdropdown-menu-option:nth-child(3)").find(".button-increment");
          $firstDecrementButton.css("opacity", "0.5");
          $secondDecrementButton.css("opacity", "0.5");
          $thirdDecrementButton.css("opacity", "0.5");
          
          $decrementButton.click((event) => {
            const { items, minItems, beforeDecrement, onChange } = settings;
            const allowClick = beforeDecrement(id, itemCount);
            if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
                itemCount[id] -= 1;
                totalItems -= 1;
  
              if (totalItems === 0) {
                $(".iqdropdown-btn-clear").hide();
              } else if (totalItems > 0) {
                $(".iqdropdown-btn-clear").show();
              }
              $counter.html(itemCount[id]);
              updateDisplay();
              onChange(id, itemCount[id], totalItems);
            }
  
            event.preventDefault();
          });
  
          $incrementButton.click((event) => {
            const { items, maxItems, beforeIncrement, onChange } = settings;
            const allowClick = beforeIncrement(id, itemCount);
  
            if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
                itemCount[id] += 1; 
                totalItems += 1;
              if (totalItems === 0) {
                $(".iqdropdown-btn-clear").hide();
              } else if (totalItems > 0) {
                $(".iqdropdown-btn-clear").show();
              }
              $counter.html(itemCount[id]); 
              updateDisplay();
              onChange(id, itemCount[id], totalItems);
            }
            // styles of first decrement button
            $firstDecrementButton.click(function() {
              if (itemCount[id] === 0) {
                $firstDecrementButton.css("opacity", "0.5");
              } else {
                $firstDecrementButton.css("opacity", "1");
              }
            });
  
            $firstIncrementButton.click(function() {
              if (itemCount[id] === 0) {
                $firstDecrementButton.css("opacity", "0.5");
              } else {
                $firstDecrementButton.css("opacity", "1");
              }
            });
            // styles of second decrement button
            $secondDecrementButton.click(function() {
              if (itemCount[id] === 0) {
                $secondDecrementButton.css("opacity", "0.5");
              } else {
                $secondDecrementButton.css("opacity", "1");
              }
            });
  
            $secondIncrementButton.click(function() {
              if (itemCount[id] === 0) {
                $secondDecrementButton.css("opacity", "0.5");
              } else {
                $secondDecrementButton.css("opacity", "1");
              }
            });
            // styles of third decrement button
            $thirdDecrementButton.click(function() {
              if (itemCount[id] === 0) {
                $thirdDecrementButton.css("opacity", "0.5");
              } else {
                $thirdDecrementButton.css("opacity", "1");
              }
            });
  
            $thirdIncrementButton.click(function() {
              if (itemCount[id] === 0) {
                $thirdDecrementButton.css("opacity", "0.5");
              } else {
                $thirdDecrementButton.css("opacity", "1");
              }
            });
            
            $(".iqdropdown-btn-clear").click(function() {
              itemCount[id] = 0;
              totalItems = 0;
              $firstDecrementButton.css("opacity", "0.5");
              $secondDecrementButton.css("opacity", "0.5");
              $thirdDecrementButton.css("opacity", "0.5");
              $counter.html(itemCount[id]);
              updateDisplay();
            });
  
            event.preventDefault();
          });
  
          $item.click(event => event.stopPropagation());
  
          return $item;
        }
  
        $this.click(() => {
          $this.toggleClass('menu-open');
        });
  
        $items.each(function () {
          const $item = $(this);
          const id = $item.data('id');
          const defaultCount = Number($item.data('defaultcount') || '0');
  
          itemCount[id] = defaultCount;
          totalItems += defaultCount;
          setItemSettings(id, $item);
          addControls(id, $item);
        });
  
        updateDisplay();
      });
  
      return this;
    };
  }(jQuery));