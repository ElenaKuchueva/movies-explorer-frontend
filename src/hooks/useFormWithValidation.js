import { useState, useCallback } from 'react';

// const useForm = () => {
//   const [values, setValues] = useState({});
//   const [isValid, setIsValid] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     setValues({
//       ...values,
//       [name]: value,
//     });

//     setErrors({
//       ...errors,
//       [name]: event.target.validationMessage,
//     });

//     setIsValid(event.target.closest("#form").checkValidity());
//   };

//   const resetFormValue = useCallback(
//     (newValues = {}, newErrors = {}, newIsFormValid = false) => {
//       setValues(newValues);
//       setIsValid(newIsFormValid);
//       setErrors(newErrors);
//     },
//     [setValues, setErrors, setIsValid]
//   );

//   return {
//     values,
//     errors,
//     handleChange,
//     isValid,
//     resetFormValue,
//   };
// };

// export default useForm;

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetFormValue = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, resetFormValue };
}
