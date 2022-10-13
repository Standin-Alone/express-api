const {DataSource} = require('typeorm');
let sampleEntity = require("../models/test_entity");

global.connection = new DataSource({
    type: "mysql", 
    name: "vmp",    
    host: "localhost",
    port: 3320,
    username: "root",
    password: "",
    database: "vmp_db",
    entities: ["./models/**/*.js"],
    // connectString: "(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(Host = localhost)(Port = 3306)))(CONNECT_DATA =(SERVICE_NAME = FFRSORA.DA.GOV.PH)(SERVER=dedicated)))"
});



connection.initialize()
    .then((response) => {
        console.warn(`DB Connected`)
    })
    .catch((error) => console.warn(error))

    
module.exports = connection;