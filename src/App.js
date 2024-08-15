import React from 'react';
import HierarchyString from './HierarchyString';
import StudentList from './StudentList';
import AggregateDataElements from './AggregateDataElement';
import DataCapture from './DataCapture';
import './App.css';

function App() {
  return (
    <div className="App">
      <HierarchyString />
      <StudentList />
      <AggregateDataElements />
      <DataCapture />
    </div>
  );
}

export default App;
