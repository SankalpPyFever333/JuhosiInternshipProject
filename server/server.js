const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const fs = require("fs");
const path = require("path");
const dbServer = require("./dbServer");

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json()); //sends data in json format.

app.use(express.urlencoded({extended:false})); // It is a middleware used to parse the incoming request. It is a part of body-parser middleware package.

// Now, you have to show data from the database upon clicking the button(if he is admin), so use get() or if he is customer, then show the table and when he click submit that data gets write on the database, forthat use post() method.

// upon clicking submit button, write data into database using post():




// get data
const port = process.env.PORT || 5000;
app.get("/getAll", (request, response)=>{
      const db = dbServer.getdbServerInstance(); //create the instance of that class.
      const results = db.getAllData();
      // getAllData() is async function, so it returns response as a promise.
      results
      .then((data)=>{
            response.json({ data: data });
      })
      .catch(err=> console.log(err));
      
})

app.post("/customer1",(request, response)=>{
      console.log(request.body);
      const { weight, boxcount, quantity, owner,item, date,company, shipmentReq,trackingID, shipmentSize,specification,checklistQuantity } = request.body;

      const db = dbServer.getdbServerInstance();
      const results = db.insertNewDataCustomer1(
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
      );
      results
        .then((data) => {
          response.json({ success: true });
        })
        .catch((err) => console.log(err));

})
app.post("/customer2",(request, response)=>{
      console.log(request.body);
      

      const {
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
        checklistQuantity,
      } = request.body;

      const db = dbServer.getdbServerInstance();
      const results = db.insertNewDataCustomer2(
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
      );
      results
        .then((data) => {
          response.json({ success: true });
        })
        .catch((err) => console.log(err));

})

app.get("/admin", (request,response)=>{
      const db = dbServer.getdbServerInstance();
      const results = db.getAdmin();
      results
            .then(data=>{response.json({data: data})})
            .catch(err=> console.log(err));
});

app.get("/", (request, response) => {
  const homepagePath = path.join(__dirname, "..", "client", "login.html");
  const homepage = fs.readFileSync(homepagePath, "utf8");
  response.writeHead(200, { "content-type": "text/html" });
  response.write(homepage);
  response.end();
});




app.listen(process.env.PORT, ()=>{
      console.log("app is running at ",port);
})
