import model from "./model.js";

export const createCourse = (course) => {
    return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const updateCourse = (courseId, course) => model.updateOne({ id: courseId }, course);
export const deleteCourse = (courseId) => model.deleteOne({ id: courseId });