import "antd/dist/reset.css";
import "./App.scss";
import { Pagination } from "antd";
import Task from "./components/Task";
import FormInputTask from "./components/FormInputTask";
import { useState } from "react";
import KEY_TASK_LIST from "./constants";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem(KEY_TASK_LIST)) || []
  );

  //  Trường hợp render list thì React cần được cc key cho mỗi item để tối ưu render
  const renderTaskList = (listTasks) => {
    return listTasks.map((task) => {
      return (
        <Task
          key={task.id}
          task={task}
          handleRemoveTask={handleRemoveTask}
          handleMakeDoneTask={handleMakeDoneTask}
        />
      );
    });
  };

  const handleAddTask = (_inputTask) => {
    const task = {
      id: new Date().getTime(),
      taskName: _inputTask,
      isDone: false,
    };
    setTaskList([task, ...taskList]);
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify([task, ...taskList]));
  };

  const handleRemoveTask = (id) => {
    // console.log(id);
    const taskListClone = taskList.filter((task) => task.id !== id);
    setTaskList(taskListClone);
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(taskListClone));
  };

  const handleMakeDoneTask = (id) => {
    const existedIndexTask = taskList.findIndex((task) => task.id === id);
    const taskListClone = [...taskList];
    taskListClone[existedIndexTask] = {
      ...taskListClone[existedIndexTask],
      isDone: true,
    };
    setTaskList(taskListClone);
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(taskListClone));
  };

  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <FormInputTask handleAddTask={handleAddTask} />
          <div className="todo-list-main">{renderTaskList(taskList)}</div>

          <div className="divider"></div>
          <div className="todo-list-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
