// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='flex justify-center items-center  bg-blue-100' >
      {/* login page */}
      {/* ragister */}
     {/* <h2 className=' font-bold text-100px  text-red-900 '>
      Hello boy
    </h2> */}
    {/*  router == /login <Login/> */}
    {/*  router == /rajister <Rajister/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/register' element= {<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
