'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { Koulen } from 'next/font/google';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { v4 as uuidv4 } from 'uuid'; // Import UUID for unique IDs

const koulen = Koulen({ subsets: ['latin'], weight: ['400'] });

export default function Preparation() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: uuidv4(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className={clsx('bg-[#E53F71] min-h-screen text-white', koulen.className)}>
      <div className="flex items-center justify-center p-6">
        <Image src="/prep.png" alt="Calendar" width={80} height={80} />
        <h2 className={clsx('text-2xl lg:text-6xl font-bold ml-4', koulen.className)}>PREPARATION</h2>
      </div>
      <div className="flex flex-wrap gap-6 p-8 md:p-16 min-h-screen w-full bg-[#FFE3ED] text-[#E53F71] rounded-t-3xl md:rounded-t-[116px]">
        <div id="header" className="flex-1">
          <h3 className="text-3xl text-center">TO DO:</h3>
          <div className="flex items-center gap-2 mb-4">
            <Checkbox className="w-10 h-10 border-[#E53F71] border-2 checked:bg-green-400" />
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="w-full my-2 p-2 border-[#9C3587] border text-xl"
              placeholder="Enter a new to-do item"
            />
            <button
              onClick={handleAddTodo}
              className="bg-[#E53F71] hover:bg-[#bc3d63] text-white p-3 rounded-lg"
            >
              <Trash2Icon />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-2" id={todo.id}>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="w-10 h-10 border-[#E53F71] border-2 checked:bg-green-400"
                />
                <input
                  value={todo.text}
                  readOnly
                  className={clsx(
                    'w-full p-2 border-[#9C3587] border text-xl',
                    todo.completed && 'line-through'
                  )}
                />
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="bg-[#E53F71] hover:bg-[#bc3d63] text-white p-3 rounded-lg"
                >
                  <Trash2Icon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FFE3ED] px-16 pb-6 flex flex-col lg:flex-row items-center gap-2">
        <button
          onClick={handleAddTodo}
          className="bg-[#E53F71] text-white px-6 py-2 text-xl hover:bg-[#bc3d63] rounded-lg lg:w-1/3 w-full"
        >
          ADD TODO ITEM
        </button>
      </div>
    </div>
  );
}
