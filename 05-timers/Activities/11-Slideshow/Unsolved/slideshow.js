// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ["https://media.mnn.com/assets/images/2016/02/aye-aye.jpg.638x0_q80_crop-smart.jpg", "https://theblot-xumswrmlemonzaza5cv.netdna-ssl.com/wp-content/uploads/2014/01/Ugly-Animals-Need-Saving-Too.jpg", "https://i.ytimg.com/vi/g2BEXz8B6iM/hqdefault.jpg", "http://www.factzoo.com/sites/all/img/uglies/ugly-dog-skin-diseased.jpg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;
$("#start").click(startSlideshow);
$("#stop").click(stopSlideshow);
// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {

  // TODO: Increment the count by 1.


  // TODO: Show the loading gif in the "image-holder" div.


  // TODO: Use a setTimeout to run displayImage after 1 second.


  // TODO: If the count is the same as the length of the image array, reset the count to 0.

  count++;
  $("#image-holder").html("<img src= 'loading.gif' width='400px'>");
  setTimeout(displayImage, 1000);

  if(count === images.length){
  	count= 0;
  }

}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 2000);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
displayImage();
