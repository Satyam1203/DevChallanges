import React from "react";
import { Icon } from "@material-ui/core";

import { TaskWrapper, Label, CustomBox } from "./styles-task";

function Task({ todo, allTodos, updateState, show }) {
  const handleCheckboxClick = (e) => {
    const i = allTodos.findIndex((t) => t.key === todo.key);
    let updatedState = [...allTodos];
    updatedState[i].done = e.target.checked;
    updateState(updatedState);
  };
  return (
    <TaskWrapper>
      <Label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => handleCheckboxClick(e)}
        />
        <CustomBox className="checkbox"></CustomBox>
        <span
          style={{
            textDecoration: todo.done ? "line-through" : null,
            color: todo.done ? "#333" : "#000",
          }}
        >
          {todo.title}
        </span>
      </Label>
      {show === "Completed" ? (
        <Icon
          style={{ color: "#BDBDBD", position: "absolute", right: 0 }}
          onClick={() =>
            updateState(allTodos.filter((t) => t.key !== todo.key))
          }
        >
          delete_outline
        </Icon>
      ) : null}
    </TaskWrapper>
  );
}

export default Task;
