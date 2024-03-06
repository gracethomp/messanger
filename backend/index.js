import express from "express";
import cors from "cors";

import config from "./config.js";
import productRoute from "./src/routes/productRoute.js";
import userRoute from "./src/routes/userRoute.js";
import chatRoute from "./src/routes/chatRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", productRoute, userRoute, chatRoute);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`)
);
