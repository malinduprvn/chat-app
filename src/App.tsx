import React from 'react';
import './App.css';

import AddComment from './components/addNewComment';
import CommentsList from './components/commentList';


const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <CommentsList />
      <AddComment />
    </div>
  );
};

export default App;