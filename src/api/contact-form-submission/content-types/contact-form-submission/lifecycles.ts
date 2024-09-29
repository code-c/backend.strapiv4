
export default {
    async afterCreate(event) {    // Connected to "Save" button in admin panel
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
             to: 'codie.co@protonmail.com',
             from: 'no-reply@codies-studio.dev',
             replyTo: `${result.email}`,
             subject: `Message from ${result.name}`,
             text: `Favorite reptile: ${result?.reptile} \n ${result.message}`, // Replace with a valid field ID
             html: `<p> Favorite reptile: ${result?.reptile} </p> <p> ${result.message} </p>`, 
               })
        } catch(err) {
            console.log(err);
        }
    }
}

