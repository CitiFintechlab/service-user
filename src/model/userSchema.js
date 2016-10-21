'use strict';

var mongoose = require('../dao/db');

let schema = new mongoose.Schema({

    first_name: String,
    last_name: String,
    user_id: String,
    address: [{
        favourite: Boolean,
        lon: Number,
        lat: Number,
        loc: [Number, Number],
        type: "home"
    }]
});




module.exports = schema;