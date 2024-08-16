import {Todoform,TodoItem} from "../src/components/index.js"
import {useState,useEffect} from "react"
import { TodoProvider } from "./context/TodoContext.js"

function App() {
  const [todos,setTodos]=useState([])
  

  const addTodo=(todo) =>{
    setTodos((prev) => {
      return [...prev,{
        id:Date.now(),
        ...todo
      }]
    })

  }
  const updateTodo=(id,todo)=>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo:prevTodo)));


  }
  const deleteTodo=(id) => {
    setTodos((prev) => prev.filter((prevTodo) =>(prevTodo.id!==id)));
  }
  const toggleComplete=(id) =>{
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
    )
  }
  useEffect(() => {
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos.length>0){
      setTodos(todos)

    }

  },[])
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-sky-950 w-lvw h-lvh text-white box-border">
      <div className=" max-w-3xl mx-auto p-8 ">
        <h1 className="flex justify-center text-3xl font-mono mb-4">
          MANAGE YOUR TODOS
        </h1>
        <div className="mt-8">
          <Todoform/>
          

        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="w-full mt-8">
              <TodoItem todo={todo}/>

            </div>
          ))}
          

        </div>

      </div>



    </div>
  </TodoProvider>
  )
}

export default App
