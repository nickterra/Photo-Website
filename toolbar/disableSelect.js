
<!-- Paste this code into an external JavaScript file named: disableSelect.js  -->

/* This script and many more are available free online at
The JavaScript Source :: http://www.javascriptsource.com
Created by: James Nisbet (morBandit) :: http://www.bandit.co.nz/ */

window.onload = function() {
  document.onselectstart = function() {return false;} // ie
  document.onmousedown = function() {return false;} // mozilla
}


/* You can attach the events to any element. In the following example
I'll disable selecting text in an element with the id 'content'. */

window.onload = function() {
  var element = document.getElementById('content');
  element.onselectstart = function () { return false; } // ie
  element.onmousedown = function () { return false; } // mozilla
}



<!-- Paste this code into the HEAD section of your HTML document.
     You may need to change the path of the file.  -->

<script type="text/javascript" src="disableSelect.js"></script>


