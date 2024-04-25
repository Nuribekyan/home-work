import { takeLatest } from "redux-saga/effects";
import DoctorListSaga from "./doctorListSaga";
import DoctorProfileSaga from "./doctorProfileSaga";
import { DoctorListType, DoctorProfileType } from "../types";

export default function* Saga() {
  yield takeLatest(DoctorProfileType.REQUEST, DoctorProfileSaga);
  yield takeLatest(DoctorListType.REQUEST, DoctorListSaga);
}