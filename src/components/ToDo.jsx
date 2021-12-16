import ToDoInput from "./ToDoInput";
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";
function ToDo() {
  const [todos, setTodos] = useState([]);
  const handleTaskCreate = (title) => {
    //console.log(title,"in Todo")
    // const payload = {

    //   id: todos.length + 1
    // };
    axios
      .post("https://json-server-mocker-masai.herokuapp.com/tasks", {
        title,
        status: false
      })
      .then((res) => {
        console.log(res.data);
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/tasks"
    };

    axios(config).then((res) => {
      console.log(res);
      setTodos(res.data);
    });
  }, []);
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  };
  console.log(todos);
  return (
    <>
      <ToDoInput onTaskCreate={handleTaskCreate} />
      {todos.map((todo) => {
        return (
          <ToDoItem
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </>
  );
}

export default ToDo;
