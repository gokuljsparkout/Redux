import { put, call } from "redux-saga/effects";
import {getUsersSuccess,getUsersFailure} from "./UserSlice";
import axios from 'axios';

function* getUsersSaga() {
  try {
    console.log('Fetching users');
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
    console.log('Got response:', response.data);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

export default getUsersSaga;
