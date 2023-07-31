import express from 'express';
import routerItem from "./item.js"
import routerCate from './category.js';

const router = express.Router()

router.use('/item', routerItem)
router.use('/category', routerCate)

export default router