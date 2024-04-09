import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";

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
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);