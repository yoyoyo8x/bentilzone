import Joi from "joi";

export const categoryValid = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).max(255),
    urlParamName: Joi.string().min(3).max(255)
})