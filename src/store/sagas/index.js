import { takeEvery,all,spawn, call } from 'redux-saga/effects';
import watchRoomsData from './roomSaga';
import watchUserData from './userSaga';


export default function* rootSaga(){

  const sagas = [watchRoomsData,watchUserData];

  yield all(sagas.map(s => call(s)));

}