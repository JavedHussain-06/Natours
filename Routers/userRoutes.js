const express = require('express');
const {getAllUser , addUser, getUser, updateUser, deleteUser} = require("../Controllers/userController")

const userRouter =  express.Router();

userRouter.route("/")
.get(getAllUser)
.post(addUser)

userRouter.route("/api/v1/user/:id")
.get(getUser)
.patch(updateUser)
.delete(deleteUser)

module.exports = userRouter