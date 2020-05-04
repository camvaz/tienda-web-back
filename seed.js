const seeder = require("mongoose-seed");
const db = "mongodb://localhost:27017/tienda-web";

seeder.connect(db, function () {
    seeder.loadModels(["./models/product.model"]);
    seeder.clearModels(["product"]);
    seeder.populateModels(data, (err, done) => {
        try {
            seeder.disconnect();
        } catch (error) {
            return console.log(error);
        }
    });
});

const data = [
    {
        model: "product",
        documents: [
            {
                name: "Bolsa",
                category: "Fashion",
                description: "Bolsa roja importada",
                price: "300"
            }
        ]
    }
];
