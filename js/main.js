$(function(){

  ////////// $GLOBALS //////////

  var $main_nav = $('header').find('nav').find('a'),
      $sub_nav = $('#gallery').find('section').find('nav').find('a'),
      $fancy_img = $("#gallery").find('section').find('div').find('a'),
      $show_first = $('#illustration');

  ////////// NAVIGATION //////////

  $('section').hide(); //intially hide all sections
  $show_first.show().find('div').hide().first().show(); //show illustration on start

  $main_nav.click(function(e){
    var selected = $(this).attr('href');
    $('section').hide(); //hide all sections
    $(selected).show(); //show the selected section
    $(selected).find('div').hide(); // hide divs within newly shown section
    $(selected).find('div').first().show(); //show first div in the section
  });

  $sub_nav.click(function(){
    var selected = $(this).attr('href');
    console.log(selected);
    $(this).parents('section').find('div').hide(); // hide divs within this section
    $(selected).show(); //show first div in the section
  });

  ////////// FANCY BOX GALLERIES //////////

  $fancy_img.fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });

});