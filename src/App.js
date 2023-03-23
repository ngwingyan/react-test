import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import DateDisplay from "./components/Date"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import InspirationalQuote from "./components/InspirationalQuote";

// import {DndContext} from '@dnd-kit/core';
// import {Draggable} from '@dnd-kit/Draggable';
// import {Droppable} from '@dnd-kit/Droppable';

function App () {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="todo-app">
      <InspirationalQuote className="quote" />
      <h1>Plans for Today <DateDisplay /> </h1>
      <TodoList />
    </div>
    </DndProvider>
  );
}



export default App;