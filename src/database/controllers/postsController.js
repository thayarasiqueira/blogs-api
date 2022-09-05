const jwt = require('jsonwebtoken');
const postsService = require('../services/postsService');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const postsController = {
    addPost: async (req, res) => {
        try {
            const token = req.headers.authorization;
            const { title, content, categoryIds } = req.body;
            const { JWT_SECRET } = process.env;
        
            const decodedToken = jwt.verify(token, JWT_SECRET);
        
            const { code, message, response } = await postsService
              .addPost({ title, content, categoryIds, userId: decodedToken.data.id });
        
            if (message) {
              return res.status(code).json({ message });
            }
        
            return res.status(code).json(response);
          } catch (err) {
            res
              .status(StatusCode.SERVER_ERROR)
              .json({ message: `${ErrorMessage.INTERNAL_ERROR} ${err.message}` });
          }
    },
};

module.exports = postsController;
