export const INITIAL_STATE = {
  // PERSONAL INFORMATION
  scholar_type: null,
  firstName: null,
  middleName: null,
  lastName: null,
  sex: null,
  dateOfBirth: null,
  email: null,
  address: null,
  district: null,
  barangay: null,
  religion: null,
  fb_link: null,
  // EDUCATIONAL INFO
  // College Level
  university_attending: null,
  course_taking: null,
  year_level: null,
  is_graduating: null,
  course_duration: null,
  // ELEMENTARY
  elementary_school: null,
  elementary_school_type: null,
  elementary_school_address: null,
  elementary_start_end: null,
  // JUNIOR HS
  jhs_school: null,
  jhs_school_type: null,
  jhs_school_address: null,
  jhs_start_end: null,
  // SENIOR HS
  shs_school: null,
  shs_school_type: null,
  shs_school_address: null,
  shs_start_end: null,
  // GUARDIAN'S BACKGROUND
  guardian_complete_name: null,
  guardian_complete_address: null,
  guardian_contact_number: null,
  guardian_occupation: null,
  guardian_place_of_work: null,
  guardian_educational_attainment: null,
  // MISCELLANEOUS INFORMATION
  registration_form: null,
  total_units_enrolled: null,
  is_ladderized: null,
  number_of_semesters_before_graduating: null,
  transferee: null,
  shiftee: null,
  student_status: null,
};

// export const formReducer = (state, action) => {
//   switch (action.type) {
//     case "PERSONAL_DATA":
//       return {
//         ...state,
//         [action.payload.name]: action.payload.value,
//       };
//     case "EDUC_DATA":
//       return {
//         ...state,
//         [action.payload.name]: action.payload.value,
//       };
//     case "FAMILY_DATA":
//       return {
//         ...state,
//         [action.payload.name]: action.payload.value,
//       };
//     case "OTHER_DATA":
//       return {
//         ...state,
//         [action.payload.name]: action.payload.value,
//       };

//     default:
//       return state;
//   }
// };

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "FORM_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
};
