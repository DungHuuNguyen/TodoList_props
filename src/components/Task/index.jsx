import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";
import Divider from "../Divider";
import "./style.scss";

// jsx bắt buộc phải có 1 tag wrapper lại nội dung => sử dụng cặp thẻ <></ >
// hoặc React.Fragment (cả 2 đều giống nhau)

const Task = (props) => {
  return (
    <>
      <div className="task">
        <p className={`task__name ${props?.isDone ? "task__name--done" : ""}`}>
          {props.taskName}
        </p>
        <div className="task__group-btn">
          <button className="task__btn-done">
            <CheckOutlined />
          </button>
          <button className="task__btn-del">
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
