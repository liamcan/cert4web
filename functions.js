
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
