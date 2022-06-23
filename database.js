var mysql = require('mysql2');
var conn = mysql.createConnection({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'yashodha2021',  
  database: 'inventivemechanics_hr' 
}); 
conn.connect(function(err) {
  

    return new Promise( ( resolve, reject )=>{
  
      if( !err ){
  
        resolve(console.log('Database is connected successfully !') )
  
      }
  
      else{
  
        reject( console.log("error") )
  
      }
  
    })
  
});
  
module.exports = conn;