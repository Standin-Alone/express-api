const path = require('path');
const { readdir } = require('fs');

// MODULAR 
module.exports = function(app){
  let directoryName = __dirname;

    readdir(
        path.resolve(__dirname,'../modules'),
        (err, files) => {
          if (err) throw err;
          
          for (let file of files) {
                app.set('views', path.join(directoryName, `../modules/${file}/view`));
                app.use('',require(`../modules/${file}/route`));            
                
                                
          }
        }
      );
}