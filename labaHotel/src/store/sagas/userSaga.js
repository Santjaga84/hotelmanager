import {db} from './../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
import { put,takeEvery} from 'redux-saga/effects';
import { USER_LOADER } from '../actions/userActions';
import { LOAD_USER_DATA } from '../actions/actionsSaga';


function* loadUser(){
  const querySnapshot = yield (getDocs(collection(db, "users")));
   let todosArr = []
 querySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id});
  });
  yield put({type:USER_LOADER,payload:todosArr});
}

export default function* watchUserData(){
  yield takeEvery(LOAD_USER_DATA, loadUser);
}