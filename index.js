"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authorize_1 = __importDefault(require("./middlewares/authorize"));
const constants = __importStar(require("./misc/constants"));
const root_path = __importStar(require("./routes/root_path"));
const register_path = __importStar(require("./routes/register_path"));
const login_path = __importStar(require("./routes/login_path"));
const mycv_path = __importStar(require("./routes/mycv_path"));
const reset_password_path = __importStar(require("./routes/reset_password_path"));
const app = (0, express_1.default)();
// enable all CORS requests
app.use((0, cors_1.default)());
// compress all responses
app.use((0, compression_1.default)());
// handle POST application/json
app.use(express_1.default.json());
// handle POST application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// configure routes
app.use("/", root_path.router);
app.use("/register", register_path.router);
app.use("/login", login_path.router);
app.use("/mycv", authorize_1.default, mycv_path.router);
app.use("/reset_password", reset_password_path.router);
// connect database
mongoose_1.default
    .connect(constants.kDBHost)
    .then(() => {
    // start server
    app.listen(constants.kPort, () => {
        console.log(`starting server at ${constants.url()}`);
    });
})
    .catch((err) => {
    console.log(`Error: ${err}`);
});
//# sourceMappingURL=index.js.map