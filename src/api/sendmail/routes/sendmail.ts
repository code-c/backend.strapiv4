export default {
  routes: [
     {
      method: 'POST',
      path: '/sendmail/send',
      handler: 'sendmail.send',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
