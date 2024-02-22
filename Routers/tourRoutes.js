const express = require('express');
const {  getAllTours,
    getTour,
    addTour,
    updateTour,
    deleteTour,} = require('../Controllers/tourController');

const tourRouter = express.Router();

tourRouter.route("/")
.get(getAllTours)
.post(addTour);

tourRouter.route("/:id")
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

module.exports = tourRouter;