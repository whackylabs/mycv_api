import express from "express";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

import authorize from "./middlewares/authorize"
import * as constants from "./misc/constants"
import * as root_path from "./routes/root_path"
import * as register_path from "./routes/register_path";
import * as login_path from "./routes/login_path";
import * as mycv_path from "./routes/mycv_path";
import * as reset_password_path from "./routes/reset_password_path";

const app = express();

// enable all CORS requests
app.use(cors());

// compress all responses
app.use(compression());

// handle POST application/json
app.use(express.json());

// handle POST application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configure routes
app.use("/", root_path.router);
app.use("/register", register_path.router);
app.use("/login", login_path.router);
app.use("/mycv", authorize, mycv_path.router);
app.use("/reset_password", reset_password_path.router);

// connect database
mongoose
    .connect(constants.kDBHost)
    .then(() => {
        // start server
        app.listen(constants.kPort, () => {
            console.log(`starting server at ${constants.url()}`);
        });
    })
    .catch((err: Error) => {
        console.log(`Error: ${err}`);
    });
