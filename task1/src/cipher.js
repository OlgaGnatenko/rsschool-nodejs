const DIRECT = "encode";
const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const encoder = (text, shift, mode = DIRECT) => {
  if (mode !== DIRECT) {
    shift *= -1;
  }
  return text
    .split("")
    .map((letter) => {
      const lowerLetter = letter.toLowerCase();
      const index = letters.indexOf(lowerLetter);
      if (index < 0) return letter;
      const isLowerCase = letter === lowerLetter;
      let newIndex = (index + shift) % letters.length;
      if (newIndex < 0) {
        newIndex += letters.length;
      }
      let newLetter = letters[newIndex];
      if (!isLowerCase) {
        newLetter = newLetter.toUpperCase();
      }
      return newLetter;
    })
    .join("");
};

module.exports = { encoder };
