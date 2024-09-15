/**
 * `page-populate-middleware` middleware
 */

const populate_contentBlocks = {
   populate: {
     contentBlocks: {
	on: {
      'sections.heading': {
        populate: '*',
      },
      'sections.experience-group': {
        populate: {
          'experience': {
	        populate: ['logo'], //["startDate", "finishDate", "role", "employer", "description", "logo", "slug"],
	     },
	  },
        },
      'sections.education-group': {
        populate: {
         'education': {
		populate: ['logo'], // fields: ["start", "finish", "school", "degree", "minors", "schoolDescription", "logo", "slug"],
	  },
        },
      },
      'sections.avatar': {
        populate: ["image"],
	}, 
    },
  },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: ['shareImage'],
  },
};

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
