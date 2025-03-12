require('dotenv').config();

const { google } = require("googleapis");
const readline = require("readline");

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/oauth2callback"; // Same as in Google Cloud

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline", // Important to get a refresh token
  scope: SCOPES,
});

console.log("Authorize this app by visiting this URL:", authUrl);

// Open the URL in the browser (Fix for Node.js 22+)
import('open').then((open) => open.default(authUrl));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the code from that page here: ", async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  console.log("Your refresh token:", tokens.refresh_token);
  rl.close();
});
