import model from "./model.js";

export const createModule = (module) => {
  return model.create(module);
}

export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, module) => model.updateOne({ id: moduleId }, module);
export const deleteModule = (moduleId) => model.deleteOne({ id: moduleId });
export const findModulesForCourse = (courseId) => model.find({ course: courseId });