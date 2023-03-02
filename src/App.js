
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Header from './Header';
import Home from './Home';
import MainLayout from './pages/MainLayout'
import { AuthContextProvider } from './pages/context/AuthContext';
import ProtectedRoute from './pages/context/ProtectedRoute';

import { requestUserData } from './store/actions/usersActions';



function App() {

   const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(requestUserData());
  }, []);

 const userData = useSelector(store => store.users.accounts);   console.log('useerData',userData);


  return (
    <AuthContextProvider>
    <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Header/>}>   
        <Route path="/mainlayout" element={<ProtectedRoute><MainLayout /></ProtectedRoute>} />
       
      </Route> 
     </Routes>
     </AuthContextProvider> 
  );
}

export default App;
