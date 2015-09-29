$(document).ready(function()
{
  var $body = $("#body");
  var $button = $(".button");

  var code;
  var theThing;
  $.ajax(
  {
      url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/625479bcbe66ea6306ad79cbfbb2d8425a6e7d60",
      dataType : "jsonp",
      success : function(data)
      {
          //console.log(data);
          var theThing = data['data']['content'];
          //console.log(theThing);
          decode = atob(theThing);
          code = "" + decode;
          console.log(String(code));
      }
  })
   
   $button.click(function(e)
   {
      
      var container = $('#container');
      console.log(container.html());
      //$("#container").html("<p>Yep, definitely a test.</p>");
      

      console.log(String(code));
      container.html(String(code));
      console.log(container.html());

      $('.button').each(function(e)
      {
        
      })
        //var display = $('#weather').html(code);
        //console.log(display);
   });// end click function
});// end read function