const fs = require("fs");
const { coder } = require("./processStream.js");
const { pipeline } = require("stream");

function processData(inputFile, outputFile) {
  const source = inputFile ? fs.createReadStream(inputFile) : process.stdin;
  let result = process.stdout;
  if (outputFile) {
    result = fs.createWriteStream(outputFile, { flags: "a" });
  }
  pipeline(source, coder, result, (err) => {
    if (err) {
      process.stderr.write(err.message + "\n");
      process.exit(1);
    }
  });
}

module.exports = {
  processData,
};
