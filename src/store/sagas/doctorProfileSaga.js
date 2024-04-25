import { call, put } from "redux-saga/effects";
import DoctorProfileAPI from "../../services/api/doctorProfileAPI";
import { DoctorProfileAction } from "../actions"

export default function* DoctorProfileSaga(action) {
  try {
    const res = yield call(
      DoctorProfileAPI.get,
      `/${action.payload}/?role=doctor`
    )
    yield put(
      DoctorProfileAction.success(res.data)
    )
  } catch (error) {
    yield put(
      DoctorProfileAction.error(error.message)
    );
  }
}