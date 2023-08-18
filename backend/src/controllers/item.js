import Item from "../models/item.js";
import Category from "../models/category.js";
import cloudinary from "../utils/cloudinary.js"
import { itemValid } from "../validation/item.js";

export const getAll = async(req, res) =>{
    try {
        const items = await Item.find({}).populate("categoryId")
        if (!items && items.length === 0){
            return res.status(404).json({message:"Khong tim thay thuc don"});
        }
        return res.status(200).json({
            message:"Lay danh sach mon an thanh cong", 
            data: items
    });
    } catch (error) {
        return res.status(500).json({message : error});
    } 
}

export const getDetail = async(req, res) =>{
    try {
        const item = await Item.findById(req.params.id).populate("categoryId")
        if (!item === 0){
            return res.status(404).json({message:"Khong tim thay mon an"});
        }
        return res.status(200).json({
            message:"Tim thay mon an thanh cong", 
            data: item
    });
    } catch (error) {
        return res.status(500).json({message : error});
    }
}

export const create = async(req, res) =>{
    try {
        const {image, id, calories, category, title, qty, price, categoryId} = req.body;
        const {error} = itemValid.validate(req.body)
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        if(image){
            const uploadRes = await cloudinary.uploader.upload(image,{
                upload_preset:"bentilzone"
            })
        if(uploadRes){
            const newItem  = new Item({
                id,
                calories,
                category,
                title,
                qty,
                price,
                image: uploadRes,
                categoryId,
            })
            const item = await newItem.save()
            console.log(item)
            if(!item){
            return res.status(404).json({message:"Tao mon an khong thanh cong"});
        }
        const updateCategory = await Category.findByIdAndUpdate(item.categoryId,{
            $addToSet:{
                data: item._id,
            }
        })
        if(!updateCategory){
            return res.status(500).json({message:"updateCategory failed"})
        }

        return res.status(200).json({
            message:"Tao mon an thanh cong", 
            item: item
    });
    }}
    } catch (error) {
        console.log(error)
        return res.status(500).json({message : error});
    }
}

export const update = async(req, res) =>{
    try {
        const {error} = itemValid.validate(req.body, {abortEarly:false});
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!item){
            return res.status(404).json({
                message:"Cap nhap mon an khong thanh cong"});
        }
        return res.status(200).json({
            message:"Cap nhap mon an thanh cong", 
            data: item
    });
    } catch (error) {
        return res.status(500).json({message : error});
    }
}

export const remove =  async(req, res) =>{
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if(!item){
            return res.status(404).json({
                message:"Xoa san pham khong thanh cong"});
        }
        return res.status(200).json({
            message:"Xoa san pham thanh cong", 
            data: item,
    });
    } catch (error) {
        return res.status(500).json({message : error});
    }
}



