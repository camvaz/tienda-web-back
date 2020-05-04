const sale = require("../models/sale.model");
const vm = require("v-response");

create_sale = (req, res, next) => {
    const sale_body = req.body;
    const new_sale = new sale(sale_body);

    new_sale
        .save()
        .then(saved => {
            if (!saved) {
                return res
                    .status(400)
                    .json(vm.ApiResponse(false, 400, "Error: venta no creada"));
            }
            if (saved) {
                return res
                    .status(201)
                    .json(vm.ApiResponse(true, 201, "Venta creada", saved));
            }
        })
        .catch(error => {
            return res
                .status(500)
                .json(
                    vm.ApiResponse(false, 500, "error occur", undefined, error)
                );
        });
};

getSales = (req, res, next) => {
    sale.find({}, (err, sales) => {
        let salesMap = {};
        sales.forEach(sale => {
            salesMap[sale._id] = sale;
        });
        return res
            .status(201)
            .json(vm.ApiResponse(true, 201, "lista de ventas", salesMap));
    });
};

module.exports = {
    create_sale,
    getSales
};
