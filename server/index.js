import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import keys from "./config/keys";

// importing routes
import authRoutes from "./routes/auth-routes";
import userRoutes from "./routes/regular-routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// connection for mongoose
mongoose.connect(
  keys.mongodb.dbURI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    poolSize: 10,
    writeConcern: {
      j: true,
    },
  },
  () => {
    console.log("connected to mongodb");
  }
);

// routing
app.use("/api", authRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
