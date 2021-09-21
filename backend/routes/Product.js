const express = require("express")
const router = express.Router()
const Products = require('../models/Products')

router.get('/getProducts',async (req,res)=>{
    try {
        const products = await Products.find({});
        return res.status(200).send(products)
    } catch (error) {
        return res.status(500).json(error)
    }

})


router.post('/addProduct',async(req,res)=>{
    try {
        
            const newProduct = new Products({
                title:req.body.title,
                description:req.body.description,
                price:req.body.price,
                imgUrl:req.body.imgUrl
            })
            await newProduct.save()

            return res.status(200).json('New product added succesfully!')
        
        
    } catch (error) {
        return res.status(500).send(error)
    }    
})
router.delete('/deleteProduct/:title',async(req,res)=>{
    try {
            await Products.findByIdAndDelete(req.body.title)
            return res.status(200).json('Product with given title is deleted succesfully!')
        
    } catch (error) {
        return res.status(500).send(error)
    }    
}) 

module.exports = router;