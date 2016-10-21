'use strict';

const userHandler = require('../handler/userHandler');
let userSchema = require('../model/userSchema');
const Joi = require('joi');


module.exports = function (server, options) {

    server.route({
        method: 'post',
        path: '/v1/user',
        config: {
            handler: userHandler.createOrUpdateUser,
            description: 'Create a new usser if already existed then update',
            notes: 'user data ',
            tags: ['api'],
            validate: {
                payload: Joi.object({
                    first_name: Joi.string(),
                    last_name: Joi.string(),
                    user_id: Joi.string(),
                    address: Joi.array({
                        favourite: Joi.boolean(),
                        lon: Joi.number(),
                        lat: Joi.number(),
                        loc: Joi.array()
                    })

                })
            }
        }
    });

}