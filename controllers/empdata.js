import EmpModal from "../models/empmodal.js";
import CustomerModal from "../models/customermodal.js";

export const addEmployee = async (req,res) => {
    console.log("hello")
    console.log(req.body)
    try{
        const { firstname, lastname, gender, dob, email, number, address, city, state, postcode, country} = req.body;
        
        const result = await EmpModal.create({firstname, lastname, gender, dob, email, number, address, city, state, postcode, country});
        return res.status(201).json({ result});
        // res.json({result});
    }
    catch(error){
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
}

export const addCustomer = async (req,res) => {
    console.log("Customer")
    console.log(req.body)
    try{
        const {firstname, lastname, company, email, phonenumber, website, customertype } = req.body;
        
        const result = await CustomerModal.create({firstname, lastname, company, email, phonenumber, website, customertype});
        return res.status(201).json({ result});
        // res.json({result});
    }
    catch(error){
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
}