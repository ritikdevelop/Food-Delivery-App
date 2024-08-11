import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    dat:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})


const orderModel = mongoose.models.order || mongoose.model("order",orderScheme);

export default orderModel;