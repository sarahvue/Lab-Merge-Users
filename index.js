require("datejs");
const username1 = ["sodaGirl1", "Poppy555"];
const username2 = ["helloWorld26", "codingpal09"];
const username3 = ["imBatman2", "flash99"];

function combineUsers(...usernames) {
  const combinedObject = {
    users: [],
  };

  for (let user of usernames) {
    combinedObject.users = [...combinedObject.users, ...user];
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

const allUsers = combineUsers(username1, username2, username3);
console.log(allUsers);

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
