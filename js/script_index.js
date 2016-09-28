(function () {
  "use strict";

  var modalWindowAddToCart = document.querySelector(".modal-window_add-to-cart");
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.show = function () {
    if (!document.getElementsByClassName("overlay").length) {
      document.body.appendChild(this);
    };
  };
  overlay.hide = function () {
    if (document.getElementsByClassName("overlay").length) {
      document.body.removeChild(this);
    };
  };
  overlay.onclick = function () {
    modalWindowAddToCart.hide();
    this.hide();

    return false;
  };

  modalWindowAddToCart.show = function () {
    if (this.classList.contains("modal-window_is-closed") &&
        !this.classList.contains("modal-window_is-opened")) {
      this.classList.remove("modal-window_is-closed");
      this.classList.add("modal-window_is-opened");
    };
  };
  modalWindowAddToCart.hide = function () {
    if (this.classList.contains("modal-window_is-opened") &&
        !this.classList.contains("modal-window_is-closed")) {
      this.classList.remove("modal-window_is-opened");
      this.classList.add("modal-window_is-closed");
    };
  };

  var orderBtn = document.querySelector(".product-of-week__btn");
  orderBtn.onclick = function () {
    modalWindowAddToCart.show();
    overlay.show();

    return false;
  };
})();
