// setup external fitler plugin
// const search = new Filter("search", "data-caption");

// setup lightbox on page load

window.addEventListener("load", () => {
  baguetteBox.run(".gallery");
});

// -- filter system with original javascript --

// set the search input element to a variable

const searchInput = document.getElementById("search");

// store all of the images on the page in a variable

const images = document.querySelectorAll("a");

// loop through them and generate a new array of captions

const captions = [];

images.forEach(image => {
  captions.push(image.dataset.caption);
});

// add an event listener that triggers anytime a user types in the box (so that the images can update in real time)

searchInput.oninput = () => {
  // get the value of the input (refers to whatever the user has typed)
  let search = searchInput.value;

  // hide all images by default

  images.forEach(image => {
    image.hidden = true;
  });

  // loop over each caption and check for any matches with the searched value

  captions.forEach(caption => {
    // if there is a match
    if (caption.includes(search)) {
      // loop over each image
      images.forEach(image => {
        // check if it's caption matches the actual 'searched' caption and unhides the image
        if (image.dataset.caption === caption) {
          image.hidden = false;
        }
      });
    }
  });

  // if the search input is blank

  if (!search) {
    // show all images
    images.forEach(image => {
      image.hidden = false;
    });
  }
};
