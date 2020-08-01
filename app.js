const axios = require("axios");

// async function getOutputData() {
//   try {
//     const response = await axios.get("http://api.github.com/orgs/boomtownroi");
//     var origResponse = response.data;
//     var valueArray = Object.values(origResponse);
//     var singleValue = valueArray[5];
//     var singleValToString = JSON.stringify(singleValue);
//     console.log(singleValToString);
//     if (
//       singleValToString.includes("api.github.com/orgs/BoomTownROI") &&
//       response.status == 200
//     ) {
//       console.log("SUCCESS");
//       console.log(origResponse.id);
//     }
//   } catch (origResponse) {
//     console.log(origResponse);
//   }
// }
// getOutputData();

async function verification() {
  try {
    const response = await axios.get("http://api.github.com/orgs/boomtownroi");
    var origResponse = response.data;
    console.log(response.data);
    if (origResponse.updated_at > origResponse.created_at)
      console.log("updated_at is later than created_at date");
  } catch (error) {
    console.log(error);
  }
}
verification();
