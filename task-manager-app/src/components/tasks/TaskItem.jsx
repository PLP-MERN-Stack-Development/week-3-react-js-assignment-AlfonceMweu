// TaskItem.jsx
const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-md shadow">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
        />
        <span className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
          {task.text}
        </span>
      </div>
      <Button 
        variant="danger" 
        size="small" 
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </li>
  );
};