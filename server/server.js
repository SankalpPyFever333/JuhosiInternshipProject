const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const dbServer = require("./dbServer");

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json()); //sends data in json format.

app.use(express.urlencoded({extended:false})); // It is a middleware used to parse the incoming request. It is a part of body-parser middleware package.

// Now, you have to show data from the database upon clicking the button(if he is admin), so use get() or if he is customer, then show the table and when he click submit that data gets write on the database, forthat use post() method.

// upon clicking submit button, write data into database using post():

app.post("/insert" , (request, response)=>{
      console.log(request.body);
      // you get: { weight: 'sankalp', boxcount: 'dhbdhja', quantity: '12', owner: '34' }
      //these value are of the input box.

      const {weight,boxcount,quantity,owner} = request.body;

      const db = dbServer.getdbServerInstance(); 
      const results = db.insertNewData(weight,boxcount,quantity,owner);
      results
        .then((data) => {
          response.json({success:true});
        })
        .catch((err) => console.log(err));


})


// get data

app.get("/getAll", (request, response)=>{
      const db = dbServer.getdbServerInstance(); //create the object of that class.
      const results = db.getAllData();
      // getAllData() is async function, so it returns response as a promise.
      results
      .then((data)=>{
            response.json({ data: data });
      })
      .catch(err=> console.log(err));
      
})

app.listen(process.env.PORT, ()=>{
      console.log("app is running at ",process.env.PORT);
})
