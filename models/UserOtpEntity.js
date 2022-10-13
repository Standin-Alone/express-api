var {EntitySchema} = require("typeorm")

module.exports = new EntitySchema({
    name: "user_otp",
    tableName: "user_otp",
    columns: {
        user_otp_id: {
            primary: true,
            type: "integer"
        },
        user_id: {
            primary: true,
            type: "varchar"
        },
        otp:{
            type:"varchar"
        }
    },

});