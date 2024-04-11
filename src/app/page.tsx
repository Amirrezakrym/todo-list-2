'use client'
export interface TodoObject {
  id: number,
  value: string,
  done:boolean
}

import Image from "next/image";
import { useRef, useEffect, useState } from "react";


const Home = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoObject[]>([]);
  
  const addTodo = () =>{
    setTodos([{ id: 1, value: todo, done: false }, ...todos])
    setTodo("")
  }

  const markTodoDone = () =>{
   
   }
   
  const inputRef = useRef<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  

  return (
    <>
    <header className="bg-slate-950 p-4">
      <h1 className="text-3xl">Todos</h1>
    </header>
    <main className="p-4">
      <input 
      ref={inputRef}
      type="text" 
      placeholder="Enter a new todo"
      className="p-2 rounded mr-5 text-slate-900"
      onChange={(e) => setTodo(e.target.value)}
      value={todo}
      />
      <button 
      type="button"
      className="border-2 p-2 rounded"
      onClick={() => addTodo()}
      >Add Todo</button>
      <ul className="mt-5">
        {
           todos.map(todo => (
            <li
            onClick={() => markTodoDone()}
             className={`text-3xl ml-5 cursor-pointer`}>
              {todo.value}
             </li>
          ))
        }
        
      </ul>
    </main>
    </>
  );
}

export default Home