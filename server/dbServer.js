const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
  host: "localhost",
  user: "Muski",
  password: "sankalp",
  database: "juhosi",
  port: 3306,
});

connection.connect((err)=>{
      if(err){
            console.log(err);
      }
      console.log("db "+connection.state);
      
});

class dbServer {
  // making it static bcoz don't want to make object that class for calling this method.
  static getdbServerInstance() {
    return instance ? instance : new dbServer();
    // if instance is null means instance of this class is not created, so create it and return it.
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM idpass;";
        connection.query(query, (err, results) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async insertNewData(weight, boxcount, quantity, owner) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "INSERT INTO customerdata VALUES (?,?,?,?);";
        connection.query(query,[weight,boxcount,quantity,owner], (err, results) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports= dbServer;

