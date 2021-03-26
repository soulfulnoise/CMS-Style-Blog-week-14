const router = require('express').Router();
const UserRoutes = require();
const blogRoutes = require();

router.use('/users', userRoutes);
router.use('/blogRoutes', projectRoutes);

module.exports = router;

