$(document).ready(function()
{
   var $body = $("#body");
   var $button = $("#button");
   
   $button.click(function(e)
   {
        $.ajax(
        {
            url : "https://api.github.com/users/jvansteeter/gists",
            dataType : "jsonp",
            success : function(parsed_json)
            {
                console.log(parsed_json);
               var site = parsed_json['data'][0]['files']['city.html']['raw_url'];
                console.log(site);
            }
        })
        
        $.ajax(
        {
            url : "https://api.github.com/repos/jvansteeter/CS-201R/git/blobs/3de715ae24c941382f77e70ccce76b9b86324dfb",
            dataType : "jsonp",
            success : function(data)
            {
                console.log(data);
                var theThing = data['data']['content'];
                console.log(theThing);
                var decode = atob(theThing);
                console.log(decode);
            }
        })
   });
});