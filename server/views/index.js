const router =  require('koa-router')();

router.get('/', (ctx, next) => {
  ctx.req.data = [
    { name: 'dddd' },
    { name: 'cccc' }
  ]
  return next()
})

router.get('/user/:id', (ctx, next) => {
  console.log('params', ctx.params)
  ctx.req.data = {name: 'aaaa'}
  return next()
})

router.get('/todo', (ctx, next) => {
  ctx.req.data = [{title: "ddd", completed: false}]
  return next()
})

module.exports = router