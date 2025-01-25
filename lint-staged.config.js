const { quote } = require("shell-quote");

module.exports = {
  "*.{ts,tsx}": (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => quote([filename]))
      .join(" ");
    return [
      `prettier --write ${escapedFileNames}`,
      "bash -c 'bun run types:check'",
      "bun run lint",
    ];
  },
};
