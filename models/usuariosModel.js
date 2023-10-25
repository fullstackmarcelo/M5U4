var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password){
    console.log(user);
    console.log(password);
    try {
        var query = "select * from usuarios where nombre = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        console.log(rows[0]);
        return rows[0];
    } catch(error) {
        throw error;
    }
}

module.exports = { getUserByUsernameAndPassword }