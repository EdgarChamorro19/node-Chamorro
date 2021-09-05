import Product from "../models/products";

export const createProduct= (req,res) =>{
    console.log(req.body)
    res.json('Creando Producto')
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