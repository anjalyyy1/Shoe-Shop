/**
 * Validate Text
 */

class ValidationUtils {
  checkIfspecialChar = value => {
    let regex = /[\\/=?`<>]/g;
    return regex.test(value);
  };

  validateEmail = email => {
    let re = /^([a-z0-9.\-_]+@[a-z0-9]+(\.[a-z]+)?\.[a-z]+)$/i;
    return re.test(String(email).toLowerCase());
  };

  checkIfEmptyField = value => {
    let re = /^$/;
    return re.test(value);
  };

  checkIfWhiteSpace = value => {
    if (typeof value !== 'number' && value && value.trim().length === 0) {
      let re = /^\s/;
      return re.test(value);
    }
  };
}

export default new ValidationUtils();
