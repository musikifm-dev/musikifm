module.exports = {
    routes: [
      {
       method: 'GET',
       path: '/blog-report',
       handler: 'blog-report.findAll',
       config: {
         policies: [],
         middlewares: [],
       },
      },
    ],
  };