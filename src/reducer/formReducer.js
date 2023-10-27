export const INITIAL_STATE = {
  scholar_type: null,
  firstName: null,
  middleName: null,
  lastName: null,
  sex: null,
  dateOfBirth: null,
  address: null,
  barangay: null,
  p_schoolName: null,
  p_schoolType: null,
  p_schoolAddress: null,
  p_startgradYear: null,
  s_schoolName: null,
  s_schoolType: null,
  father_firstName: null,
  father_middleName: null,
  father_lastName: null,
  father_address: null,
  father_contact: null,
  father_occupation: null,
  father_placeOfWork: null,
  father_educAttainment: null,
  mother_firstName: null,
  mother_middleName: null,
  mother_lastName: null,
  mother_address: null,
  mother_contact: null,
  mother_occupation: null,
  mother_placeOfWork: null,
  mother_educAttainment: null,
  num_units_enrolled: null,
  isLadderized: null,
  num_sem_remaining: null,
  student_status: null,
  transferee: null,
  shiftee: null,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "PERSONAL_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "EDUC_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "FAMILY_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "OTHER_DATA":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
