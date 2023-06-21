import { PlusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import Divider from "../Divider";
import "./style.scss";

const FormInputTask = (props) => {
  const [inputTask, setInputTask] = useState("");

  const { handleAddTask } = props;

  const handleChangeInputTask = (event) => {
    setInputTask(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleAddTask(inputTask);
    setInputTask("");
  };

  return (
    <>
      <div className="todo-list-header">
        <h2 className="todo-list-header__title">To do list application</h2>
        <form className="todo-list-header__form" onSubmit={handleSubmitForm}>
          <Input
            size="large"
            placeholder="Please input task name ..."
            value={inputTask}
            onChange={handleChangeInputTask}
          />
          <button className="todo-list-header__btn-add-task">
            <PlusCircleOutlined style={{ fontSize: "30px" }} />
          </button>
        </form>
        <Divider />
      </div>
    </>
  );
};

export default FormInputTask;
