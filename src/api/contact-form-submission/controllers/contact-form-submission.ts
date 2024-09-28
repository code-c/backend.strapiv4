/**
 * contact-form-submission controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact-form-submission.contact-form-submission",
  ({ strapi }) => ({ 
      async create(ctx) {
        return await strapi
          .service("api::contact-form-submission.contact-form-submission")
          .create(ctx.request.body);
      },
    }));
