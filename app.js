const express = require("express");
const axios = require("axios");

async function getBoomTownInfo() {
  try {
    const response = await axios.get("http://api.github.com/orgs/boomtownroi");
    var origResponse = response.data;
    var valueArray = Object.values(origResponse);
    var singleValue = valueArray[5];
    var singleValToString = JSON.stringify(singleValue);
    console.log(singleValToString);
    if (
      singleValToString.includes("api.github.com/orgs/BoomTownROI") &&
      response.status == 200
    ) {
      console.log("SUCCESS");
      console.log(origResponse.id);
    } else {
      console.log(origResponse);
    }
  } catch (error) {
    console.log(error);
  }
}
getBoomTownInfo();

// axios.get("http://api.github.com/orgs/boomtownroi"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/events"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/hooks"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/issues"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/members{/member}"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/public_members{/member}"),
//   axios.get("https://api.github.com/orgs/BoomTownROI/public_members{/member}");
//       ])
//     then(axio.spread(url1, url2, url3, url4, url5, url6) => {
//     console.log(url1.data.id);
//     //   });
