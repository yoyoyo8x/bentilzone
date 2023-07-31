import Joi from "joi";

export const itemValid = Joi.object({
    id: Joi.number().required(),
    calories: Joi.number().required(),
    tittle: Joi.string().required(),
    qty: Joi.number().required(),
    imageURL: Joi.required(),
    description: Joi.string(),
    categoryId: Joi.string().required(),
})