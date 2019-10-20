const express = require("express")
const userRouter = express.Router({mergeParams:true})
const userconstrollers = require("../controllers/reviewcontroller")


userRouter.route("/")
.get(userconstrollers.getreview)
.post(userconstrollers.creatReview)


module.exports = userRouter
