const minimist = require("minimist");
const fs = require("fs");

const ACTION = ["a", "action"];
const SHIFT = ["s", "shift"];
const INPUT = ["i", "input"];
const OUTPUT = ["o", "output"];

const args = minimist(process.argv.slice(2));

function handleError(err) {
  if (err) {
    process.stderr.write(err.message + "\n");
    process.exit(1);
  }
}

function getAction() {
  return args[ACTION[0]] || args[ACTION[1]];
}

function getShift() {
  return args[SHIFT[0]] || args[SHIFT[1]];
}

function getInputFile() {
  return args[INPUT[0]] || args[INPUT[1]];
}

function getOutputFile() {
  return args[OUTPUT[0]] || args[OUTPUT[1]];
}

function checkArgs() {
  if (!getAction(args)) {
    handleError(
      new Error(
        'Action is a required argument: please provide "--action" - encode or decode'
      )
    );
  }
  if (!getShift(args)) {
    handleError(
      new Error(
        'Shift is a required argument: please provide "--shift" - <integer number>'
      )
    );
  }
  const inputFile = getInputFile(args);
  if (inputFile) {
    fs.access(inputFile, fs.constants.R_OK, (err) => handleError(err));
  }

  const outputFile = getOutputFile(args);
  if (outputFile) {
    fs.access(outputFile, fs.constants.W_OK, (err) => handleError(err));
  }
}

module.exports = {
  checkArgs,
  getAction,
  getShift,
  getInputFile,
  getOutputFile,
};
