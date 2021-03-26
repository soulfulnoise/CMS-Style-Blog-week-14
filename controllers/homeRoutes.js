const { route } = require('./api');

const router = require('express').Router();
const { Blog, User } = require();
const withAuth = require();

router.get('/', async (req, res) => {
    try{
        //Grabbing all blogs and join with users data
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        //Serializing data so the template can read it

        const blogs = blog.Data.map((blog) => blog.get({plain:true}));
    //Passing the serialized data 
    res.render('homepage', {
        projects,
        logged_in: req.session.logged_in
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

// preventing access to route
router.get('/profile', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude:['password'] },
            include: [{model:Blog }],
        });
        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in:true
        });
        } catch (err) {
            res.status(500).json(err);
        }
});

router.get('/login', (req, res) => {
    //redirecting if user is already logged in
    if(req.session.logged_in) {
        res.redirect('/blog');
        return;
    }
    res.render('login');
});

module.exports = router;