export const INITIAL_STATE = {
  house_address: "",
  barangay: "",
  personalized_facebook_link: "",
  semester: "",
  informative_copy_of_grades: "",
  is_applying_for_merit: "",
  voter_certificate: "",
  university_attending: "",
  registration_form: "",
  total_units_enrolled: "",
  is_ladderized: "",
  course_taking: "",
  year_level: "",
  is_graduating: "",
  course_duration: "",
  guardians_voter_certificate: "",
  guardian_complete_name: "",
  guardian_complete_address: "",
  guardian_contact_number: "",
  guardian_occupation: "",
  guardian_place_of_work: "",
  guardian_educational_attainment: "",
  number_of_semesters_before_graduating: "",
  transferee: "",
  shiftee: "",
  student_status: "",
};

export const formRenewReducer = (state, { type, payload }) => {
  switch (type) {
    case "RENEWAL_FORM_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case "RENEWAL_FILE_DATA":
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
};
