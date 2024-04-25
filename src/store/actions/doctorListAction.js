import { DoctorListType } from "../types";

function get(category) {
  return {
    type: DoctorListType.REQUEST,
    payload: category,
  }
}

function success(list) {
  return {
    type: DoctorListType.SUCCESS,
    payload: list,
  }
}

function error(error) {
  return {
    type: DoctorListType.REJECT,
    payload: error,
  }
}

export { get, success, error };