
export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
             to: 'codie.co@protonmail.com',
             from: 'no-reply@codies-studio.dev',
             replyTo: '${email}',
             subject: 'Message from ${name}',
             text: '${message}', // Replace with a valid field ID
             html: '<p> ${message} </p>', 
               })
        } catch(err) {
            console.log(err);
        }
    }
}

