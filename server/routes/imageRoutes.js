import express from 'express'
import { removeBgImage } from '../controllers/imageController.js'
import upload from '../middlewares/multer.js'
import userAuth from '../middlewares/auth.js'

const imageRouter =express.Router();

imageRouter.post('/remove-bg',userAuth, upload.single('image_file'),removeBgImage)

export default imageRouter;