const product = require("../models/product.model");
const vm = require("v-response");

create_product = (req, res, next) => {
    const product_body = req.body;
    const new_product = new product(product_body);

    new_product
        .save()
        .then(saved => {
            if (!saved) {
                return res
                    .status(400)
                    .json(vm.ApiResponse(false, 400, "Producto no creado"));
            }
            if (saved) {
                return res
                    .status(201)
                    .json(vm.ApiResponse(true, 201, "Producto creado", saved));
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

getProducts = (req, res, next) => {
    product.find({}, (err, products) => {
        let productMap = {};
        products.forEach(producto => {
            productMap[producto._id] = producto;
        });
        return res
            .status(201)
            .json(vm.ApiResponse(true, 201, "lista de productos", productMap));
    });
};

module.exports = {
    create_product,
    getProducts
};
