const loginbtn = document.getElementById("loginBtn");
loginbtn.addEventListener("click",()=>{
      const idpass = document.getElementsByClassName("text");
      const id = idpass[0].value;
      const password = idpass[1].value;
      console.log(id);
      console.log(password);

      // Now, check whether the password is matched with value fetched from mysql, if yes then check id and according to id, show the table.

      
      fetch(
        "https://juhosiinternshipproject-sankalppyfever.onrender.com/getAll"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data["data"]);
          console.log(data.data[0].Password);
          if (password == data.data[1].Password) {
            console.log("logged in as Customer1!");
            const enterCustomerData = document.getElementById("custData");
            if (enterCustomerData.style.display == "none") {
              enterCustomerData.style.display = "block";
            } else {
              enterCustomerData.style.display = "none";
            }
            const submit = document.getElementById("submitBtn");
            submit.addEventListener("click", () => {
              const allvalues = document.getElementsByClassName("text");
              const weight = allvalues[2].value;
              const boxcount = allvalues[3].value;
              const quantity = allvalues[4].value;
              const owner = allvalues[5].value;
              const item = allvalues[6].value;
              const date = allvalues[7].value;
              const company = allvalues[8].value;
              const shipmentrequest = allvalues[9].value;
              const trackingID = allvalues[10].value;
              const shipmentSize = allvalues[11].value;
              const specification = allvalues[12].value;
              const checklistQuantity = allvalues[13].value;
              // console.log(weight,boxcount,quantity,owner);

              fetch(
                "https://juhosiinternshipproject-sankalppyfever.onrender.com/customer1",
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({
                    weight: weight,
                    boxcount: boxcount,
                    quantity: quantity,
                    owner: owner,
                    item: item,
                    date: date,
                    company: company,
                    shipmentReq: shipmentrequest,
                    trackingID: trackingID,
                    shipmentSize: shipmentSize,
                    specification: specification,
                    checklistQuantity: checklistQuantity,
                  }),
                }
              )
                .then((response) => response.json())
                .then(() => {
                  alert("data writing completed!");
                });
            });
          }
          if (password == data.data[2].Password) {
            console.log("logged in as Customer2!");
            const enterCustomerData = document.getElementById("custData");
            if (enterCustomerData.style.display == "none") {
              enterCustomerData.style.display = "block";
            } else {
              enterCustomerData.style.display = "none";
            }
            const submit = document.getElementById("submitBtn");
            submit.addEventListener("click", () => {
              const allvalues = document.getElementsByClassName("text");
              const weight = allvalues[2].value;
              const boxcount = allvalues[3].value;
              const quantity = allvalues[4].value;
              const owner = allvalues[5].value;
              const item = allvalues[6].value;
              const date = allvalues[7].value;
              const company = allvalues[8].value;
              const shipmentrequest = allvalues[9].value;
              const trackingID = allvalues[10].value;
              const shipmentSize = allvalues[11].value;
              const specification = allvalues[12].value;
              const checklistQuantity = allvalues[13].value;

              fetch(
                "https://juhosiinternshipproject-sankalppyfever.onrender.com/customer2",
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({
                    weight: weight,
                    boxcount: boxcount,
                    quantity: quantity,
                    owner: owner,
                    item: item,
                    date: date,
                    company: company,
                    shipmentReq: shipmentrequest,
                    trackingID: trackingID,
                    shipmentSize: shipmentSize,
                    specification: specification,
                    checklistQuantity: checklistQuantity,
                  }),
                }
              )
                .then((response) => response.json())
                .then(() => {
                  alert("data writing completed!");
                });
            });
          }

          if (password == data.data[0].Password) {
            console.log("logged in as Admin!");
            fetch(
              "https://juhosiinternshipproject-sankalppyfever.onrender.com/admin"
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                let weight = 0;
                let boxcount = 0;
                let quantity = 0;
                data.data.forEach((obj) => {
                  weight += obj.weight;
                  boxcount += obj.boxcount;
                  quantity += obj.quantity;
                });
                console.log(weight); //insert this in the table.
                console.log(boxcount); //insert this in the table.
                console.log(quantity); //insert this in the table.

                const trElementQuantity = document.querySelector(".quantity");
                const tdElementsQuantity =
                  trElementQuantity.querySelectorAll(".td");
                tdElementsQuantity.forEach((td, index) => {
                  if (index == 3) {
                    td.textContent = quantity;
                  }
                });
                const trElementweight = document.querySelector(".weight");
                const tdElementsweight =
                  trElementweight.querySelectorAll(".td");
                tdElementsweight.forEach((td, index) => {
                  if (index == 3) {
                    td.textContent = weight;
                  }
                });
                const trElementboxcount = document.querySelector(".boxcount");
                const tdElementsboxcount =
                  trElementboxcount.querySelectorAll(".td");
                tdElementsboxcount.forEach((td, index) => {
                  if (index == 3) {
                    td.textContent = boxcount;
                  }
                });

                const table = document.getElementById("table");
                if (table.style.display == "none") {
                  table.style.display = "block";
                  table.style.backgroundColor = "red";
                } else {
                  table.style.display = "none";
                }
              });
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


