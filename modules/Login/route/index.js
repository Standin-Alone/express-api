//  Login ROUTE
const route = require('@forkjs/group-router');

const controller  = require('../Controller');

// GROUP ROUTE
route.group('/bantay-presyo',()=>{    
    route.post('/login',controller.login)       
    
})


module.exports = route.router;