// Controller for requests from Goals API 

const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//@des      Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
      const goals = await Goal.find({ user:  req.user.id})

      res.status(200).json(goals)
})


//@des      set goals
//@route    POST /api/goals
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
      if(!req.body.text){
            res.status(400)
            throw new Error('Please add a text field')
      }
      const goal = await Goal.create({
            text: req.body.text,
            user: req.user.id,
      })
      res.status(200).json(goal)
})

//@des      Update goal
//@route    PUT /api/goals/:id
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
      const goal = await Goal.findById(req.params.id)

      if(!goal) {
            res.status(400)
            throw new Error('Goal not found')
      }

      const user = await User.findById(req.user.id)

      //check for user
      if(!user){
            res.status(401)
            throw new Error('User not found')
      }

      // making sure logged in user matches the goals user
      if(goal.user.toString() !== user.id) {
            res.status(401)
            throw new Error('User not authorized')
      }

      const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
      })

       res.status(200).json(updatedGoal)
})


//@des      Delete goal
//@route    Delete /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {
      const goal = await Goal.findById(req.params.id)

      if(!goal) {
            res.status(400)
            throw new Error('Goal not found')
      }

      const user = await User.findById(req.user.id)

      //check for user
      if(!user){
            res.status(401)
            throw new Error('User not found')
      }

      // making sure logged in user matches the goals user
      if(goal.user.toString() !== user.id) {
            res.status(401)
            throw new Error('User not authorized')
      }

      // swaped out remove with deleteOne
      await Goal.deleteOne() 

       res.status(200).json({id: req.params.id})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}