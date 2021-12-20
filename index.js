const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

require("dotenv").config();

// middlewares
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/api", require("./routes/singleFileRoutes"));
app.use("/user", require("./routes/UserRoute"));
app.use("/states", require("./routes/statesRoute"));
app.use("/lga", require("./routes/LGARoutes"));
app.use("/services", require("./routes/ServicesRoutes"));
app.use("/orders", require("./routes/OrderRoutes"));
app.use("/categories", require("./routes/CategoryRoute"));
app.use("/status", require("./routes/StatusRoutes"));
// mongodb connection
const db = process.env.DBLocal;
if (process.env.NODE_ENV === "production") {
  db = process.env.DBCloud;
  app.use(express.static(`client/build`));
  app.get(`*`, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.heml"));
  });
}

mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection established successfully!");
});

const port = process.env.PORT_SERVER || process.env.PORT_SERVER;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
