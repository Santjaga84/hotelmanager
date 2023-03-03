
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Header from './Header';
import Home from './Home';
import { AuthContextProvider } from './pages/context/AuthContext';
import ProtectedRoute from './pages/context/ProtectedRoute';
import RoomsTablePage from './pages/RoomsTablePage';
import SingleRoomPage from './pages/context/SingleRoomPages/SingleRoomPage';
import { getAccountsSuccess, requestUserData } from './store/actions/usersActions';
import { getRooms } from './store/actions/roomsActions';
import { getAccounts } from './store/actions/usersActions';



function App() {

   const dispatch = useDispatch();
 
//   useEffect(() => {
//     dispatch(getRooms());
//   },[]);

//  const roomsData = useSelector(store => store.rooms);   console.log('roomsData:',roomsData);

 useEffect(() => {
    dispatch(getAccounts());
  },[]);

 const userData = useSelector(store => store.accounts);   console.log('useerData',userData);

  return (
    <AuthContextProvider>
    <Routes>
        
      <Route path="/" element={<Home/>} />
 
      <Route path="/" element={<Header/>}>
      <Route path="/roomstablepages" element={<ProtectedRoute><RoomsTablePage /></ProtectedRoute>} />
      <Route path="/rooms/:roomId" element={<ProtectedRoute><SingleRoomPage /></ProtectedRoute>} />
    
      </Route> 
      
     </Routes>
     </AuthContextProvider> 
  );
}

export default App;
