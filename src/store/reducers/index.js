import { combineReducers } from "redux";
import DoctorListReducer from "./doctorListReducer"
import DoctorProfileReducer from "./doctorProfileReducer"

const reducer = combineReducers({
  doctorsList: DoctorListReducer,
  doctorsProfile: DoctorProfileReducer,
});

export default reducer;