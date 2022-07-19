const express = require("express");
const usermodel = require("../models/user");
const fs = require("fs");

const Route = express.Router();

Route.get("/user:id", (req, res) => {
  var data = [
    {
      id: 1,
      QUESTIONS: "WHAT IS YOUR NAME?",
      ANSWERS: {
        ANS1: "SAURABH",
        ANS2: "SANJEEV",
        ANS3: "VIJAY",
        ANS4: "ANAND",
      },
      CORRECT_ANSWER: {
        ANS1: false,
        ANS2: false,
        ANS3: true,
        ANS4: false,
      },
    },
    {
      id: 2,
      QUESTIONS: "WHAT IS YOUR WORK?",
      ANSWERS: {
        ANS1: "PLAYING GAMES",
        ANS2: "CODING",
        ANS3: "PROGRAMMING",
        ANS4: "HACKING",
      },
      CORRECT_ANSWER: {
        ANS1: true,
        ANS2: false,
        ANS3: false,
        ANS4: false,
      },
    },
    {
      id: 3,
      QUESTIONS: "WHAT IS YOUR HOBBY?",
      ANSWERS: {
        ANS1: "FOOTBALL",
        ANS2: "CHESS",
        ANS3: "WHATEVER",
        ANS4: "NONE OF THESE",
      },
      CORRECT_ANSWER: {
        ANS1: false,
        ANS2: false,
        ANS3: false,
        ANS4: true,
      },
    },
  ];

  var user = req.body.params;
  let userid = req.params.id;
  if (userid == "") {
    res.json({ alert: "please fill all the values", status: "danger" });
  } else {
    let isUser = usermodel.findOne({ email: userid }).then((result) => {
      if (!result) {
        res.json({ alert: "OOPS Something went wrong!", status: "danger" });
      } else {
        res.json({ result, data });
      }
    });
  }
});
Route.post("/register", (req, res) => {
  const user = new usermodel(req.body.user);
  let isUser = usermodel.findOne({ email: user.email }, (err, docs) => {
    if (docs) {
      res.json({
        alert: "alert",
        message: "user Already existed",
        status: "danger",
      });
    } else if (
      user.name == "" &&
      user.email == "" &&
      user.password == "" &&
      user.username == ""
    ) {
      res.json({
        alert: "alert",
        message: "please fill all the values",
        status: "danger",
      });
    } else {
      try {
        user.save();
        res.json({
          alert: "alert",
          message: "User registered successfully",
          status: "success",
        });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  });
});
Route.post("/login", (req, res) => {
  var user = req.body.user;
  console.log(req.body.user);
  if (user.email == "" && user.password == "") {
    res.json({ alert: "please fill all the values", status: "danger" });
  } else {
    let isUser = usermodel.findOne(user).then((result) => {
      if (!result) {
        res.json({ alert: "OOPS Something went wrong!", status: "danger" });
      } else {
        res.json({ alert: "logged in succefully", status: "success" });
      }
    });
  }
});

module.exports = Route;
