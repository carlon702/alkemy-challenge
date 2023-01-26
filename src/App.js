import { Routes, Route } from 'react-router-dom';

import Login from "./elements/Login"
import List from "./elements/List"
import Header from "./elements/Header"
import Footer from "./elements/Footer"


import "./css/bootstrap.min.css"

function App() {
  
  return (
  <>
  <Header/>
  
  <Routes>
   

    <Route id='login' path='/login' element={<Login/>} />

    <Route id='list' path="/list" element={<List/>} />


  </Routes>

  <Footer/>
   

  </>
  );
}

export default App;
