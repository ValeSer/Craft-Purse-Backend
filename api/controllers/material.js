const Material = require('../models/material')

const MaterialController = {
  CreateMaterial: async(req, res) => {
    const material = new Material();
    material.name = req.body.name;
    material.quantityLeft = req.body.quantityLeft;
    material.save().then((item) => res.status(201).json({message:'OK', data: item}))
  },

  DeleteMaterial: async(req,res) => {
    await Material.deleteOne({_id: req.params.materialId})
    res.send('200 ok deleted')
  }
}

module.exports = MaterialController