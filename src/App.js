import React from 'react';
import Nav from './component/navbar/nav'
import Jumb from'./component/jumbotron/jumb'
import Panel from './component/panel/panel'
import './App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
    <Jumb/>
    <Panel/>
    </div>
  );
}

export default App;
