const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

async function getBoomTownInfo() {
  try {
    const response = await axios.get("http://api.github.com/orgs/boomtownroi");
    var origResponse = response.data;
    var valueArray = Object.values(origResponse);
    var singleValue = valueArray[4];
    var singleValConvert = JSON.stringify(singleValue);
    console.log(singleValConvert);

    if (singleValConvert.includes("api.github.com/orgs/BoomTownROI")) {
      console.log("SUCCESS");
      console.log(singleValConvert);
    }

    // for (let i = 0; i < valueArray.length; i++) {
    //   if (valueArray.includes("api.github.com/orgs/boomtownroi"));
    // }
  } catch (error) {
    console.log(error);
  }
}
getBoomTownInfo();

// async function getBoomTownInfo() {
//   try {
//       const response = await axios.all([
//           axios.get("http://api.github.com/orgs/boomtownroi"),
//       axios.get("https://api.github.com/orgs/BoomTownROI/events"),
//         axios.get("https://api.github.com/orgs/BoomTownROI/hooks"),
//       axios.get("https://api.github.com/orgs/BoomTownROI/issues"),
//       axios.get("https://api.github.com/orgs/BoomTownROI/members{/member}"),
//              axios.get("https://api.github.com/orgs/BoomTownROI/public_members{/member}"),
//              axios.get("https://api.github.com/orgs/BoomTownROI/public_members{/member}")
//       ])
//     then(axio.spread(url1, url2, url3, url4, url5, url6) => {
//     console.log(url1.data.id);
//     //   });

//   } catch (error) {
//     console.log(error);
//   }
// }
// getBoomTownInfo();

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
