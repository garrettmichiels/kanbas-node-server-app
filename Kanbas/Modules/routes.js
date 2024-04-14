import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  
    // Update module
    app.put("/api/modules/:mid", async (req, res) => {
      const { moduleId } = req.params;
      console.log("module", req.body);
      console.log("module", req.body.id);
      const status = await dao.updateModule(moduleId, req.body);
      res.json(status);
      });
    
    // Delete Module
    app.delete("/api/modules/:mid", async (req, res) => {
      const { mid } = req.params;
      const status = await dao.deleteModule(mid);
      res.json(status);
      });
    
    //Create module for course with id cid
    app.post("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        console.log("req.body", req.body);
        const newModule = {
          ...req.body,
          course: cid,
          id: Date.now().toString(),
        };
        console.log("After initialized", newModule);
        const status = await dao.createModule(newModule);
        if (status) {
          res.send(newModule);
        } else {
          res.status(400).send("Error creating module");
        }
      });
    
  // Get all modules for course with id cid
  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesForCourse(cid)
    res.send(modules);
  });
}
export default ModuleRoutes;