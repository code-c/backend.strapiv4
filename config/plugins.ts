export default () => ({

'duplicate-button': true,
'drag-drop-content-types': {
    enabled: true
  },
'all-in-one-accessibility': {
    enabled: true,
    resolve: './node_modules/strapi-plugin-all-in-one-accessibility',
    config: {
    },
  },

    'strapi-blurhash': {
      enabled: true,
      config: {
        regenerateOnUpdate: true,
        forceRegenerateOnUpdate: false,
      }
    },
  email: {
    config: {
	provider: 'sendmail',
    	settings: {
      		defaultFrom: 'no-reply@codies-studio.dev',
      		defaultReplyTo: 'codec@codies-studio.dev',
   		},
  	},
  },

});
