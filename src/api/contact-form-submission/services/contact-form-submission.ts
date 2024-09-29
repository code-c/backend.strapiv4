/**
 * contact-form-submission service
 */
import { factories } from '@strapi/strapi';
export default factories.createCoreService("api::contact-form-submission.contact-form-submission", ({
   async create(data) {
     const response = await strapi.entityService.create("api::contact-form-submission.contact-form-submission", {
         data,
     });
     return response;
    },
  }));
