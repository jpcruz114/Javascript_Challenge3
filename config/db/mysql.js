const mysql = require('mysql');
const util = require('util');

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'javascript_challenge_database'
});

mysqlConnection.connect((err) => {
    if(!err){
        console.log('Connection Established Successfully');
    }else{
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = util.promisify(mysqlConnection.query).bind(mysqlConnection);










