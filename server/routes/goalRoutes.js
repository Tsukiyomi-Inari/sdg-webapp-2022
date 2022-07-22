//  Routing for Goals API handling HTTP requests to (GET) fetch, (PUT) update/replace, display data(POST), remove (DELETE)

const express = require('express');
const router = express.Router();
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports = router