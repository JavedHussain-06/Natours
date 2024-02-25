const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../Dev--data/data/tours-simple.json");
const tours = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    requestAt: req.requestTime,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Data not found!⚠️",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const addTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/`, JSON.stringify(tours), (err) => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  });
};
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Data not found!⚠️",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      message: "Updated successfully",
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Data not found!⚠️",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

module.exports = {
  getAllTours,
  getTour,
  addTour,
  updateTour,
  deleteTour,
};
