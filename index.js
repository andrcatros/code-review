const {
  getCommitToSplit,
  checkout,
  reset,
  push,
  pushMaster,
  constructNewPRUrl,
} = require("./utils/gitUtils");

const commitToSplit = getCommitToSplit();
console.log(
  `branching out from ${commitToSplit.hash} at ${commitToSplit.date}`
);
checkout("code-review", true);
checkout("master");
reset(commitToSplit.hash);
pushMaster(commitToSplit.hash);
push("code-review");
const url = constructNewPRUrl();
console.log("\033[31mUse the URL below to create a new PR\n");
console.log(url);
console.log("\x1b[0m");
