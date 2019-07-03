export default function validateLogin(values) {
  let errors = {};

  // Email Errors
  if (!values.email || values.email === "") {
    errors.email = "Email Required";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 6) {
    errors.password = "Password Must Be At Least 6 Characters";
  }

  return errors;
}
