/**
 * A set of functions called "actions" for `sendmail`
 */

export default {
  notify: async (ctx, next) => {
    try {
      const res = await strapi
        .service("api::sendmail.sendmail")
        .emailService(ctx);
      ctx.body = res.message;
    } catch (err) {
      ctx.body = err;
    }
  },
};
