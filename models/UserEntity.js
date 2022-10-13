var {EntitySchema} = require("typeorm")

module.exports = new EntitySchema({
    name: "users",
    tableName: "users",
    columns: {
        user_id: {
            primary: true,
            type: "integer"
        },
        email: {
            primary: true,
            type: "varchar"
        },
        password: {
            primary: true,
            type: "varchar"
        },
        email:{
            type:"varchar"
        }
    },

});