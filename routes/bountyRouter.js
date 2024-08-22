const express = require('express');
const bountyRouter = express.Router();
const Bounty = require('../models/bounty');


const bounties = [
  {
    firstName: "Sunny",
    lastName: "Stacy",
    living: true,
    bountyAmount: 500,
    type: "jedi",
  },
  {
    firstName: "Jethro",
    lastName: "Stacy",
    living: true,
    bountyAmount: 500,
    type: "jedi",
  },
  {
    firstName: "Tank",
    lastName: "Stacy",
    living: false,
    bountyAmount: 200,
    type: "sith",
  },
];


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

    module.exports = bountyRouter;
