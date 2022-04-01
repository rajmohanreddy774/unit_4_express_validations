const express= require('express');


const User =require("../models/user.models");

const { body, validationResult } = require('express-validator');



const router= express.Router();
router.post("/",
body("firstName").trim().isLength({ min: 3 }),body("pincode").isLength({min:6,max:6}),body("age").custom((val) => {
    if (val < 1 || val > 100) {
      throw new Error("Incorrect age provided");
    }
    return true;
  }),
body("email").isEmail().withMessage("hello")

,async(req,res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      
        const user= await User.create(req.body)

        return res.status(201).send(user);
    }catch(err) {
        return res.status(500).send({message:err.message});
    }
})



module.exports= router;