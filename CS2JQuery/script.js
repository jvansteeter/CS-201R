$(document).ready(function()
{
  var $body = $("#body");
  var $button = $(".button");

  var weatherApp;
  var bounceApp;
  $.ajax(
  {
      url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/8361c7c4ca28450e3e74c06798e0928b8a1e07f1",
      dataType : "jsonp",
      success : function(data)
      {
          //console.log(data);
          var theThing = data['data']['content'];
          //console.log(theThing);
          var decode = atob(theThing);
          weatherApp = "" + decode;
          //console.log(String(code));
      }
  })

  $.ajax(
  {
    url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/1808de1eb30bd4f1729f77d533893a0130ba27a9",
    dataType : "jsonp",
    success : function(data)
    {
      var content = data['data']['content'];
      bounceApp = atob(content);
    }
  })

  var container = $('#container'); 
   $("#weatherbutton").click(function(e)
   {
      console.log(container.html());
      //$("#container").html("<p>Yep, definitely a test.</p>");
      

      console.log(String(weatherApp));
      container.html(String(weatherApp));
      //console.log(container.html());

      $('.button').each(function(e)
      {
        
      });
        //var display = $('#weather').html(code);
        //console.log(display);
   });// end click function

   $("#bouncebutton").click(function(e)
   {
      console.log(String(bounceApp));
      container.html(String(bounceApp));

      $('.button').each(function(e)
      {
        
      });
   }); // end click function

});// end read function