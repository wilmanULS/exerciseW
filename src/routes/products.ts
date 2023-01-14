import { ProductRepository } from "../repository/product.repository";
import * as express from "express";
import {ProductController} from '../controllers/products.controller'

const router= express.Router();
const controller = new ProductController (new ProductRepository())
router.get('/', (req, res) => { res.json()})
router.put('/', (req, res) => { res.json()})
router.post('/', controller.create)
router.delete('/', (req, res) => { res.json()})

export default router