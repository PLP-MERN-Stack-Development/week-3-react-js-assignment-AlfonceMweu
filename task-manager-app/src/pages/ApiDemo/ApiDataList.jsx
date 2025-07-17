import { useState } from 'react';
import useApi from '../../hooks/useApi';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const ApiDataList = () => {
  const { data, loading, error, loadMore, handleSearch, total } = useApi();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">API Data</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </div>
      </form>

      {error && (
        <Card className="p-4 mb-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
          Error: {error}
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {data.map(post => (
          <Card key={post.id} className="p-4 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-2 dark:text-white">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>

      {loading && (
        <div className="text-center py-4">
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      )}

      {data.length > 0 && data.length < total && (
        <div className="text-center mt-6">
          <Button 
            onClick={loadMore} 
            variant="secondary"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiDataList;