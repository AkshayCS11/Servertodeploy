import express from 'express';
const router = express.Router();
import {addEmployee, addCustomer } from "../controllers/empdata.js";

router.post("/employee", addEmployee);
router.post("/customer", addCustomer);

export default router;