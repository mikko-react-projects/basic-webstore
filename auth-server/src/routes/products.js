import express from 'express';
import Product from '../models/Product';

const router = express.Router();

router.post("/", (req, res) => {
  const { product } = req.body;

});

export default router;
