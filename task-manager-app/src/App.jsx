import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import TaskManager from './pages/Tasks/TaskManager';
import ApiDataList from './pages/ApiDemo/ApiDataList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api-data" element={<ApiDataList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;