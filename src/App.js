
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Portal from './components/PortalLayout/Portal';

function App() {
  const currentUser = true;

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to={"/login"}/>
    }
   return children
  }

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Portal/>}>
          <Route path='' element={<ProtectedRoute><Home/></ProtectedRoute> }/>
          <Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        </Route>
      </Routes>
      
      
    
      </BrowserRouter>
      
    
  );
}

export default App;
