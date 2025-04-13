const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all trips
// Regardless of outcome, response must include HTML status code
// and JSON message to requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// POST: Adds a trip
// This section of code provided in the Module 6 guide did not work for me, so I tried to make adjustments based on the Mongoose documentation
const tripsAddTrip = async(req, res) => {
    try {
        const q = await Model.create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        return res.status(201).json(q);
    } catch (err) {
        return res.status(400).json(err);
    }
};

// PUT: /trips/:tripCode - Adds a new trip
const tripsUpdateTrip = async(req, res) => {
    try {
        const q = await Model.findOneAndUpdate(
            {'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true }
        );

        if (!q) {
            return res
                .status(404)
                .json({ message: 'Trip not found' });
        }

        return res
            .status(201)
            .json(q);
    } catch (err) {
        console.error('Error updating trip:', err);
        return res
            .status(400)
            .json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};