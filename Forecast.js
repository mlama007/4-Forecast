var main = function() {
  $('.day').click(function(){
    $(this).next().toggle();
 		$(this).find('span').toggle('.glyphicon-minus');
  });
};

$(document).ready(main);