(function( $ ) {
  $.fn.photostack = function( settings ) {
    return this.each(function() {
      
      //Default settings
      var opts = $.extend( {
            'speed'         : 500,
            'generatePagination' : false,
            'generateNextPrev' : true,
            'autoplay' : true,
            'next' : 'next',
            'prev' : 'prev',
            'captions' : false
          }, settings),
          image_amount = $(this).find('img').length - 1,
          container = $(this);

      //CSS transform function
      function css_transform(flat) {
        var random_degree = (flat) ? 0 : Math.floor(Math.random() * 41) - 20;
        return {
        '-moz-transform'    :'rotate('+random_degree+'deg)',
        '-webkit-transform' :'rotate('+random_degree+'deg)',
        'transform'         :'rotate('+random_degree+'deg)'
        };
      }

      //Setup Gallery
      container.find('img').each(function(index){
        if (index < image_amount){
          $(this).css(css_transform());
        }
      });

      //Generate Pagination
      if (opts.generatePagination === true) {
        container.append('<ul class="pagination"></ul>');
        for(i=0;i<=image_amount;i++){
          $('<li class="'+ i +'"></li>').appendTo('ul.pagination');
        }
      }

      //Generate Next Prev
      if (opts.generateNextPrev === true) {
        container.append('<div class="'+opts.prev+'"><span>'+opts.prev+'</span></div><div class="'+opts.next+'"><span>'+opts.next+'</span></div>');
      }

      //Animation
      function photoAnimate(){
        var direction = $(this).attr('class'),
            photoToAnimate = 'last';

        switch (direction){
          case 'next':
            photoToAnimate = container.find('img:last');

            break;
          case 'prev':
            photoToAnimate = container.find('img:first');

            break;
        }

        var current_pos = {
          marginLeft  : photoToAnimate.css('margin-left'),
          marginTop   : photoToAnimate.css('margin-top')
        };

        photoToAnimate.animate({
          marginLeft: 250,
          marginTop: -385
        }, opts.speed, function(){
          if (direction === 'next'){
            $(this).insertBefore(container.find('img:first')).animate({
              marginLeft: current_pos.marginLeft,
              marginTop: current_pos.marginTop
            }, opts.speed, function(){
              container.find('img:last').css(css_transform('zero'));
              $(this).css(css_transform());
            });
          } else {
            $(this).appendTo(container).css(css_transform('zero')).animate({
              marginLeft: current_pos.marginLeft,
              marginTop: current_pos.marginTop
            }, opts.speed, function(){
              container.find('img').eq(image_amount - 1).css(css_transform());
            });
          }
        });
      }

      //Bind next and prev to animation
      if (opts.generateNextPrev === true) {
        $('div.' + opts.prev).on('click',photoAnimate);
        $('div.' + opts.next).on('click',photoAnimate);
      }
    });
  };
})( jQuery );