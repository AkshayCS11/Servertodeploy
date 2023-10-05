import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    customertype: { type: String,
        enum: [ "Business", "Individual" ]
    },
    firstname: { type: String, required:  true },
    lastname: { type: String, required:  true },
    company: { type: String, required:  true },
    email: { type: String, required: true },
    phonenumber: {type: Number, required: true},
    website: {type:String,required: true,trim: true},
    
    // active: { type: Boolean, default: false },
    
  
  });



export default mongoose.model("Customer", customerSchema);