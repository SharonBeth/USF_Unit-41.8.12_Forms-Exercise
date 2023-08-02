import './App.css';
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }
    const update = (id, updateTodo) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updateTodo } : todo))
    }
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="TodoList">
            <h3> Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(todo => (<Todo id={todo.id} key={todo.id} task={todo.task} update={update} handleRemove={remove} />))}
            </div>
        </div>
    )
}

export default TodoList;