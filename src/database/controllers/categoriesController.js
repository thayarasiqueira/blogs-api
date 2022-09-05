const categoriesService = require('../services/categoriesService');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const categoriesController = {
    addCategory: async (req, res) => {
        try {
            const { name } = req.body;
        
            const { code, message, response } = await categoriesService.addCategory(name);
        
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
    getCategories: async (_req, res) => {
        try {
            const categories = await categoriesService.getCategories();
            res.status(StatusCode.OK).json(categories);
        } catch (err) {
              res
              .status(StatusCode.SERVER_ERROR)
              .json({ message: `${ErrorMessage.INTERNAL_ERROR} ${err.message}` });
        }
    },
};

module.exports = categoriesController;