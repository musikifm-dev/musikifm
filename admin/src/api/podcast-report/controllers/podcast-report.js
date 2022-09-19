'use strict';

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi.service('api::podcast-report.podcast-report').podcastReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest('Page report controller error', { moreDetails: err })
    }
  }
};