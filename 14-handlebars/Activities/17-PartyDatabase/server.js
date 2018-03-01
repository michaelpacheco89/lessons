var orm = require("./Unsolved/orm.js");

orm.selectAndOrder("party_name", "parties","party_cost");

orm.selectWhere("parties", "party_name", "Top Gun");
