import {db} from './../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
import { select,call, put,takeEvery} from 'redux-saga/effects';
import { USER_LOADER, LOAD_USERS_SUCCESS } from '../actions/usersActions';
import { LOAD_USER_DATA } from '../actions/usersActions';
import { getAccountsState } from '../../selectors/usersSelectors';
import { NOTIFICATION_STATUS, NOTIFICATION_MESSAGE } from '../../constants/notifications';
import ACTION_TYPES from '../../constants/actionTypes';
import { logInSuccess,logOutSuccess } from '../actions/usersActions';
import { showNotification } from '../actions/notificationsActions';
import { getAccountsSuccess } from '../actions/usersActions';
import { auth } from './../../firebase/firebase';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { UserAuth } from '../../pages/context/AuthContext';
import { logIn } from '../actions/usersActions';


function* getAccounts(){
  try{
const accounts = yield new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (currentUser) => {
        let isAuthorized = '';
        if (currentUser === null) {
          isAuthorized = false;
        }else{
          isAuthorized = true;
        }
        
        resolve(isAuthorized);
      }, (error) => {
        reject(error);
      });
    });
  yield put({type:USER_LOADER,payload:accounts});
}catch(err){
yield put(showNotification(NOTIFICATION_STATUS.ERROR, NOTIFICATION_MESSAGE.GET_ROOMS_ERROR));
   }
}

export default function* watchUserData(){
 yield takeEvery(ACTION_TYPES.GET_ACCOUNTS, getAccounts);
  
}