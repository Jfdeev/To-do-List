import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: false
    },
    {
      id: '3',
      title: 'Aprender Inglês',
      completed: false
    },
    {
      id: '4',
      title: 'Lavar Louça',
      completed: false
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      },
    ];
    setTasks(newTasks);
  };
  
  return <>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} />
    </div>
  </>
};

export default App;
