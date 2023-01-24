import { Routes, Route } from 'react-router-dom';

import Login from "./elements/Login"
import List from "./elements/List"

function App() {
  
  return (

  <Routes>
    
    <Route id='login' path='/' element={<Login/>} />

    <Route id='list' path="/list" element={<List/>} />

  </Routes>
   


  );
}

export default App;
