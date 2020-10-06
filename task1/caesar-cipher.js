const { processData } = require("./src/processData.js");
const {
  getOutputFile,
  getInputFile,
  checkArgs,
} = require("./src/handleConsole.js");

checkArgs();
processData(getInputFile(), getOutputFile());
