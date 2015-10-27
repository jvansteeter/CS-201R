module.exports = function(dir,ext,callback)
{
	var fs = require('fs');
	var path = require('path');
    var toReturn = [];
	fs.readdir(dir, function (err,list) 
	{
		if(err)
		{
			return callback(err);
		}
		else
		{
			for(var i = 0; i < list.length; i++)
			{
				if(path.extname(list[i]) === "." + ext)
				{
					toReturn.push(list[i]);
				}
			}
    		callback(null, toReturn);
		}
	});
    // all went well, call callback with `null` for the error argument
    
};