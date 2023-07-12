import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './component/Users';
import ViewUser from './component/ViewUser';
import Navbar from './component/Navbar';
import AddUser from './component/AddUser';

function App() {
  return (
<>
     <Navbar />
    
         <Routes>
               <Route path='/' element= { <Users /> } />
               <Route path='/viewuser/:id' element= { <ViewUser /> } />
               <Route path='/adduser' element= { <AddUser /> } />
         </Routes>

 </>
  );
}

export default App;
