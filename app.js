import express from "express";
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cors from "cors";

import podcasts from "./src/routes/podcast";
import documentaries from "./src/routes/documentary";

dotenv.config();
require("./src/config/sequelize");

const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(cors());
app.use(bodyParser.json());
app.use("/podcasts", podcasts);
app.use("/documentaries", documentaries);

module.exports = app;
