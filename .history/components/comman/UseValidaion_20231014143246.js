import { useState } from "react";

const useValidation = (initialState, validators) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onInputChange = (field, value) => {
    setState({
      ...state,
      [field]: value,
    });

    // Add validation logic here if needed
    const validationErrors = validators[field].map((validator) =>
      validator(value)
    );
    setErrors({
      ...errors,
      [field]: validationErrors.filter((error) => error !== null),
    });
  };

  const validate = () => {
    // Add any overall form-level validation logic here if needed
    const hasErrors = Object.values(errors).some(
      (fieldErrors) => fieldErrors.length > 0
    );
    return !hasErrors;
  };

  return {
    state,
    setState,
    setErrors,
    onInputChange,
    errors,
    validate,
  };
};

export default useValidation;
