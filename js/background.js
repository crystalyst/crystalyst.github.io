const images = ["image0.jpg", "image1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// we have done getting something from HTML and reflected changes, but we have never created sth in JS and put that on HTML.
// we are going to do it here!

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

//appendChild -> add html to body (at the end)
document.body.appendChild(bgImage);
// we can use prepend(bgImage)
// the image will be at top of everything
// we will change the location with CSS - so no worries!

