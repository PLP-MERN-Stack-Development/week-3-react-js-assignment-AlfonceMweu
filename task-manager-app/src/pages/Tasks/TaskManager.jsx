// Updated TaskManager.jsx using context
import { useTasks } from '../../context/TaskContext';
import { useState } from 'react';
import TaskForm from '../../components/tasks/TaskForm';
import TaskList from '../../components/tasks/TaskList';
import TaskFilter from '../../components/tasks/TaskFilter';

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList 
        tasks={filteredTasks} 
        onToggle={toggleTask} 
        onDelete={deleteTask} 
      />
    </div>
  );
};