const loginbtn = document.getElementById("loginBtn");
loginbtn.addEventListener("click",()=>{
      const idpass = document.getElementsByClassName("text");
      const id = idpass[0].value;
      const password = idpass[1].value;
      console.log(id);
      console.log(password);

      // Now, check whether the password is matched with value fetched from mysql, if yes then check id and according to id, show the table.
      fetch("http://localhost:5000/getAll")
        .then((response) => response.json())
        .then((data) => {
          console.log(data["data"]);
          console.log(data.data[0].Password);
          if(password == data.data[0].Password){
              
              const submit = document.getElementById("submitBtn");
              submit.addEventListener("click", () => {
                const allvalues = document.getElementsByClassName("text");
                const weight = allvalues[0].value;
                const boxcount = allvalues[1].value;
                const quantity = allvalues[2].value;
                const owner = allvalues[3].value;

                fetch("http://localhost:5000/insert", {
                  headers: {
                    "Content-type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({
                    weight: weight,
                    boxcount: boxcount,
                    quantity: quantity,
                    owner: owner,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => insertRowIntoTable(data));
              });
              console.log("data writing done.");
          }
          else{
            console.log("error in writingdata")
          }
          
        })
        .catch((error) => console.log(error));

        
        // here, you are getting the data.(for now, it is empty array)

        // Now, you have to matched the fetched data with the above values. And according to that show the tables. And if he is customer, then there is a submit button also. So , you have to make a post request also.

        // for now, I am making a submit button simply, not the table(I will make it later)
        
        // below code should under if condition(that is when the password matched then show the table and then on clicking the submit button, data gets write in the DB)

        

});

// creating function for inserting data into table which run on clicking the submit button.

function insertRowIntoTable(data){

}


