const StatusCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNPROCESSABLE: 422,
    SERVER_ERROR: 500,
    CONFLICT: 409,
    UNAUTHORIZED: 401,
  };
  
  const ErrorMessage = {
    REQUIRED_FIELDS: 'Some required fields are missing',
    INVALID_FIELDS: 'Invalid fields',
    INTERNAL_ERROR: 'Internal server error!',
    INVALID_LENGTH: (field, length) =>
    `"${field}" length must be at least ${length} characters long`,
    INVALID_EMAIL: '"email" must be a valid email',
    REQUIRED_FIELD: (field) => `"${field}" is required`,
    USER_REGISTRED: 'User already registered',
    TOKEN_NOT_FOUND: 'Token not found',
    EXPIRED_TOKEN: 'Expired or invalid token',
    FIELD_DOESNT_EXIST: (field) => `${field} does not exist`,
    CATEGORY_NOT_FOUND: '"categoryIds" not found',
  };
  
  module.exports = {
    StatusCode,
    ErrorMessage,
  };