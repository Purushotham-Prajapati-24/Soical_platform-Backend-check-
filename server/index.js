const app = require("./src/app");
const connectDB = require("./src/db/db");

// Connect to database
connectDB();

// Export the app for Vercel
module.exports = app;
