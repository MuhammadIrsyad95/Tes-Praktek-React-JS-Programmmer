import storageManager from "./storageManager";

const addCourse = (payload) => {
  const currItem = storageManager.get();
  if (currItem !== null) {
    const combineItem = [...currItem, payload];
    storageManager.set(combineItem);
  } else {
    storageManager.set([payload]);
  }

  return {
    data: payload,
  };
};

const getCourses = () => {
  const result = storageManager.get();
  const response = {
    data: result !== null ? result : [],
  };
  return response;
};

const updateCourse = (courseId, payload) => {
  const listCourses = storageManager.get();
  const updatedCourse = listCourses.map((item) => {
    if (item.id === courseId) {
      return {
        ...item,
        ...payload,
      };
    }
    return item;
  });
  storageManager.set(updatedCourse);
  return {
    data: payload,
  };
};

const deleteCourse = (courseId) => {
  const listCourses = storageManager.get();
  const newCourses = listCourses.filter((item) => item.id !== courseId);

  storageManager.set(newCourses);
};

const courseService = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};

export default courseService;
