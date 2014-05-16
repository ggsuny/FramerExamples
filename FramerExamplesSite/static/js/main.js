
// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);



$( document ).ready(function() {
	var isMobile = window.matchMedia( "(max-width: 640px)" );
	
	if (isMobile.matches) {
		$('.navigation ul li:contains("Onboarding")').addClass('show');
		$('.navigation ul li:contains("Google Now")').addClass('show');
		$('.navigation ul li:contains("Drawer")').addClass('show');
		$('.navigation ul li:contains("Pull")').addClass('show');
		$('.navigation ul li:contains("Momentum 2")').addClass('show');
	}
});

// Disable overscroll / viewport moving on everything but scrollable divs
document.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault();
  },
  false
); 