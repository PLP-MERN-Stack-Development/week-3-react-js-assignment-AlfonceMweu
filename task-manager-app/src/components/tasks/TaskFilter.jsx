// TaskFilter.jsx
const TaskFilter = ({ filter, setFilter }) => {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {filters.map((f) => (
        <Button
          key={f.value}
          variant={filter === f.value ? 'primary' : 'secondary'}
          size="small"
          onClick={() => setFilter(f.value)}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
};