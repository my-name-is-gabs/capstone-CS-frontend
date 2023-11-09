export const INITIAL_STATE = {
  // PERSONAL INFORMATION
  national_id: null,
  scholar_type: null,
  sex: null,
  dateOfBirth: null,
  email: null,
  address: null,
  district: null,
  barangay: null,
  religion: null,
  fb_link: null,
  // EDUCATIONAL INFO College Level
  university_attending: null,
  course_taking: null,
  year_level: null,
  is_graduating: null,
  course_duration: null,
  // EDUCATIONAL INFO ELEMENTARY
  elementary_school: null,
  elementary_school_type: null,
  elementary_school_address: null,
  elementary_start_end: null,
  //EDUCATIONAL INFO JUNIOR HS
  jhs_school: null,
  jhs_school_type: null,
  jhs_school_address: null,
  jhs_start_end: null,
  // EDUCATIONAL INFO SENIOR HS
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

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "FORM_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case "FILE_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
};
