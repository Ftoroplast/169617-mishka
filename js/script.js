(function () {
  "use strict";

  document.body.removeNojsClass = function () {
    [].forEach.call(document.querySelectorAll("*"), function (item, i, arr) {
      item.classList.forEach(function (classItem, j, classList) {
        if (~classItem.indexOf("_nojs")) {
          classList.remove(classItem);
        }
      })
    });
  };

  document.body.removeNojsClass();

  var menu = document.querySelector(".menu");
  var menuBtn = menu.querySelector(".menu__btn");
  menuBtn.onclick = function () {
    menu.classList.toggle("menu_is-closed");
    menu.classList.toggle("menu_is-opened");

    return false;
  }

  var modalWindowAddToCart = document.querySelector(".modal-window_add-to-cart");
})();
