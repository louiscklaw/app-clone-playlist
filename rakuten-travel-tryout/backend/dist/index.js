"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const scheduledFunctions_1 = __importDefault(require("./scheduledFunctions"));
const nodemailer_1 = __importDefault(require("./nodemailer"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield nodemailer_1.default.sendMail({
        from: 'from@me.com',
        to: 'to@you.com',
        subject: 'Hello',
        text: 'Hello, World!',
    });
}))();
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT;
// routes
const index_1 = __importDefault(require("./routes/index"));
const hotel_info_1 = __importDefault(require("./routes/hotel_info"));
app.use((0, cors_1.default)());
// init routes
(0, index_1.default)(app, prisma);
(0, hotel_info_1.default)(app, prisma);
// start cron job if any
scheduledFunctions_1.default.start();
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
