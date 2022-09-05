const StatusCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNPROCESSABLE: 422,
    SERVER_ERROR: 500,
    CONFLICT: 409,
  };
  
  const ErrorMessage = {
    REQUIRED_FIELDS: 'Some required fields are missing',
    INVALID_FIELDS: 'Invalid fields',
    INTERNAL_ERROR: 'Internal server error!',
    INVALID_LENGTH: (field, length) =>
    `"${field}" length must be at least ${length} characters long`,
    INVALID_EMAIL: '"email" must be a valid email',
    REQUIRED_FIELD: (field) => `"${field}" field is required`,
    USER_REGISTRED: 'User already registered',
  };
  
  module.exports = {
    StatusCode,
    ErrorMessage,
  };