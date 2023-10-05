import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    firstname: { type: String, required:  true },
    lastname: { type: String, required:  true },
    gender: { type: String,
        enum: [ "Male", "Female" ]
    },
    dob: {type: Date,required: true,trim: true},
    email: { type: String, required: true },
    number:{type: Number, required: true},
    address:{type:String,required: true,trim: true},
    city:{type:String,required: true,trim: true},
    state:{type:String,required: true,trim: true},
    postcode:{type:String,required: true,trim: true},
    country:{type:String,required: true,trim: true},
    // active: { type: Boolean, default: false },
    
  
  });



export default mongoose.model("Employee", empSchema);