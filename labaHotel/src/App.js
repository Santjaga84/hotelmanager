
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LOAD_USER_DATA,LOAD_ROOMS_DATA,requestUserData,requestRoomData } from './store/actions/actionsSaga';
import Header from './Header';
import Home from './Home';
import Auth from './pages/auth';



function App() {

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRoomData());
  }, []);

// const userData = useSelector(store => store.userRed.users);
//   console.log('useerData',userData);

  const roomsData = useSelector(store => store.rooms.rooms);
  console.log('roomsData',roomsData);

  return (
    <Routes>
        <Route path="/" element={<Header/>}>  
        <Route path="/" element={<Home/>} />
        
      </Route> 
     </Routes> 
  );
}

export default App;
