const log_debug = require('../../../helper.js').log_debug;
const _ = require('lodash');
const Doctor = require('../../models/work.model.js');

const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

exports.get = async (ctx) => {
  log_debug('get method');
  ctx.body = users
}

exports.index = async (ctx) => {
  const id = parseInt(ctx.params.id)
  if (id >= 0 && id < users.length) {
    ctx.body = users[id]
  } else {
    ctx.status = 404
  }
};

exports.put = async (ctx) => {
  ctx.body = ctx.request.body.todos
}