const https = require("https");
const http = require("http");
const cron = require("node-cron");
require("dotenv").config();

// HTTP server:
const server = http.createServer();

const websitesToPing = process.env.SITES.split(",");

// Function to send a simple HTTPS GET request to the website
function pingWebsite() {
  if (!websitesToPing) return console.log("No website to ping");

  websitesToPing.forEach((site) =>
    https
      .get(site, (res) => {
        console.log(
          `Ping to ${site} successful. Status code: ${res.statusCode}`
        );
      })
      .on("error", (err) => {
        console.error(`Error pinging ${site}: ${err.message}`);
      })
  );
}

// Cron job to ping the website every 10 minutes
cron.schedule("*/10 * * * *", () => {
  console.log(`Server is running. Pinging every 10 minutes...`);
  pingWebsite();
});

// Home route:
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Server is running. Pinging every 10 minutes...</h1>");
});

server.listen(3000);
