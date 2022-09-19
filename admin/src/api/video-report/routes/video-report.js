module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/video-report',
     handler: 'video-report.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};