const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Task Manager App. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;