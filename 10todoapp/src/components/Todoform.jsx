import React,{useState} from "react"
import { useTodo } from "../context"
function Todoform() {
    const [todo,setTodo]=useState()
    const {addTodo}=useTodo()
    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;
        addTodo({todo:todo,completed:false})
        setTodo("");



    }
    

    return (
        <form onSubmit={add} className="flex">
            
                <input type="text" placeholder="What to do..." className="outline-none p-3 w-full bg-slate-700 rounded-l-lg font-mono" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button type="submit" className="bg-sky-500 py-3 px-5 text-center rounded-r-lg shrink-0 text-lg font-mono hover:bg-sky-700">ADD</button>
                


            
        </form>

    )
}
export default Todoform;