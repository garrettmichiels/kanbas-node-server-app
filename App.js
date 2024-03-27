import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from "./Courses/routes.js";
import cors from "cors";
// import session from "express-session";

mongoose.connect("mongodb://localhost:27017/kanbas");

const app = express();
app.use(cors());
app.use(express.json());
// app.use(
//     session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },}));

Hello(app);
CourseRoutes(app);
Lab5(app);

app.listen(4000);