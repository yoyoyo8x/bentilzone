import express from 'express';
import routerItem from "./item.js"
import routerCate from './category.js';
import routerAuth from "./auth.js"


const router = express.Router()

router.use('/item', routerItem)
router.use('/category', routerCate)
router.use('/auth', routerAuth)

export default router