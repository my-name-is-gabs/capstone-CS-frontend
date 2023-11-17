export const INITIAL_STATE = {
  // 1 Personal info
  application_reference_id: "",
  national_id: "",
  birthdate: "",
  house_address: "",
  barangay: "",
  email_address: "",
  personalized_facebook_link: "",
  religion: "",
  gender: "", // Num type
  scholarship_type: "",
  semester: "",
  informative_copy_of_grades: "",
  is_applyingForMerit: "",
  voter_certificate: "",
  // 2  Educ
  university_attending: "", // Num Type
  registration_form: "",
  total_units_enrolled: "", // Num type
  is_ladderized: "", // Bool type
  course_taking: "", // num type
  year_level: "",
  is_graduating: "", // bool type
  course_duration: "",
  // EDUCATIONAL INFO ELEMENTARY
  elementary_school: "",
  elementary_school_type: "",
  elementary_school_address: "",
  elementary_start_end: "",
  //EDUCATIONAL INFO JUNIOR HS
  jhs_school: "",
  jhs_school_type: "",
  jhs_school_address: "",
  jhs_start_end: "",
  // EDUCATIONAL INFO SENIOR HS
  shs_school: "",
  shs_school_type: "",
  shs_school_address: "",
  shs_start_end: "",
  // GUARDIAN'S BACKGROUND
  guardian_complete_name: "",
  guardian_complete_address: "",
  guardian_contact_number: "",
  guardian_occupation: "",
  guardian_place_of_work: "",
  guardian_educational_attainment: "",
  guardians_voter_certificate: "",
  // MISCELLANEOUS INFORMATION
  number_of_semesters_before_graduating: "", // num type
  transferee: "",
  shiftee: "",
  student_status: "",
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
