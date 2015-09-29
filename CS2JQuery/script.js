$(document).ready(function()
{
  var $body = $("#body");
  var $button = $(".button");

  var weatherApp;
  var bounceApp;
  var sliderApp;
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
    url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/bfa7f29519fe6f7333bc05579aeeffd1e5e6ec61",
    dataType : "jsonp",
    success : function(data)
    {
      var content = data['data']['content'];
      bounceApp = atob(content);
    }
  })

  $.ajax(
  {
    url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/b6a770f3121b38d03388db490e82728b32bd11bd",
    dataType : "jsonp",
    success : function(data)
    {
      var content = data['data']['content'];
      sliderApp = atob(content);
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

   $("#sliderbutton").click(function(e)
   {
    console.log(String(sliderApp));
    container.html(String(sliderApp));

   }); // end click function

});// end read function