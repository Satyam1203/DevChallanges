import React, { useState } from "react";
import styled from "styled-components";

const AddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 0;
`;

const Input = styled.input`
  width: 85%;
  padding: 1.25rem 0.75rem;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  font-family: Montserrat;
  margin-right: 1rem;
  outline: none;
  :focus {
    border: 1px solid #111;
  }
`;

const Button = styled.button`
  padding: 20px 40px;
  background: #6da6f2;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  color: white;
  border: none;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  outline: 0;
  :active {
    background: #7db6ff;
  }
`;

function AddTodo({ add, allTodos }) {
  const [todo, setTodo] = useState("");
  return (
    <AddWrapper>
      <Input
        value={todo}
        placeholder="add details"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={() => {
          if (todo) {
            const newTodo = {
              key: Math.ceil(Math.random() * 1000000),
              title: todo,
              done: false,
            };
            add([...allTodos, newTodo]);
            setTodo("");
          }
        }}
      >
        Add
      </Button>
    </AddWrapper>
  );
}

export default AddTodo;
