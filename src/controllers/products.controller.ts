import { DatabaseRespository } from "@repository/baseRepository";
import { Product } from "../entities/product";
import {Response, Request, NextFunction } from "express";

export class ProductController {

    constructor(private repository: DatabaseRespository<Product>){

    }
    async create(req:Request,res:Response,next:NextFunction){
        try {
           const body = req.body;
        const product = await this.repository.create(body)
        res.status(200).json(product) 
        } catch (error) {
            next(error)
        }
        
    }
    async list(){}
    async update(){}
    async remove(){}
    async get(){}

}