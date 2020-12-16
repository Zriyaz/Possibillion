const express = require('express')
const { check, validationResult } = require('express-validator')
const UserData  = require('./dataModel')

const router = express.Router()

router.post(
    '/',
     [
       check('title',  'Title is required and not exceed 160 charcters.').not().isEmpty().isLength({max: 160}),   
       check('description', 'description is required not exceed 160 charcters').not().isEmpty().isLength({max: 100}),     
       check('type', 'type is required not exceed 20 charcters').not().isEmpty().isLength({max: 20}),     
       check('image', 'image url is required').not().isEmpty(),
       check('url', 'url is required').not().isEmpty(),
       check('siteName', 'website name is required').not().isEmpty(),
       check('siteCreator', 'website name is required').not().isEmpty(),
    ],
    async (req, res) =>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
       const {
           title, description, type, image, url, siteName, siteCreator
       } = req.body 

       try {
           const seoData = new UserData({title, description, type, image, url, siteName, siteCreator}) 

           if(seoData){
               await seoData.save()
               return res.status(201).json(seoData)
           }
       } catch (error) {
           console.log(error.message)
           res.status(500).send("Server Error")
       }

    }   
)

router.get('/', async(req, res)=>{
    try {
        const seoData = await UserData.find().limit(1).sort({$natural: -1})
        if(seoData.length == 0){
           return res.status(200).json({message: "data is not available"})  
        }
         res.status(200).json({seoData})
       
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router
