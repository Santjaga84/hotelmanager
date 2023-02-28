import {db} from './../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
import { put,takeEvery} from 'redux-saga/effects';
import { USER_LOADER } from '../actions/usersActions';
import { LOAD_USER_DATA } from '../actions/usersActions';


function* getAccounts(){
  const querySnapshot = yield (getDocs(collection(db, "users")));
   let accounts = []
 querySnapshot.forEach((doc) => {
    accounts.push({...doc.data(), id: doc.id});
  });
  yield put({type:USER_LOADER,payload:accounts});
}




export default function* watchUserData(){
  yield takeEvery(LOAD_USER_DATA, getAccounts);
}