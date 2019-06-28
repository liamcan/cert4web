
// Image clicker code that cycles through images//

var images = ["images/art.jpg", "images/coffee1.jpg", "images/coffee2.jpg"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

if (imgTag) {
  imgTag.addEventListener("click", function(event) {
    imgState = (++imgState % images.length);
    event.target.src = images[imgState];
  });
}

//Date script to display current date//

var d = new Date();
document.getElementById("time").innerHTML = d.toDateString();
