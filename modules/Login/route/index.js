//  Login ROUTE
const route = require('@forkjs/group-router');

const controller  = require('../Controller');

// GROUP ROUTE
route.group('/bantay-presyo',()=>{    
    route.get('/login/:email',controller.login)       
    
})


module.exports = route.router;