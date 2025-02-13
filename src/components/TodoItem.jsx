import item from "./item.module.css"

export default function TodoItem({item,todoList,setTodoList}){
   
   function handleDelete(item){
      setTodoList(todoList.filter((todo) => todo !== item));
   }

   function handleClick(name){
      const newArray = todoList.map((todo) => todo.name === name ? {...todo,done:!todo.done} : todo);
       console.log(newArray);
   }
  
   return(
    <li onClick={() => handleClick(item)} className='font-bold shadow-md transition-all delay-100 hover:scale-95 p-3 mb-1 flex justify-between'>{item} <button onClick={() => handleDelete(item)} className="px-4 z-10 text-white bg-yellow-400 cursor-pointer py-2 border rounded-full">delete</button></li>
   )
}