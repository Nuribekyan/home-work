import { DoctorListType } from "../types";

const STATE = {
  list: [],
  error: "",
  loading: false,
};

export default function (state = STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorListType.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorListType.SUCCESS:
      return {
        ...state,
        list: payload,
        error: null,
        loading: false,
      };
    case DoctorListType.REJECT:
      return {
        ...state,
        list: [],
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}