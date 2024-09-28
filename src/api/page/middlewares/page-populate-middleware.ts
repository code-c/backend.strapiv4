/**
 * `page-populate-middleware` middleware
 */

const populate = {
   Seo: {
     populate: {
       metaImage: {
         populate: true,
         fields: ['url', 'alternativeText', 'blurhash'],
       },
     },
   },
   contentBlocks: {
     populate: {
       experience: {
          populate: {
            logo: {
              fields: ['url', 'alternativeText', 'blurhash'],
            },
          },
        },
        education: {
          populate: {
            logo: {
              fields: ['url', 'alternativeText', 'blurhash'],
            },
          },
        },
        image: {
          populate: true,
        },
	socialLinks: {
	    populate: true,
	},
      },
    },
};


export default (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
