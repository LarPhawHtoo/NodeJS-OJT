"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
require('./config/passport');
//import "dotenv/config"; 
const movie_route_1 = __importDefault(require("./routes/movie.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
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
app.use('/api/users', passport_1.default.authenticate('jwt', { session: false }), user_route_1.default);
app.use('/api/movies', passport_1.default.authenticate('jwt', { session: false }), movie_route_1.default);
app.use("/api", auth_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`[server]:Server is running at https://localhost:${port}`);
});
