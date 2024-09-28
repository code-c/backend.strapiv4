/**
 * contact-form-submission service
 */
import { factories } from '@strapi/strapi';
const toEmail = process.env.TOEMAIL;
export default factories.createCoreService("api::contact-form-submission.contact-form-submission", ({
   async create(data) {
     const response = await strapi.entityService.create("api::contact-form-submission.contact-form-submission", {
         data,
     });
     strapi
       .service("api::sendmail.sendmail")
       .send(
          toEmail,
          `${data.name} submitted a contact form`
        );
     return response;
    },
  }));
