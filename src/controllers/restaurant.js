import mongoose from 'mongoose'
import { Router } from 'express'
import Restaurant from '../models/restaurant'
import bodyParser from 'body-parser'

export default({ config, DB }) => {
    let api = Router();

    api.post('/', (req, res) => {
        let newRest = new Restaurant();
        newRest.name = req.body.name;
        
        newRest.save(err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Restaurant saved successfully' });
        });
    });

    api.get('/', (req, res) => {
        Restaurant.find({}, (err, restaurants) => {
            if (err) {
                res.send(err);
            }
            res.json(restaurants);
        });
    });

    api.get('/:id', (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            }
            res.json(restaurant);
        });
    });

    api.put('/:id', (req, res) => {
        Restaurant.findById(req.params.id, (err, restaurant) => {
            if (err) {
                res.send(err);
            }
            restaurant.name = req.body.name;
            restaurant.save(err => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Restaurant successfully updated' });
            });
        });
    });

    return api;
}