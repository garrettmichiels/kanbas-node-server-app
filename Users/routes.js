// import Database from "../Database";
// export default function UsersRoutes(app) {
//     app.get("/api/users", (req, res) => {
//         // const currentUser = req.session.user['currentUser'];
//         // if (currentUser.roles.includes(:admin:)) {
//             res.json(db.users);
//         // }
//         // else {
//         //     res.status(401).send('Unauthorized');
//         // }
//     });
//     app.put("/api/users/:id", (req, res) => {
//         const id = req.params.id;
//         const user = req.body;
//         db.users[id] = user;
//         res.json(user);
//     }
//     app.post("/api/users/register", (req, res) => {
//         const user = req.body;
//         const existingUser = db.users.find(u => u.username === user.username);
//         if (existingUser) {
//             res.status(400).send('Username already exists');
//             return;
//         }
//         user._id = Date.now().toString();
//         req.session["currentUser"] = user;
//         db.users.push(user);
//         res.json(user);
//     }
//     app.post("/api/users/logout", (req, res) => {
//         req.session.destroy();
//         res.send('Logged out');
// }