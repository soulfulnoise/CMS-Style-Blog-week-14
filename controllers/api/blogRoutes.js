const router =('express').Router();
const { Blog } = require('');
const withAuth = require('');

router.post('/', withAuth , async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
    });

    router.delet('/:id', withAuth, async (req, res) => {
        try {
            const BlogData = await Blog.destroy({
                where: {
                    id:req.params.id ,
                    user_id: req.session.user_id,
                },
            });
            if (!blogData) {
                res.status(404).json({ message: 'No post exsist!'});
                return;
            }

            res.status(200).json(blogData);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    module.exports = router;