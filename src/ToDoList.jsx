import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style ">
        <FontAwesomeIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="fa-times"
          icon={faTimes}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
