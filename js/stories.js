$(document).ready( function() {
  
   $( ".info" ).click( function() {

     var thing = "#" + $(this).attr( "id" ) + "-things";

     $( thing ).slideToggle( "slow" );

  });

});
