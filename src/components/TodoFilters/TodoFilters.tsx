import React from "react";
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./Filter.Components";

interface TodoFiltersProps {
  total: number;
  activeFilter: string;
  showAllTodos: () => void;
  showActiveTodos: () => void;
  showCompletedTodos: () => void;
  handleClearComplete: () => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <FilterButton action={() => showAllTodos()} active={activeFilter} filter='Todas' />
        <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Activas' />
        <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completadas' />
      </FilterButtonContainer>

      <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-pink-800 cursor-pointer transition-all duration-300 ease-in-out">
        Eliminar Completadas
      </button>
    </FiltersContainer>
  );
}

export default TodoFilters ;