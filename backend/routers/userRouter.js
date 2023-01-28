const express = require('express');
const router=express.Router();

const  Model= require('../models/userModel');

router.post('/add', (req,res)=>{

    //console.log(req.body);
    new Model(req.body)
    .save()
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        
        res.status(500).json(err);
        
    });
});

router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
    
})

router.get('/getbyemail/:email', (req,res)=>{
    console.log (req.params.email)
    Model.find({email: req.params.email})
    .then((result) => {
       
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
})

router.get('/getbyusername/:username', (req,res)=>{
    console.log (req.params.username)
    Model.findOne({username: req.params.username})
    .then((result) => {
       
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
})

router.get('/getbyuser/:userid', (req,res)=>{
    Model.find({uploadedby: req.params.userid})
    .then((result) => {
       
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
})

router.get('/getbyid/:id', (req,res)=>{
    console.log (req.params.id)
    Model.findById(req.params.id)


    .then((result) => {
       
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    });
})



router.put("/update/:userid", (req, res) => {
    console.log(req.params.userid)
    Model.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        console.error(err)
        res.json(err)
      })
  })

router.delete('/deletebyid/:id', (req,res)=>{
    console.log(req.params.id)
    
    Model.findByIdAndDelete({_id: req.params.id})
    .then((result) => {
       
        res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.json(err);
        
    })
})




router.post('/authenticate', (req, res) => {

    const formdata = req.body;

    Model.findOne({ email : formdata.email, password : formdata.password })
    .then((result) => {
        // if email and password matches then result will contain user data
        if(result){
            res.status(200).json(result);
        }else{
          // if email and password doesn't match then result will be null
            res.status(400).json({message : "Invalid email or password"});
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
  })




module.exports=router