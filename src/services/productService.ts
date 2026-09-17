import productModel from "../models/productModel.js";
import proudctModel from "../models/productModel.js";

export const getAllProducts = async () => {
    const allProdcuts = await proudctModel.find();
    return allProdcuts;
}

// seed prodcuts

export const seedIntialProdcuts = async () => {
    const seedProducts = [
        {title: "prodcut1", image: "image_url", stock: 1, price:10},
        {title: "prodcut2", image: "image_url", stock: 1, price:10},
        {title: "prodcut3", image: "image_url", stock: 1, price:10},
    ]

    const products = await getAllProducts()
    if(products.length === 0){
       await productModel.insertMany(seedProducts)
    }
}

