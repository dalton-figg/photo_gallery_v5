// setup external fitler plugin
// const search = new Filter("search", "data-caption");

// setup lightbox on page load

// note: there seems to be an issue with the arrows appearing sometimes and other times not - they do work if you are outside of the devtools/responsive mode and sometimes within
// this is inconsistent however they should be shown by default -- I think this is based on the auto value in the docs which state:

// "Display buttons. 'auto' hides buttons on touch-enabled devices or when only one image is available"

window.addEventListener("load", () => {
  baguetteBox.run(".gallery");
});

// -- filter system with original javascript --

/**
 * Filters a collection of images based on a user-provided search input.
 *
 * This function retrieves the value of the input (case-insensitive) and hides images whose captions
 * do not include the searched value. It loops through the images and sets the 'hidden' property
 * accordingly.
 *
 * @function
 * @name filterImages
 * @returns {void}
 */

const filterImages = () => {
  // get the value of the input (refers to whatever the user has typed) + account for case sensitivity
  let search = searchInput.value.toLowerCase();

  // loop over the images

  images.forEach(image => {
    // set the image to hidden if it's caption doesn't include the searched value
    image.hidden = !image.dataset.caption.includes(search);
  });
};

// set the search input element to a variable

const searchInput = document.getElementById("search");

// store all of the images on the page in a variable

const images = document.querySelectorAll("a");

// add an event listener that triggers anytime a user types in the box (so that the images can update in real time)

searchInput.oninput = filterImages;
