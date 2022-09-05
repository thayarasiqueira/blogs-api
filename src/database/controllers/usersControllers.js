const usersService = require('../services/usersService');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const usersControllers = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const { code, message, token } = await usersService.login(email, password);   
            if (message) {
              return res.status(code).json({ message });
            }    
            return res.status(code).json({ token });
          } catch (err) {
            res
              .status(StatusCode.SERVER_ERROR)
              .json({ message: `${ErrorMessage.INTERNAL_ERROR} ${err.message}` });
          }
    },
};

module.exports = usersControllers;