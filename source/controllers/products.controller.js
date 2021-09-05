import Product from "../models/products";

export const createProduct= async (req,res) =>{
    const {name,category,price,imgUrl}= req.body

    const newProduct= new Product({name,category,price,imgUrl})

    const productSaved= await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts= (req,res) =>{
    res.json('Obtener Producto')
}

export const getProductsById= (req,res) =>{

}

export const updateProductsById= (req,res) =>{

}

export const deleteProductsById= (req,res) =>{

}