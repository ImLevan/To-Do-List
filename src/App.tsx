import { useEffect, useState } from 'react';
import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Clock from './components/Clock/Clock';

const getLocalItems = () => {
  const list = localStorage.getItem('lists');

  if(list){
    return JSON.parse(list || '');
  }else{
    return [];
  }
  
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(getLocalItems);

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);

  const addTodo = (title: string) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo: Todo = {
      id: lastId + 1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
  }

  const handleSetComplete = (id: number) => {

    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }
      return todo;
    })

    setTodos(updatedList);
  } 

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id: number) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const showAllTodos = () => {
    setActiveFilter('all')
  }

  const showActiveTodos = () => {
    setActiveFilter('active')
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed')
  }
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }
    
  },[activeFilter, todos]);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(todos))
    
  },[todos]);

  return (
    <div className='bg-gray-300 min-h-screen font-inter h-full text-gray-900 flex items-center justify-center py-10 px-5'>
      <div className='container flex flex-col max-w-xl'>
        <Clock />
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete} />
      </div>
        
    </div>
  );
}

export default App;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
