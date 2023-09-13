import Todo from "../Todo/Todo";
import TodoFilters from "../TodoFilters/TodoFilters";

interface TodoComponent {
    id: number;
    title: string;
    completed: boolean;
  }

interface TodoListProps {
  todos: TodoComponent[];
  activeFilter: string;
  handleSetComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  handleClearComplete: () => void;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />
      ))}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export default TodoList ;