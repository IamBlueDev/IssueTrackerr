import React from 'react';
import logo from './logo.svg';
import './App.scss';
import SideBar from './components/SideBar/SideBar';
import Ticket from './components/Ticket/Ticket';
function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Ticket/>
      {/* <div className="Logo"><h1>Bug</h1> <h3>Tracker</h3></div>
        <div className="Box">
          <div>Title of box</div>
          <div>Content</div>
          arrow pointing to next section
        </div> */}
    </div>
  );
}

export default App;
//Mobile First, then focus on rest