/**
 * A set of functions called "actions" for `sendmail`
 */

export default {
  send: async (ctx, next) => {
    try {
      const res = await strapi
        .service("api::sendmail.sendmail")
        .send(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
