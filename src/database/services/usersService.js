const { User } = require('../models');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');
const getToken = require('../../utils/getToken');
const validateUser = require('../validations/validateUser');

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
    createUser: async ({ displayName, email, password, image }) => {
        const { code, message } = validateUser({ displayName, email, password });

        if (message) {
          return { code, message };
        }  
        const alreadyExists = await User.findOne({ where: { email } });
      
        if (alreadyExists) {
          return { code: StatusCode.CONFLICT, message: ErrorMessage.USER_REGISTRED };
        }
      
        await User.create({ displayName, email, password, image });
      
        const { token } = await userServices.login(email, password);
      
        return { code: StatusCode.CREATED, token };
    },
};

module.exports = userServices;