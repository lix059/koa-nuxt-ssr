const app = require('./config/koa.js');
const config = require('./config/environment/index.js');
const session = require('koa-session2')
const Store = require('./Store.js')
//const query = require('./config/mysql-async.js');
const http = require('http');
const fs = require('fs');
const path = require('path');
//const mongo = require('./config/mongo_db_connect.js');
const { Nuxt, Builder } = require('nuxt')
const views = require('./views/index.js')

async function start() {

  // Import and Set Nuxt.js options
  const nuxtConfig = require('../nuxt.config.js')
  nuxtConfig.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(nuxtConfig)

  app.keys = ['keys', 'keykeys'];
  app.use(session({
    key: 'koa:sess',
    maxAge: config.session_time,
    overwrite: true,
    httpOnly: true,
    signed: true,
    store: new Store(config.db.redis)
  }))

  // app.use(async(ctx, next) => {
  //   ctx.execSql = query;
  //   await next();
  // })

  // routes
  fs.readdirSync(path.join(__dirname, 'routes')).forEach(function (file) {
      if (~file.indexOf('.js')) app.use(require(path.join(__dirname, 'routes', file)).routes());
  })

  app.use(views.routes()).use(views.allowedMethods())

  // Build in development
  if (nuxtConfig.dev) {
    await new Builder(nuxt).build()
  }
  app.use(async (ctx, next) => {
    await next()
    ctx.req.session = ctx.session
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.on('error', (error, ctx) => {
    console.log('something error ' + JSON.stringify(ctx.onerror))
  })

  http.createServer(app.callback())
  	.listen(config.port)
  	.on('listening', function () {
  	  console.log('server listening on: ' + config.port)
  	})
} 

start()