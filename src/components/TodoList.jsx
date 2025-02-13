import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todoList,setTodoList}) {
    
    return (

        <div className="max-w-xl mx-auto py-20">
            <h1 className="text-4xl font-bold">TODO LIST</h1>
            <ul className="shadow-2xl  p-2 rounded-xl">
            {todoList.map(item => (
                <TodoItem  item={item} todoList={todoList} setTodoList={setTodoList}/>   
            ))}
            </ul>
    
        </div>

    )
}