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
    createUser: async (req, res) => {
        try {
            const { displayName, email, password, image } = req.body;
            const { code, message, token } = await usersService
            .createUser({ displayName, email, password, image });
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
    getUsers: async (_req, res) => {
        try {
            const users = await usersService.getUsers();
            res.status(StatusCode.OK).json(users);
        } catch (err) {
              res
              .status(StatusCode.SERVER_ERROR)
              .json({ message: `${ErrorMessage.INTERNAL_ERROR} ${err.message}` });
        }
    },
};

module.exports = usersControllers;