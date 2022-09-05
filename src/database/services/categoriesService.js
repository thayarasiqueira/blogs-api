const { Category } = require('../models');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const categoriesService = {
    addCategory: async (name) => {
            if (!name) {
              return { code: StatusCode.BAD_REQUEST, message: ErrorMessage.REQUIRED_FIELD('name') };
            }
            const category = await Category.create({ name });
          
            const response = {
              id: category.dataValues.id,
              name,
            };
          
            return { code: StatusCode.CREATED, response };
        },
    getCategories: async () => {
        const categories = await Category.findAll({ attributes: ['id', 'name'] });
        return categories;
    },
};

module.exports = categoriesService;