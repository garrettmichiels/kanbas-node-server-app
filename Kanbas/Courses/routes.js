import * as dao from "./dao.js";
export default function CourseRoutes(app) {

  //get course by id NEED TO FIGURE OUT WHY THIS ISN'T WORKING
  app.get("/api/courses/:id", async (req, res) => {
    // const { id } = req.params;
    // const course = await dao.findCourseById(id);
    // res.send("course");
    // console.log("req.params", "something");
  });

  //update course
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course);
    res.json(status);
  });

  //Delete course by id
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });

  //Create course
  app.post("/api/courses", async (req, res) => {
    console.log("req.body", req.body);
    const course = { ...req.body,
      id: new Date().getTime().toString() };
    const status = await dao.createCourse(course);
    if (status) {
      res.send(course);
    }
    else {
      res.status(400).send("Error creating course");
    }
  });
  
  //Get all courses
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });
}