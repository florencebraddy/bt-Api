const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;

async function getBoomTownInfo() {
  try {
    const response = await axios.get("http://api.github.com/orgs/boomtownroi");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
getBoomTownInfo();

//   var boomTownRoi = "https://api.github.com/orgs/boomtownroi";
//   var request = new XMLHttpRequest();

//   request.open("GET", boomTownRoi, true);

//   request.onload = function displayInfo() {
//     var data = JSON.parse(this.response);
//     if (request.status == 200) {
//       var allData = data.login[0];
//       document.getElementById("all-data").innerHTML = allData;
//     } else {
//       console.log("error");
//     }
//     console.log(allData);
//   };
//   request.send();
// }

// console.log(allData);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
