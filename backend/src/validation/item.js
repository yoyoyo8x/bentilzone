import Joi from "joi";

export const itemValid = Joi.object({
    id: Joi.number().required(),
    calories: Joi.number().required(),
    title: Joi.string().required(),
    qty: Joi.number().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    categoryId: Joi.string().required(),
}) 