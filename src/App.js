import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import {DndContext} from '@dnd-kit/core';
// import {Draggable} from '@dnd-kit/Draggable';
// import {Droppable} from '@dnd-kit/Droppable';

function App () {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="todo-app">

        <TodoList />
      
    </div>
    </DndProvider>
  );
}



export default App;