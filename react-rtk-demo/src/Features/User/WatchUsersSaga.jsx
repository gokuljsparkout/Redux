import { takeLatest } from "redux-saga/effects";
import getUsersSaga from "./UserSaga";

function* watchGetUsersSaga() {
  console.log('wus');
  yield takeLatest('users/getUsers', getUsersSaga);
}

export default watchGetUsersSaga;
