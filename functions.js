function countdownfunction() {
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown1").innerHTML = days + "d " + hours + "h " +
      minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("countdown1").innerHTML = "EXPIRED";
    }
  }, 10);
}

// ONFOCUS FUNCTIONS//

function focusName ()
{
		document.getElementById("nameinput").style.background="white";  /*BG color change fucntion for nameinput*/
		}
function unFocusName ()
{
		document.getElementById("nameinput").style.background="#E1E1E1";  /*BG color change fucntion for nameinput*/
		}
function focusEmail ()
{
		document.getElementById("emailinput").style.background="white";  /*BG color change fucntion for emailinput*/
		}
function unFocusEmail ()
{
		document.getElementById("emailinput").style.background="#E1E1E1";  /*BG color change fucntion for emailinput*/
		}
function focusComment ()
{
	document.getElementById("notes").style.background="white";				/*BG color change function for comments*/
}
function unFocusComment ()
{
	document.getElementById("notes").style.background="#E1E1E1";
}


// Image clicker function that cycles 3 images//

var images = ["images/art.jpg", "images/coffee1.jpg", "images/coffee2.jpg"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

if ( imgTag ) {
  imgTag.addEventListener("click", function(event) {
    imgState = (++imgState % images.length);
    event.target.src = images[imgState];
  });
}

//Date script to display current date//

var d = new Date();
document.getElementById("time").innerHTML = d.toDateString();
