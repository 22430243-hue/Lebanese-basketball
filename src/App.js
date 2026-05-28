import React from 'react'
import  './App.css'
import NavBar from './components/NavBar';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import Games from './Pages/Games';
import Team from './Pages/Team';
import Aboutus from './Pages/Aboutus';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

 function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/Welcome" exact Component={Welcome} />
                    <Route path="/Home" exact Component={Home} />
                    <Route path="/Games" exact Component={Games} />
                    <Route path="/Team" exact Component={Team} />
                    <Route path="/Aboutus" element={<Aboutus />} />
                </Routes>
            </Router>
        </div>
    );
 }

 export default App;