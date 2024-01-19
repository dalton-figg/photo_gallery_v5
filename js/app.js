// setup external fitler plugin
const search = new Filter("search", "data-caption");
// setup lightbox on page load
window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});
