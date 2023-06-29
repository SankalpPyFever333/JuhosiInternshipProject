const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
  host: "172.17.128.1",
  user: "SanMusssu",
  password: "sankalp1",
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

  async getCustomer1() {
    try {
      const response = await new Promise((resolve, request) => {
        const query = "SELECT weight from Customer1;";
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
  async getAdmin() {
    try {
      const response = await new Promise((resolve, request) => {
        const query =
          "SELECT weight,quantity,boxcount FROM customer1 UNION ALL SELECT weight,quantity,boxcount FROM customer2;";
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

  async insertNewDataCustomer2(
    weight,
    boxcount,
    quantity,
    owner,
    item,
    date,
    company,
    shipmentReq,
    trackingID,
    shipmentSize,
    specification,
    checklistQuantity
  ) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO customer2 VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
        connection.query(
          query,
          [date, company, owner, item, quantity, weight, shipmentReq,trackingID,shipmentSize,boxcount,specification,checklistQuantity],
          (err, results) => {
            if (err) {
              reject(new Error(err.message));
            }
            resolve(results);
          }
        );
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async insertNewDataCustomer1(
    weight,
    boxcount,
    quantity,
    owner,
    item,
    date,
    company,
    shipmentReq,
    trackingID,
    shipmentSize,
    specification,
    checklistQuantity
  ) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO customer1 VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
        connection.query(
          query,
          [date, company, owner, item, quantity, weight, shipmentReq,trackingID,shipmentSize,boxcount,specification,checklistQuantity],
          (err, results) => {
            if (err) {
              reject(new Error(err.message));
            }
            resolve(results);
          }
        );
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports= dbServer;

