const express = require('express'),
  router = express.Router();

// Position Model
let positionSchema = require('../models/Position');

// CREATE Position
router.route('/create-position').post((req, res, next) => {
  positionSchema.create(req.body, (error, data) => {
    if (error) {
      next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Positions
router.route('/').get((req, res, next) => {
  positionSchema.find((error, data) => {
    if (error) {
        return next(error)
    } else {
        return res.json(data)
    }
  })
})

// Get Single Position
router.route('/edit-position/:id').get((req, res, next) => {
  positionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Position
router.route('/update-position/:id').put((req, res, next) => {
  positionSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
        console.log(error);
        next(error);
    } else {
        res.json(data)
        console.log('Position updated successfully !')
    }
  })
})

// Delete Position
router.route('/delete-position/:id').delete((req, res, next) => {
  positionSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
       next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;