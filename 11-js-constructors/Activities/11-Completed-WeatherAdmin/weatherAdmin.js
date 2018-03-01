var UserSearch = require("./userSearch");
var fs = require('fs');

function AdminSearch(){
	this.newSearch = function(n,c, callback){
		var test = new UserSearch(n,c);
		test.weatherInfo(callback);//this is what's taking so long

		var theText = "Name: " + test.name + "; Location: " + test.city + "; Date: " + test.date;
		fs.appendFile('log.txt',theText + "\n", function (err) {
		  if (err) throw err;
		});

	};
	this.searches = function(callback){
		fs.readFile('log.txt', function(err, data) {
		    if(err) throw err;
		    var array = data.toString().split("\n");
		    for(i in array) {
		        console.log(array[i]);
		    }
				callback();
		});
	}
};

/*


*/

/*var test = new UserSearch("Test","Los Angeles")

test.weatherInfo();
console.log(test.date)*///Works

/*var test = new AdminSearch;
test.searches();*///Works

/*var test = new AdminSearch;
test.newSearch("Mike","Las Vegas");*///Works

module.exports = AdminSearch;
