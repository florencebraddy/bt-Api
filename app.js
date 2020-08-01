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
//       //check on this
//       console.log(origResponse.id);
//     }
//   } catch (origResponse) {
//     console.log(origResponse);
//   }
// }
// getOutputData();

// async function dateVerification() {
//   try {
//     const response = await axios.get("http://api.github.com/orgs/boomtownroi");
//     var origResponse = response.data;
//     console.log(response.data);
//     if (origResponse.updated_at > origResponse.created_at)
//       console.log("updated_at is later than created_at date");
//   } catch (error) {
//     console.log(error);
//   }
// }
// dateVerification();

// async function repoVerification() {
//   try {
//     const response = await axios.get("http://api.github.com/orgs/boomtownroi");
//     var origResponse = response.data;
//     var publicRepoCount = origResponse.public_repos;
//     // console.log("Public Repo count:", publicRepoCount);

//     var repoURL = origResponse.repos_url;
//     // console.log(repoURL);

//     const repoResponse = await axios.get(
//       "https://api.github.com/orgs/BoomTownROI/repos"
//     );
//     // console.log(repoResponse);

//     var repoArray = repoResponse.data;

//     var repoCount = Object.keys(repoArray).length;
//     // console.log(repoCount);

//     const secondPageResponse = await axios.get(
//       "https://api.github.com/orgs/BoomTownROI/repos?page=2"
//     );

//     var repoArray2 = secondPageResponse.data;
//     // console.log(repoArray2);

//     var secondRepoCount = Object.keys(repoArray2).length;
//     // console.log(secondRepoCount);
//     var totalRepoCount = repoCount + secondRepoCount;
//     // console.log(totalRepoCount);

//     if (publicRepoCount == totalRepoCount) {
//       // console.log("Counts Match");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// repoVerification();
