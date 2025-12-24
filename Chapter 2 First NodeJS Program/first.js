

console.log("KG Coding is the best...");
const fs = require('fs');
fs.writeFile("output.txt", "Writing File", (err) => {
  if (err) console.log("ERROR OCCURED");
  else console.log("File Written Successfully");
});