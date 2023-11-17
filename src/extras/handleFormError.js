export const isPersonalInfoValid = (value) => {
  let error = {};
  if (!value.scholarship_type) {
    error.scholarship_type = "Please choose scholarship type";
  }

  if (!value.gender) {
    error.gender = "Please select your gender";
  }

  if (!value.barangay) {
    error.barangay = "Please choose your barangay";
  }

  if (!value.religion) {
    error.religion = "Please choose your religion";
  }

  return error;
};

export const isEducInfoValid = (value) => {
  let error = {};
  if (!value.course_duration) {
    error.course_duration = "Please enter course duration";
  }
  if (!value.course_taking) {
    error.course_taking = "Please enter your course";
  }
  if (!value.university_attending) {
    error.university_attending = "Please enter your university";
  }
  if (value.year_level < 1) {
    error.year_level = "Please insert valid number";
  }
  return error;
};

export const isGuardianInfoValid = (value) => {
  let error = {};
  if (!value.course_duration) {
    error.course_duration = "Please enter course duration";
  }

  if (!value.guardian_contact_number) {
    error.guardian_contact_number = "Please enter contact number";
  } else if (!/[0-9]{3}[0-9]{3}[0-9]{4}/.test(value.guardian_contact_number)) {
    error.guardian_contact_number =
      "Please enter valid contact number 09xx-xxx-xxxx";
  }
  return error;
};

export const isMiscInfoValid = (value) => {
  let error = {};
  if (!value.total_units_enrolled) {
    error.total_units_enrolled = "Please enter a value";
  } else if (value.total_units_enrolled < 1) {
    error.total_units_enrolled = "Please enter valid value";
  }

  if (!value.number_of_semesters_before_graduating) {
    error.number_of_semesters_before_graduating = "Please enter a value";
  } else if (value.number_of_semesters_before_graduating < 1) {
    error.number_of_semesters_before_graduating = "Please enter valid value";
  }

  if (!value.student_status) {
    error.student_status = "Please enter a value";
  }

  if (!value.semester) {
    error.semester = "Please enter a value";
  }
  return error;
};
