import Joi from "joi";

export const itemValid = Joi.object({
    id: Joi.number().required(),
    calories: Joi.number().required(),
    title: Joi.string().required(),
    qty: Joi.number().required(),
    image: Joi.object().required(),
    description: Joi.string(),
    categoryId: Joi.string().required(),
})