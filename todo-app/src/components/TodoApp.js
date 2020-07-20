import React, { useState, useEffect } from "react";
import Icon from "@material-ui/core/Icon";

import AddTodo from "./AddTodo";
import Task from "./Task";
import { Title, Menu, DeleteBtn, ActiveIndicator } from "./styles";

function TodoApp() {
  const todos1 = JSON.parse(localStorage.getItem("todos")) || [];
  const todos = Object.values(todos1);

  const [change, setChange] = useState(false);
  const [show, setShow] = useState("All");
  const [indicatorPosition, setIndicatorPosition] = useState("16.5%");
  const [allTodos, setAllTodos] = useState(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
    setChange((t) => !t);
  }, [allTodos]);

  return (
    <>
      <Title>#todo</Title>
      <Menu>
        <div
          onClick={(e) => {
            setShow(e.target.innerText);
            setIndicatorPosition("16.5%");
          }}
        >
          All
        </div>
        <div
          onClick={(e) => {
            setShow(e.target.innerText);
            setIndicatorPosition("49.5%");
          }}
        >
          Active
        </div>
        <div
          onClick={(e) => {
            setShow(e.target.innerText);
            setIndicatorPosition("83%");
          }}
        >
          Completed
        </div>
        <ActiveIndicator style={{ left: indicatorPosition }} />
      </Menu>
      <AddTodo add={setAllTodos} allTodos={todos} />

      <div style={{ textAlign: "right" }}>
        {todos.map((todo) => {
          if (show === "Active" && todo.done) return null;
          else if (show === "Completed" && !todo.done) return null;
          return (
            <Task
              key={todo.key}
              todo={todo}
              allTodos={todos}
              updateState={setAllTodos}
              show={show}
            />
          );
        })}
        {show === "Completed" && todos.filter((t) => t.done === true).length ? (
          <DeleteBtn
            onClick={() =>
              setAllTodos(() => todos.filter((todo) => todo.done === false))
            }
          >
            <Icon style={{ fontSize: "12px", margin: "0 5px" }}>
              delete_outline
            </Icon>
            delete all
          </DeleteBtn>
        ) : null}
      </div>
    </>
  );
}

export default TodoApp;
