$(function(){

  //navigation

  $('section').hide(); //intially hide all sections
  $('#illustration').show(); //show illustration on start
  $('nav').find('a').click(function(){
    var selected = $(this).attr('href');
    $('section').hide(); //hide all sections
    $(selected).show(); //show the selected section
  });

  //fancybox
  $("#gallery").find('a').fancybox({
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