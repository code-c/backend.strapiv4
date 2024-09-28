export default ({ env }) => ({

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
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
	ignoreTLS: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@codies-studio.dev',
        defaultReplyTo: 'codec@codies-studio.dev',
      },
    },
  },
});
