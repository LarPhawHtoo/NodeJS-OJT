"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv/config");
const movie_route_1 = require("./routes/movie.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT;
mongoose_1.default.connect(`${process.env.MONGO_URL}`, {
//useNewUrlParser: true,
//useUnifiedTopology: true
}, err => {
    if (!err) {
        console.log('Database connection successed');
    }
    else {
        console.log('Error in connection ' + err);
    }
});
app.use('/', (0, movie_route_1.movieRoute)());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`[server]:Server is running at https://localhost:${port}`);
});
