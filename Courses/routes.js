import Database from "../Kanbas/Database/index.js";
export default function CourseRoutesFromLecture(app) {
  
  const finadAllCourses = (req, res) => {
    res.json(Database.courses);
  }
  const findCourseById = (req, res) => {
    const id = req.params.id;
    const course = Database.courses.find(course => course.id === id);
    res.json(course);
  }
  app.get("/api/courses", finadAllCourses);
  app.get("/api/courses/:id", findCourseById);
  
}
