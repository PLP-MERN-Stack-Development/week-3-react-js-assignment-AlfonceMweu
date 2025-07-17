import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to Task Manager</h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          A simple application to manage your tasks and explore API data
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary" className="px-6">
              Go to Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" className="px-6">
              Explore API Data
            </Button>
          </Link>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-3 dark:text-white">Task Features</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>✔️ Add, complete, and delete tasks</li>
            <li>✔️ Filter by status (All/Active/Completed)</li>
            <li>✔️ Persistent storage with localStorage</li>
            <li>✔️ Dark/Light mode toggle</li>
          </ul>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-3 dark:text-white">API Features</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>✔️ Fetch data from JSONPlaceholder</li>
            <li>✔️ Search functionality</li>
            <li>✔️ Load more pagination</li>
            <li>✔️ Loading and error states</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;