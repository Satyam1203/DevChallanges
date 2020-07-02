import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";

import AddTodo from "./AddTodo";
import Task from "./Task";
import { Title, Menu, DeleteBtn, ActiveIndicator } from "./styles";

function TodoApp() {
  const [show, setShow] = useState("All");
  const [indicatorPosition, setIndicatorPosition] = useState("16.5%");
  const [allTodos, setAllTodos] = useState([
    {
      key: 1,
      title: "Do Coding Challanges",
      done: false,
    },
    {
      key: 2,
      title: "Complete the Frontend track",
      done: false,
    },
    {
      key: 3,
      title: "Build a To-Do app with ReactJs",
      done: true,
    },
  ]);

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
      <AddTodo add={setAllTodos} allTodos={allTodos} />

      <div style={{ textAlign: "right" }}>
        {allTodos.map((todo) => {
          {
            if (show === "Active" && todo.done) return null;
            else if (show === "Completed" && !todo.done) return null;
          }
          return (
            <Task
              key={todo.key}
              todo={todo}
              allTodos={allTodos}
              updateState={setAllTodos}
              show={show}
            />
          );
        })}
        {show === "Completed" &&
        allTodos.filter((t) => t.done === true).length ? (
          <DeleteBtn
            onClick={() =>
              setAllTodos(() => allTodos.filter((todo) => todo.done === false))
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
