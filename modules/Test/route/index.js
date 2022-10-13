//  Login ROUTE
const route = require('@forkjs/group-router');

const controller  = require('../Controller');

// GROUP ROUTE
route.group('/login',()=>{    
    route.get('/test',controller.test)       
    
})


module.exports = route.router;