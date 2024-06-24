
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipe_usersModel = require('./model');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
// mongoose.connect('mongodb://localhost:27017/recipe_users')
mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", email);

  recipe_usersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          console.log("Login success:", user);
          res.json("Success");
        } else {
          console.log("Incorrect password for:", email);
          res.json("Password is incorrect");
        }
      } else {
        console.log("No user found with email:", email);
        res.json("No such record exist");
      }
    })
    .catch(err => {
      console.error("Error during login:", err);
      res.json("error");
    });
});

app.post('/signup', (req, res) => {
  const { email, name, password } = req.body;

  recipe_usersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Exists");
      } else {
        recipe_usersModel.create({ email, name, password })
          .then(newUser => {
            console.log("User created:", newUser);
            res.json("created");
          })
          .catch(err => {
            console.error("Error creating user:", err);
            res.json("error");
          });
      }
    })
    .catch(err => {
      console.error("Error during signup:", err);
      res.json("error");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

