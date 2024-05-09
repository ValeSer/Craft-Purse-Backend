const Material = require('../models/material')

const MaterialController = {
  CreateMaterial: async(req, res) => {
    const material = new Material();
    material.name = req.body.name;
    material.quantityLeft = req.body.quantityLeft;
    material.save().then((item) => res.status(201).json({message:'OK', data: item}))
  }
}

module.exports = MaterialController