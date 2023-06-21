import axios from "axios";

const TaskApi = {
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}tasks`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  createTask: () => {},
  getIdTask: () => {},
  removeTaskById: () => {},
  updateTaskById: () => {},
};

export default TaskApi;
