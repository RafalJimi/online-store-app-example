const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

require("dotenv").config({ path: "./server/config/config.env", debug: true });

connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.route.js");
const adminRouter = require("./routes/admin.route");

app.use("/api/", authRouter);
app.use("/api/admin", adminRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});