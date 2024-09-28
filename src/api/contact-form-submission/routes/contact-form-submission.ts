/**
 * contact-form-submission router
 */

export default {
      routes: [
        {
         method: 'POST',
         path: '/contact-form-submission',
         handler: 'api::contact-form-submission.contact-form-submission.create',
         config: {
           policies: [],
           middlewares: [],
         },
        },
      ],
    };
