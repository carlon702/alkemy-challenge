import { Routes, Route } from 'react-router-dom';

import Login from "./elements/Login"
import List from "./elements/List"
import Header from "./elements/Header"
import Footer from "./elements/Footer"
import Detail from "./elements/Detail"
import Results from "./elements/Results"

import "./css/app.css"
import "./css/bootstrap.min.css"


function App() {
  
  return (
  <>
  <Header/>
  <div className='container mt-3'>
  <Routes>
   

    <Route id='login' path='/login' element={<Login/>} />

    <Route id='list' path="/list" element={<List/>} />

    <Route id='detail' path='/detail' element={<Detail/>} />

    <Route id='results' path='/results' element={<Results/>} />
  </Routes>
  </div>
  <Footer/>
   

  </>
  );
}

export default App;
