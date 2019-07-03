import React from "react"

export default function useFormValidation(
  initialState,
  validate,
  authenticate
) {
  const [values, setValues] = React.useState(initialState)
  const [errors, setErrors] = React.useState({})
  const [isSubmitting, setSubmitting] = React.useState(false)
  const [inputInFocus, setInputInFocus] = React.useState({})

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log("Validated")
        setSubmitting(false)
        authenticate()
      } else {
        setSubmitting(false)
      }
    }
  }, [isSubmitting, authenticate, errors])

  function handleChange(event) {
    event.persist()
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
    // const validationErrors = validate(values);
    // setErrors(validationErrors);
  }

  function handleBlur(event) {
    event.preventDefault()
    setInputInFocus({
      [event.target.name]: false
    })
    // const validationErrors = validate(values);
    // setErrors(validationErrors);
  }

  function handleFocus(event) {
    event.preventDefault()
    setInputInFocus({
      [event.target.name]: true
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    values,
    errors,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    inputInFocus
  }
}
