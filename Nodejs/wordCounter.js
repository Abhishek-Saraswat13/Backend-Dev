const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  const words = data.trim().split(/\s+/); // split by spaces/newlines
  const wordCount = words[0] === "" ? 0 : words.length;

  fs.writeFile("output.txt", `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt ✅");
  });
});
