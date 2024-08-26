const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bounty');



bountyRouter.route('/')
    .get(async (req, res, next) => {
        try {
          const foundBounties = await Bounty.find()
          return res.status(200).send(foundBounties)
        } catch (error) {
          res.status(500)
          return next(error)
        }
    })
    .post(async (req, res, next) => {
      try {
        const newBounty = new Bounty(req.body);
        const savedBounty = await newBounty.save();
        return res.status(201).send(savedBounty);
      } catch (error) {
        res.status(500);
        return next(error);
      }
    })

bountyRouter.route('/:id')
    .put(async (req, res, next) => {
      try {
        const id = req.params.id;
        const itemToBeUpdated = await Bounty.findByIdAndUpdate(
          id,
          req.body,
          { new: true }
        )
        return res.status(201).send(itemToBeUpdated);
      } catch (error) {
        res.status(500);
        return next(error);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const id = req.params.id;

        const itemToBeDeleted = await Bounty.findOneAndDelete({_id: id});

        return res.status(200).send(`You Have Successfully Deleted ${itemToBeDeleted.firstName}`);
        } catch (error) {
          res.status(500);
          return next(error);
        }
      
    })

    bountyRouter.route('/type')
      .get(async (req, res, next) => {
        try {
          const type = req.query.type;

          const foundTypes = await Bounty.find({ type });

          return res.status(200).send(foundTypes);
        } catch (error) {
          res.status(500);
          return next(error);
        }
      })

    bountyRouter.route('/living')
      .get(async (req, res, next) => {
        try {
          const living = req.query.living;

          const foundLiving = await Bounty.find({ living });

          return res.status(200).send(foundLiving);
        } catch (error) {
          res.status(500);
          return next(error);
        }
      })

    module.exports = bountyRouter;
