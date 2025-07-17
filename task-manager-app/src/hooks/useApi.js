import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';

export default function useApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const limit = 10;

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: newData, total } = await fetchPosts(page, limit, search);
      setData(prev => page === 1 ? newData : [...prev, ...newData]);
      setTotal(total);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const loadMore = () => {
    if (page * limit < total) {
      setPage(prev => prev + 1);
    }
  };

  const handleSearch = (query) => {
    setSearch(query);
    setPage(1);
  };

  return { data, loading, error, loadMore, handleSearch, total };
}