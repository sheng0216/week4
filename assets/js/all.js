"use strict";

$(document).ready(function () {
  $(".nav-menu").click(function (e) {
    e.preventDefault();
    $(".nav-menu").toggleClass("active");
    $(".nav-list").toggleClass("active");
  });
});
//# sourceMappingURL=all.js.map
