import { useState } from "react";

export default function Form({ todoList, setTodoList }) {
    // const [todo,setTodo] = useState("");
    const [todo, setTodo] = useState({ name: "", done: false });
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.name != '') {
            setTodoList([...todoList, todo.name]);
        }
        setTodo({name:''});
    }
    return (
        <form onSubmit={handleSubmit} action="" method="post" className="bg-yellow-400 p-4 max-w-xl rounded-xl shadow-2xl mx-auto flex items-center gap-2 justify-center">
            <input onChange={(e) => setTodo({name:e.target.value})} className="bg-white rounded-md border w-96 h-12 p-2" type="text" name="todo" value={todo.name} id="" />
            <button className="px-16 py-2 border text-white font-bold border-black border-2 rounded-sm shadow-xl bg-blue-400" type="submit">Add</button>
        </form>
    );
}