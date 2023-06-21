import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import Divider from "../Divider";
import "./style.scss";

// jsx bắt buộc phải có 1 tag wrapper lại nội dung => sử dụng cặp thẻ <></ >
// hoặc React.Fragment (cả 2 đều giống nhau)

const Task = (props) => {
  const { id, taskName, isDone } = props.task;
  const { handleRemoveTask, handleMakeDoneTask } = props;

  return (
    <>
      <div className="task">
        <p className={`task__name ${isDone ? "task__name--done" : ""}`}>
          {taskName}
        </p>
        <div className="task__group-btn">
          <button
            className="task__btn-done"
            onClick={() => {
              handleMakeDoneTask(id);
            }}
          >
            <CheckOutlined />
          </button>
          <button
            className="task__btn-del"
            onClick={() => {
              handleRemoveTask(id);
            }}
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
      {/* Đường gạch ngang */}
      <Divider />
    </>
  );
};

export default Task;
