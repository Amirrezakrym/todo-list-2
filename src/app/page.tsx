import Image from "next/image";

export default function Home() {
  return (
    <>
    <header className="bg-slate-950 p-4">
      <h1 className="text-3xl">Todos 2</h1>
    </header>
    <main className="p-4">
      <input 
      type="text" 
      placeholder="Enter a new todo"
      className="p-2 rounded mr-5 text-slate-900"
      // onChange={(e) => setTodo(e.target.value)}
      // value={todo}
      />
      <button 
      type="button"
      className="border-2 p-2 rounded"
      // onClick={() => addTodo()}
      >Add Todo</button>
      <ul className="mt-5">
        {/* {
          todos.map(todo => (
            <li
            onClick={() => markTodoDone(todo.id)}
             className={`text-3xl ml-5 cursor-pointer ${todo.done ? 'line-through':'no-underline'}`}>
              {todo.value}
            </li>
          ))
        } */}
        
      </ul>
    </main>
    </>
  );
}
