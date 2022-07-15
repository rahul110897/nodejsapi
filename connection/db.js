var sql = require("mysql");

// Connection String to gfg_employees Database
var mysqlConnection = sql.createConnection({
    host: 'localhost',
    user: 'root', //mysql username
    password: 'raj_1108', //mysql password
    database: 'gfg_employees', //your database name
    multipleStatements: true
});

// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Db Connection Succeed");
    }
    else {
        console.log("Db connect Failed \n Error :" + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;