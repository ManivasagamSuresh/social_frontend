
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Portal from './components/PortalLayout/Portal';
import { useContext } from 'react';
import { AuthContext, AuthContextProvider } from './context/authContext';

function App() {
  const {currentUser} = useContext(AuthContext);

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
        <Route path='/' element={<ProtectedRoute><Portal/></ProtectedRoute>}>
          <Route path='' element={<Home/> }/>
          <Route path='profile/:userID' element={<Profile/>}/>
        </Route>
      </Routes>
      
      
    
      </BrowserRouter>
      
    
  );
}

export default App;
