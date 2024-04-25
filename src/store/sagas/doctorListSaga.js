import { call, put } from "redux-saga/effects";
import DoctorListAPI from "../../services/api/doctorListAPI";
import { DoctorListAction } from "../actions"

export default function* DoctorListSaga(action) {
  try {
    const res = yield call(
      DoctorListAPI.get,
      `/?page=1&category=${action.payload}`
    )
    yield put(
      DoctorListAction.success(res.data.results)
    )
  } catch (error) {
    yield put(
      DoctorListAction.error(error.message)
    );
  }
}