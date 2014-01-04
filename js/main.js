$(function(){

  //navigation

  $('section').hide(); //intially hide all sections
  $('nav').find('a').click(function(){
    var selected = $(this).attr('href');
    $('section').hide(); //hide all sections
    $(selected).show(); //show the selected section
  });

  //

});