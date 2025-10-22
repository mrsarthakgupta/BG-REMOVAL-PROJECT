
import multer from 'multer';
import express from 'express';
import path from 'path';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');  // or your temp folder
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });
export default upload;