
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LOAD_USER_DATA,LOAD_ROOMS_DATA,requestUserData,requestRoomData } from './constants/actionTypes';
import Header from './Header';
import Home from './Home';
import Auth from './pages/authentication';
import MainLayout from './pages/MainLayout'
import { AuthContextProvider } from './pages/context/AuthContext';
import ProtectedRoute from './pages/context/ProtectedRoute';
import RoomsTablePage from './pages/RoomsTablePage';
import { getAccounts } from './store/actions/usersActions';
import { getRoomsState } from './selectors/roomsSelectors';
import { getAccountsState } from './selectors/usersSelectors';
import { getIsAuthorized } from './selectors/usersSelectors';
import { getAuthUser } from './selectors/usersSelectors';
import { useMemo } from 'react';

function App() {

   const dispatch = useDispatch();
   const rooms = useSelector(getRoomsState) || [];

   const accounts = useSelector(getAccountsState) || [];
  const isAuthorized = useSelector(getIsAuthorized);

  const isEmptyAccounts = useMemo(() => {
    if (!accounts) return true;

    return !Object.keys(accounts).length;
  }, [accounts]);
  console.log(isEmptyAccounts);

  console.log('userData',accounts);
  console.log('userData',isAuthorized);
 

 
  console.log('roomsData',rooms);

  return (
    <AuthContextProvider>
    <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Header/>}>   
        <Route path="/roomstablepages" element={<ProtectedRoute><RoomsTablePage /></ProtectedRoute>} />
      </Route> 
     </Routes>
     </AuthContextProvider> 
  );
}

export default App;
