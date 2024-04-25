import { DoctorProfileType } from "../types";

const STATE = {
  data: null,
  error: "",
  loading: false,
};

export default function (state = STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case DoctorProfileType.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DoctorProfileType.SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case DoctorProfileType.REJECT:
      return {
        ...state,
        data: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}