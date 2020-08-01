'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, world! ok，哈哈';
  }
}

module.exports = HomeController;
