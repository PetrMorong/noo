export const isEmpty = (value) => value === undefined || value === null || value === '';

export const required = (value) => (!isEmpty(value) ? undefined : 'Required');

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const number = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const tooOld = (value) =>
  value && value > 65 ? 'You might be too old for this' : undefined;

export const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

export function notEmpty() {
  return (value) => {
    if (isEmpty(value)) {
      return {
        value,
        type: 'required',
      };
    }
    return false;
  };
}


export function createValidator(rules) {
  return (values = {}, props) => {
    const errors = {};

    Object.keys(rules).forEach((key) => {
      // concat enables both functions and arrays of functions
      const unifiedValidator = unifyValidators([].concat(rules[key]));
      const error = unifiedValidator({ value: values[key], values, props });

      if (error) {
        errors[key] = error;
      }
    });

    return errors;
  };
}

const unifyValidators = (validators) => (params) => {
  const validatorsLength = validators.length;
  const errors = [];

  // apply validators
  for (let i = 0; i < validatorsLength; i += 1) {
    const validatorResult = validators[i](params);
    if (validatorResult === STOP_VALIDATION) {
      break;
    }
    if (validatorResult) {
      errors.push(validatorResult);
    }
  }

  // only return the first error encountered
  return errors[0];
};

const STOP_VALIDATION = 'STOP_VALIDATION';
