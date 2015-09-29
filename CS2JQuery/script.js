$(document).ready(function()
{
  var $body = $("#body");
  var $button = $(".button");

  var code;
  var theThing;
  $.ajax(
  {
      url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/9297dfb20aef5ce99eabdfe4ead54739a8f95d3f",
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
        e.preventDefault();
      })
        //var display = $('#weather').html(code);
        //console.log(display);
   });// end click function
});// end read function