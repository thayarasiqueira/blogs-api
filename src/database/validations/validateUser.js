const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const checkLength = (value, length) => !value || value.length < length; 

const validateUser = ({ displayName, email, password }) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  switch (true) {
    case checkLength(displayName, 8):
      return { code: StatusCode.BAD_REQUEST,
        message: ErrorMessage.INVALID_LENGTH('displayName', '8') };
    case checkLength(password, 6):
      return { code: StatusCode.BAD_REQUEST,
        message: ErrorMessage.INVALID_LENGTH('password', '6') };
    case !emailRegex.test(email):
      return { code: StatusCode.BAD_REQUEST,
        message: ErrorMessage.INVALID_EMAIL };
    default:
      return false;
    }
};

module.exports = validateUser;
