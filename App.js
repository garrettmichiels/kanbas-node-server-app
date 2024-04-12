import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

mongoose.connect("mongodb://localhost:27017/kanbas");

const app = express();
app.use( cors(
  // {
  //   credentials: true,
  //   origin: process.env.FRONTEND_URL
  // }
));

//  const sessionOptions = {
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   };
//   if (process.env.NODE_ENV !== "development") {
//     sessionOptions.proxy = true;
//     sessionOptions.cookie = {
//       sameSite: "none",
//       secure: true,
//       domain: process.env.HTTP_SERVER_DOMAIN,
//     };
//   }
// app.use(session(sessionOptions));
app.use(express.json());

Hello(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);


// app.use(
//     session({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },}));