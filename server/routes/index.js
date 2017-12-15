const router =  require('koa-router')();
const works = require('../api/controllers/works/index.js');

router.use('/api', works.routes(), works.allowedMethods());

module.exports = router;