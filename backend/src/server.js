const app = require("./app");
const env = require("./config/env");
const { connectDatabase } = require("./config/database");

const PORT = env.port;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`CampusAI Backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();