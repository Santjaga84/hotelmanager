import {db} from './../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
import { call, put,takeEvery, select} from 'redux-saga/effects';
import { USER_LOADER, LOAD_USER_DATA } from '../../constants/actionTypes';
import { UserAuth } from './../../pages/context/AuthContext';
import { getAccountsState } from './../../selectors/usersSelectors';
import { showNotification } from './../actions/notificationsActions';
import { getAccountsSuccess, logInSuccess, logOutSuccess } from '../actions/usersActions';
import { NOTIFICATION_MESSAGE, NOTIFICATION_STATUS } from './../../constants/notifications';
import ACTION_TYPES from '../../constants/actionTypes';
import { useContext } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
// function* loadUser(){
//   const querySnapshot = yield (getDocs(collection(db, "users")));
//    let todosArr = []
//  querySnapshot.forEach((doc) => {
//     todosArr.push({...doc.data(), id: doc.id});
//   });
//   yield put({type:USER_LOADER,payload:todosArr});
// }



function* getAccounts() {
  
  try {
   const querySnapshot = yield call(getDocs(collection(db, "users")));
 let accounts = [];
 querySnapshot.forEach((doc) => {
    accounts.push({...doc.data(), id: doc.id})
    });
console.log(accounts);   
    yield put(getAccountsSuccess(accounts));
  } catch (err) {
    yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ACCOUNTS_ERROR));
  }
}

function* userLogIn({ payload }){
  const { username, pass, remember } = payload;
  const accounts = yield select(getAccountsState);
  const currentAccount = accounts[username];
  const isValid = !!(currentAccount && currentAccount.password === pass);
  if (isValid) {
    yield put(logInSuccess({ username, image: currentAccount.image }));
    if (remember) {
      yield call([localStorage, 'setItem'], 'authData', JSON.stringify({ username, pass }));
    }
  } else {
    yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.LOGIN_ERROR));
  }
}

function* userLogOut() {
  yield call([localStorage, 'removeItem'], 'authData');
  yield put(logOutSuccess());
}


export default function* watchUsersData() {
  yield takeEvery(ACTION_TYPES.GET_ACCOUNTS, getAccounts);
  yield takeEvery(ACTION_TYPES.LOGIN, userLogIn);
  yield takeEvery(ACTION_TYPES.LOGOUT, userLogOut);
}
// export default function* watchUserData(){
//   yield takeEvery(LOAD_USER_DATA, loadUser);
// }