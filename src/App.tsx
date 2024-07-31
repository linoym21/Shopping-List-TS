import React from 'react';
import './App.css';
import ScrollTop from './components/ScrollTop';
import CustomizedSelects from './components/CustomizedSelects';
import InteractiveList from './components/InteractiveList';

const App: React.FC = () => {
  return (
    <div>
      <ScrollTop />
      <div className="container">
        <CustomizedSelects />
        <InteractiveList />
      </div>
    </div>
  );
};

export default App;
