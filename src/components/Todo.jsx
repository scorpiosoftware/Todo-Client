import { useState } from "react"
import TodoItem from "./TodoItem";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
    const [todoList,setTodoList] = useState([])
    return (
        <div>
            <Header />
            <div className="mt-3">
                <Form todoList={todoList} setTodoList={setTodoList} />
                <TodoList todoList={todoList} setTodoList={setTodoList}/>
            </div>
        </div>
    )
}