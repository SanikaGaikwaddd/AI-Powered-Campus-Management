const app = require("./app");
const env = require("./config/env");

const PORT = env.port;

app.listen(PORT, () => {
    console.log(`CampusAI Backend running on http://localhost:${PORT}`);
});