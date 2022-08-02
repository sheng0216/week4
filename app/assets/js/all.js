$(document).ready(() => {
  $(".nav-menu").click(function (e) {
    e.preventDefault();
    $(".nav-menu").toggleClass("active")
    $(".nav-list").toggleClass("active")
  })
});
