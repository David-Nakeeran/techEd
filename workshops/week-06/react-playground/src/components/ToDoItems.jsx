import { useEffect } from "react";

export const ToDoItems = ({ setState, items }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data);
      setState(data);
    };
    fetchData();
  }, []);

  const toDoElements = items.map((element) => {
    return <li key={element.id}>{element.title}</li>;
  });

  return <ul>{toDoElements}</ul>;
};
