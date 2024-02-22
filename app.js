const express = require("express");

const app = express();

app.use(express.json());

const tourRouter = require("./Routers/tourRoutes")
const userRouter = require("./Routers/userRoutes")

// ************************** Middleware ****************************

app.use((req,res,next) =>{
console.log("Hello from middleware")
next();
})

app.use((req,res,next)=>{
  const time = req.requestTime = new Date().toISOString()
  console.log(time)
  next()
})

// ************************** Routes ****************************


app.use("/api/v1/tours", tourRouter);

app.use("/api/v1/user", userRouter);

module.exports = app;