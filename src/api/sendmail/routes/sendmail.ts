export default {
  routes: [
     {
      method: 'POST',
      path: '/sendmail/notify',
      handler: 'sendmail.notify',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
