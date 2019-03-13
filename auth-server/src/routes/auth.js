import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post("/", (req, res) => {
  const { credentials } = req.body;
  User.findOne({ name: credentials.name }).then(user => {
    if(user && user.isValidPassword(credentials.password)) {
        res.json({ user: { user: user.toAuthJSON() } });
    } else {
      res.status(400).json({ global: "Invalid credentials" });
    }
  });
});

export default router;
