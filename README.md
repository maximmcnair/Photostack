# Photostack jQuery Plugin (v.Beta)

##Basic HTML structure

<div id="photostack">
  <img src="img/jenniferlo_photo2.jpg" class="image" alt="jenniferlo_photo2">
  <img src="img/jenniferlo_photo4.jpg" class="image" alt="jenniferlo_photo4">
  <img src="img/jenniferlo_photo1.jpg" class="image" alt="jenniferlo_photo1">
  <img src="img/jenniferlo_photo3.jpg" class="image" alt="jenniferlo_photo3">
</div>

##Javascript Initialization

$(document).ready(function(){
  $('#photostack').photostack({
    speed: 800
  });
});

##Options w/ Default
speed (number)
Default is 500 ms

generatePagination (boolean)
Default is false

generateNextPrev (boolean)
Default is true

next (string)
Class for next button.
Default is 'next'

prev (string)
Calss for previous button.
Default is 'prev'

#Future features
captions
autoplay
