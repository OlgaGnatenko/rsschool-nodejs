const stream = require("stream");
const { getShift, getAction } = require("./handleConsole.js");
const { encoder } = require("./cipher.js");

const coder = new stream.Transform({ objectMode: true });

coder._transform = function (text, encoding, done) {
  try {
    done(null, encoder(text.toString(), getShift(), getAction()));
  } catch (err) {
    done(err);
  }
};

module.exports = { coder };
