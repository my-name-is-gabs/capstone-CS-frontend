export const INITIAL_STATE = {
  scholar_type: "",
  firstName: "",
  middleName: "",
  lastName: "",
  sex: "",
  dateOfBirth: "",
  address: "",
  barangay: "",
  p_schoolName: "",
  p_schoolType: "",
  p_schoolAddress: "",
  p_startgradYear: "",
  s_schoolName: "",
  s_schoolType: "",
  father_firstName: "",
  father_middleName: "",
  father_lastName: "",
  father_address: "",
  father_contact: "",
  father_occupation: "",
  father_placeOfWork: "",
  father_educAttainment: "",
  mother_firstName: "",
  mother_middleName: "",
  mother_lastName: "",
  mother_address: "",
  mother_contact: "",
  mother_occupation: "",
  mother_placeOfWork: "",
  mother_educAttainment: "",
  num_units_enrolled: "",
  isLadderized: "",
  num_sem_remaining: "",
  student_status: "",
  transferee: "",
  shiftee: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "PERSONAL_DATA":
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case "FAMILY_DATA":
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case "EDUC_DATA":
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case "OTHER_DATA":
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    default:
      return state;
  }
};
