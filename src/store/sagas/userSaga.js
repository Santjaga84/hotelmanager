import {db} from './../../firebase/firebase';
 import { collection, getDocs  } from "firebase/firestore";
import { select,call, put,takeEvery} from 'redux-saga/effects';
import { USER_LOADER } from '../actions/usersActions';
import { LOAD_USER_DATA } from '../actions/usersActions';
import { getAccountsState } from '../../selectors/usersSelectors';
import { NOTIFICATION_STATUS, NOTIFICATION_MESSAGE } from '../../constants/notifications';
import ACTION_TYPES from '../../constants/actionTypes';
import { logInSuccess,logOutSuccess } from '../actions/usersActions';
import { showNotification } from '../actions/notificationsActions';
import { getAccountsSuccess } from '../actions/usersActions';

function* getAccounts(){
  const querySnapshot = yield (getDocs(collection(db, "users")));
   let accounts = []
 querySnapshot.forEach((doc) => {
    accounts.push({...doc.data(), id: doc.id});
  });
  yield put(getAccountsSuccess(accounts));
}

function* userLogIn({ payload }) {
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

export default function* watchUserData(){
 yield takeEvery(ACTION_TYPES.GET_ACCOUNTS, getAccounts);
  yield takeEvery(ACTION_TYPES.LOGIN, userLogIn);
  yield takeEvery(ACTION_TYPES.LOGOUT, userLogOut);
}