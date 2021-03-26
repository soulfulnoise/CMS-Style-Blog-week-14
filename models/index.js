const User = requre('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CAASCADE'
});

Blog.belongsto(User,{
    foreignKey:'user_id'
});

module.exports = { User, Blog };