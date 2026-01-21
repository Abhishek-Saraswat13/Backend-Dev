const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = `
--- System Info (${new Date().toLocaleString()}) ---
Platform: ${os.platform()}
CPU: ${os.cpus()[0].model}
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
`;

  fs.appendFile("systemlog.txt", info, (err) => {
    if (err) {
      console.log("Error writing log:", err);
      return;
    }
    console.log("Logged system info ✅");
  });
}, 5000);
