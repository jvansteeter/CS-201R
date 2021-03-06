$(document).ready(function()
{
  var $body = $("#body");
  var $button = $(".button");

  var weatherApp;
  var bounceApp;
  var sliderApp;
  var calcApp;
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
    url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/22e1807c9bc66921816fbcb2891fa7ed6305cabb",
    dataType : "jsonp",
    success : function(data)
    {
      var content = data['data']['content'];
      sliderApp = atob(content);
    }
  })

  $.ajax(
  {
    url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/a1e28775da8ff076627a87930be1f77d0d44e65c",
    dataType : "jsonp",
    success : function(data)
    {
      var content = data['data']['content'];
      calcApp = atob(content);
    }
  })

  var container = $('#container'); 
   $("#weatherbutton").click(function(e)
   {
      console.log(String(weatherApp));
      container.html("");
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
      container.html("");
      container.html(String(bounceApp));

      $('.button').each(function(e)
      {
        
      });
   }); // end click function

   $("#calcbutton").click(function(e)
   {
    console.log(String(calcApp));
    container.html(String(calcApp));

   }); // end click function

});// end read function