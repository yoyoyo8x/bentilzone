
import Category from "../models/category.js";
import { categoryValid } from "../validation/category.js";

export const getAll = async (req, res) =>{
    try {
        const data = await Category.find({}).populate("items")
        if(!data){
            return res.status(404).json({message:"Khong tim thay categories"});
        }
        return res.status(200).json({
            message:"Da tim thay categories", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}
export const getDetail = async (req, res) =>{
    try {
        const data = await Category.findById(req.params.id).populate("items")
        if(!data){
            return res.status(404).json({message:"Khong tim thay category"});
        }
        return res.status(200).json({
            message:"Da tim thay category", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const create = async (req, res) =>{
    try {
        const {error} = categoryValid.validate(req.body,{abortEarly:false});
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(400).json({message:errors})
        }

        const data = await Category.create(req.body)
        if(!data){
            return res.status(404).json({message:"Tao category that bai"});
        }
        return res.status(200).json({
            message:"Tao category thanh cong", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const update = async (req, res) =>{
    try {
        const {error} = categoryValid.validate(req.body,{abortEarly:false});
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(400).json({message:errors})
        }

        const data = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!data){
            return res.status(404).json({message:"Cap nhat category thay bai"});
        }
        return res.status(200).json({
            message:"Cap nhat category thanh cong", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}

export const remove = async (req, res) =>{
    try {

        const data = await Category.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(404).json({message:"Xoa category that bai"});
        }
        return res.status(200).json({
            message:"Xoa category thanh cong", 
            datas: data
        })

    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message
        });
    }
}