const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:{type:String, required: true},
    lastName: {type:String, required: false},
    email:{ type:String, required: true},
    pincode: {type:String, required: true},
    age:{type:Number, required: false},
    
    gender:{
        type:String, required:false, enum:["Male","Female"], default:"Male",
    },
},
{
  versionKey: false,
  timestamps:true,  
}
);


module.exports=mongoose.model("user", userSchema);