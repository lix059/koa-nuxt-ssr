const Koa = require('koa');
const koaJson = require('koa-json');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const resource = require('koa-static');
const path = require('path');
const config = require('./environment/index.js');

const app = new Koa();

onerror(app);
app.use(bodyParser());
app.use(koaJson());
app.use(resource(path.join(config.root, config.appPath)));
if(app.env === 'development') {
  app.use(async (ctx, next) => {
   // console.log(ctx.url)
    await next()
  })
}

module.exports = app;
