
import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { requestUserData } from './store/actions/usersActions';
import { getRooms } from './store/actions/roomsActions';

function App() {

   const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(requestUserData());
  }, []);

 const userData = useSelector(store => store.users.accounts);   console.log('useerData',userData);

useEffect(() => {
    dispatch(getRooms());
  }, []);

  const roomData = useSelector(store => store.rooms);   console.log('useerData',roomData);

  return (
    <div>

    </div>
  );
}

export default App;
