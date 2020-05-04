const product = require("../models/product.model");
const vm = require("v-response");

exports.create_product = (req, res, next) => {
    const product_body = req.body;
    const new_product = new product(product_body);

    new_product
        .save()
        .then(saved => {
            if (!saved) {
                return res
                    .status(400)
                    .json(vm.ApiResponse(false, 400, "nel producto"));
            }
            if (saved) {
                return res
                    .status(201)
                    .json(vm.ApiResponse(true, 201, "creado producto", saved));
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
