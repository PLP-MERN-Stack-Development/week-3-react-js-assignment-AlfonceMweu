import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map(task => 
        task.id === action.payload 
          ? { ...task, completed: !task.completed } 
          : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'SET_TASKS':
      return action.payload;
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [savedTasks, setSavedTasks] = useLocalStorage('tasks', []);
  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  };

  const toggleTask = (id) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const value = {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);