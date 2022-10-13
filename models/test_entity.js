var {EntitySchema} = require("typeorm")

module.exports = new EntitySchema({
    name: "VoucherFims2",
    tableName: "voucher_fims2",
    columns: {
        SID: {
            primary: true,
            type: "int"
        },
        INFO_FARM_PROV: {
            type: "varchar"
        },
        INFO_FARM_REG: {
            type: "int"
        },
        INFO_FARM_BRGY: {
            type: "varchar",
            length:120
        }/*,
        relations: {
            VwApiFarmersFullprofile: {
                target: 'VwApiFarmersFullprofile',
                type: 'many-to-one',
                joinColumn: true,
            }
        }*/
    }
});