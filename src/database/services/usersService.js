const { User } = require('../models/user');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');
const getToken = require('../../utils/getToken');

const userServices = {
    login: async (email, password) => {
        if (!email || !password) {
            return { code: StatusCode.BAD_REQUEST, message: ErrorMessage.REQUIRED_FIELDS };
          }
          const user = await User.findOne({ where: { email } });
          if (!user || user.password !== password) {
            return { code: StatusCode.BAD_REQUEST, message: ErrorMessage.INVALID_FIELDS };
          }
        
          const token = getToken(user);
        
          return { code: StatusCode.OK, token };    
    },
};

module.exports = userServices;