 function returnHome() {
	ratio = $(":root").css('--background-ratio');
	// window.scroll((ratio * 2100), (ratio * 12300));
	window.scroll(6200, 10800);
}

 function aud_play_pause() {
     var myAudio = document.getElementById("audio");
     if (audio.paused) {
       audio.play();
     } else {
       audio.pause();
     }
   }

function PopUp(hideOrshow) {
       if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
       else document.getElementById('ac-wrapper').removeAttribute('style');
   }
   window.onload = function () {
       setTimeout(function () {
           PopUp('show');
       }, 1);
   };

function delWindow(el) {
  el = '#' + el;

  $(el).css({
    'display': 'none'
  });
 }

function incr() {
  var v1=document.getElementById('progressbar').value;
  console.log(v1);
  document.getElementById("progressbar").value= v1 + 5;
}

function loadPopUp(el, div) {
  el = '#' + el;

  incr();


  if ($(el).css('display') === 'block') {
    $(el).css({
      'display': 'none'
    });
  } else {
  	$(el).css({
      'display': 'block'
  });
  	// Coor = getCoordinates(div)
  	// console.log(Coor[0])
  	// $(el).css({
   //    'position': 'absolute',
   //    'left': Coor[0] + 'px',
   //    'top': Coor[1] + 'px'
   //  })	
  
};
}

function loadPopUpNonInc(el, div) {
  el = '#' + el;


  if ($(el).css('display') === 'block') {
    $(el).css({
      'display': 'none'
    });
  } else {
  	$(el).css({
      'display': 'block'
  });
  	// Coor = getCoordinates(div)
  	// console.log(Coor[0])
  	// $(el).css({
   //    'position': 'absolute',
   //    'left': Coor[0] + 'px',
   //    'top': Coor[1] + 'px'
   //  })	
  
};
}

// This function is used for image setup. It can be used to see where a background img is and will return the coordinates in the console. 
// Scroll to a background img where you want the object use inspect to see which img it is. 
// Change the img tag to include onload="getCoordinates(this)" which will initiate this function and load the left and top coordinates into the console
// Add the left and top coordinates to the css for the img you want to get to that location. Then you just need to tweak it a bit to get the right spot. 
function getCoordinates(el) {
	xCor = (el.getBoundingClientRect()).x;
	yCor = (el.getBoundingClientRect()).y;
	Coor = [(xCor + window.scrollX), (yCor + window.scrollY)];
	console.log(Coor);
	console.log(el.getBoundingClientRect());
	return Coor;
}

// $('#buttonFade').on('click', function() {
//     if ($('#alertBox').css('opacity') == 0) $('#alertBox').css('opacity', 1);
//     else $('#alertBox').css('opacity', 0);
// });




// EDGE SCROLLING 
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) == false) {

		var edgeSize = 100;
		var timer = null;

		window.addEventListener( "mousemove", handleMousemove, false );

		drawGridLines();

		function handleMousemove( event ) {

			var viewportX = event.clientX;
			var viewportY = event.clientY;

			var viewportWidth = document.documentElement.clientWidth;
			var viewportHeight = document.documentElement.clientHeight;

			var edgeTop = edgeSize;
			var edgeLeft = edgeSize;
			var edgeBottom = ( viewportHeight - edgeSize );
			var edgeRight = ( viewportWidth - edgeSize );

			var isInLeftEdge = ( viewportX < edgeLeft );
			var isInRightEdge = ( viewportX > edgeRight );
			var isInTopEdge = ( viewportY < edgeTop );
			var isInBottomEdge = ( viewportY > edgeBottom );

			if ( ! ( isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge ) ) {

				clearTimeout( timer );
				return;

			}

			var documentWidth = Math.max(
				document.body.scrollWidth,
				document.body.offsetWidth,
				document.body.clientWidth,
				document.documentElement.scrollWidth,
				document.documentElement.offsetWidth,
				document.documentElement.clientWidth
			);
			var documentHeight = Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.body.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight,
				document.documentElement.clientHeight
			);

			var maxScrollX = ( documentWidth - viewportWidth );
			var maxScrollY = ( documentHeight - viewportHeight );

			(function checkForWindowScroll() {

				clearTimeout( timer );

				if ( adjustWindowScroll() ) {

					timer = setTimeout( checkForWindowScroll, 30 );

				}

			})();

			function adjustWindowScroll() {

				var currentScrollX = window.pageXOffset;
				var currentScrollY = window.pageYOffset;

				var canScrollUp = ( currentScrollY > 0 );
				var canScrollDown = ( currentScrollY < maxScrollY );
				var canScrollLeft = ( currentScrollX > 0 );
				var canScrollRight = ( currentScrollX < maxScrollX );

				var nextScrollX = currentScrollX;
				var nextScrollY = currentScrollY;

// CHANGE EDGE SCROLLING INTENSITY:

				var maxStep = 20;

				if ( isInLeftEdge && canScrollLeft ) {

					var intensity = ( ( edgeLeft - viewportX ) / edgeSize );

					nextScrollX = ( nextScrollX - ( maxStep * intensity ) );

				} else if ( isInRightEdge && canScrollRight ) {

					var intensity = ( ( viewportX - edgeRight ) / edgeSize );

					nextScrollX = ( nextScrollX + ( maxStep * intensity ) );

				}

				if ( isInTopEdge && canScrollUp ) {

					var intensity = ( ( edgeTop - viewportY ) / edgeSize );

					nextScrollY = ( nextScrollY - ( maxStep * intensity ) );

				} else if ( isInBottomEdge && canScrollDown ) {

					var intensity = ( ( viewportY - edgeBottom ) / edgeSize );

					nextScrollY = ( nextScrollY + ( maxStep * intensity ) );

				}

				nextScrollX = Math.max( 0, Math.min( maxScrollX, nextScrollX ) );
				nextScrollY = Math.max( 0, Math.min( maxScrollY, nextScrollY ) );

				if (
					( nextScrollX !== currentScrollX ) ||
					( nextScrollY !== currentScrollY )
					) {

					window.scrollTo( nextScrollX, nextScrollY );
					return( true );

				} else {

					return( false );

				}

			}

		} 

	}
