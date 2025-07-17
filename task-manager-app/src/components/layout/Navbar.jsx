import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Task Manager
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/tasks" className="hover:text-blue-600 dark:hover:text-blue-400">
            Tasks
          </Link>
          <Link to="/api-data" className="hover:text-blue-600 dark:hover:text-blue-400">
            API Data
          </Link>
          <Button 
            variant="secondary" 
            size="small" 
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;