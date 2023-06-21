import "antd/dist/reset.css";
import "./App.scss";
import { Pagination } from "antd";
import Task from "./components/Task";
import FormInputTask from "./components/FormInputTask";

const listTask = [
  {
    id: 1,
    taskName: "Task 1",
    isDone: false,
  },
  {
    id: 2,
    taskName: "Task 2",
    isDone: false,
  },
  {
    id: 3,
    taskName: "Task 3",
    isDone: true,
  },
  {
    id: 4,
    taskName: "Task 4",
    isDone: false,
  },
];

function App() {
  //  Trường hợp render list thì React cần được cc key cho mỗi item để tối ưu render
  const renderTaskList = (tasks) => {
    return tasks.map((task) => {
      return <Task key={task.id} />;
    });
  };

  // const renderTaskList = (tasks) =>
  //   tasks.map((task) => (
  //     <Task key={task.id} taskName={task.taskName} isDone={task.isDone} />
  //   ));

  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <FormInputTask />
          <div className="todo-list-main">{renderTaskList(listTask)}</div>

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
