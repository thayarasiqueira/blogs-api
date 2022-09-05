const Sequelize = require('sequelize');
const config = require('../config/config');
const { Category } = require('../models');
const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { StatusCode, ErrorMessage } = require('../../utils/httpStatus');

const sequelize = new Sequelize(config.development);

const postsService = {
    addPost: async ({ title, content, categoryIds, userId }) => {
        if (!title || !content) {
            return { code: StatusCode.BAD_REQUEST, message: ErrorMessage.REQUIRED_FIELDS };
          }
        
          const categories = await Promise
            .all(categoryIds.map((id) => Category.findOne({ where: { id } })));
        
          if (categories.includes(null)) {
            return { code: StatusCode.BAD_REQUEST, message: ErrorMessage.CATEGORY_NOT_FOUND };
          }
        
          const response = await sequelize.transaction(async (t) => {
            const post = await BlogPost.create({ title, content, userId }, { transaction: t });
            await Promise.all(categoryIds.map((id) => PostCategory
              .create({ postId: post.id, categoryId: id }, { transaction: t })));
        
            return post;
        });

        return { code: StatusCode.CREATED, response };
    },
};

module.exports = postsService;