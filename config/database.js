const {DataSource} = require('typeorm');
global.connection = new DataSource({
    type: "mysql", 
    name: "ffrs",    
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "ffrs",
    // connectString: "(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(Host = localhost)(Port = 3306)))(CONNECT_DATA =(SERVICE_NAME = FFRSORA.DA.GOV.PH)(SERVER=dedicated)))"
},
);


connection.initialize()
    .then((response) => {
        console.warn(`DB Connected`)
    })
    .catch((error) => console.warn(error))

    
module.exports = connection;