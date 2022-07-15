const global = require ('../config.js');
const oracledb = require('oracledb');

db ={
    user: global.USER,
    password: global.PASSWORD,
    connectString: global.CONNECT_STRING
}

async function open(sql, binds, autoCommit){
    let con = await oracledb.getConnection(db);
    let result = await con.execute(sql, binds,{autoCommit});
    con.release();
    return result;
}

exports.Open = open;
