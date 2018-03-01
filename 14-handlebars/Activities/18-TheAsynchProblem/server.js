var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", myCallback);

 // Data is undefined. Why?
function myCallback(result){
  console.log(result);
}
