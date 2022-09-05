const StatusCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNPROCESSABLE: 422,
    SERVER_ERROR: 500,
  };
  
  const ErrorMessage = {
    REQUIRED_FIELDS: 'Some required fields are missing',
    INVALID_FIELDS: 'Invalid fields',
    INTERNAL_ERROR: 'Internal server error!',
  };
  
  module.exports = {
    StatusCode,
    ErrorMessage,
  };