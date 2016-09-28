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
  var menuList = menu.querySelector(".menu__list");
  var menuBtn = menu.querySelector(".menu__btn");
  menuBtn.onclick = function () {
    menu.classList.toggle("menu_is-closed");
    menu.classList.toggle("menu_is-opened");
    menuList.classList.toggle("menu__list_is-closed");
    menuList.classList.toggle("menu__list_is-opened");
    menuBtn.classList.toggle("menu__btn_is-closed");
    menuBtn.classList.toggle("menu__btn_is-opened");

    return false;
  }
})();
