const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const fileRoutes = require("./routes/file.routes");
const linkRoutes = require("./routes/link.routes");
const noteRoutes = require("./routes/note.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/links", linkRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});
