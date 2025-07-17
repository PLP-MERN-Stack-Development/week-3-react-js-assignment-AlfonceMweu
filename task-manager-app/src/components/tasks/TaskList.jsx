// TaskList.jsx
const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400 text-center">No tasks found</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};