module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/podcast-report',
     handler: 'podcast-report.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};