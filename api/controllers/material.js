const Material = require('../models/material')

const MaterialController = {

  GetMaterials: async(req, res) => {
    try {
      const materials = await Material.find({})
      res.status(200).json(materials)
    } catch(e){
      console.log(e)
      res.send(e)
    } 
  },

  CreateMaterial: async(req, res) => {
    const material = new Material();
    material.name = req.body.name;
    material.quantityLeft = req.body.quantityLeft;
    material.save()
      .then((item) => res.status(201).json({message:'OK', data: item}))
      .catch(e => {
        console.log(e)
        res.send(e)
      })
  },

  DeleteMaterial: async(req,res) => {
    await Material.deleteOne({_id: req.params.materialId})
    res.send('200 ok deleted')
  },

  EditMaterial: async(req,res) => {
    updateObj = {
      name: req.body.name,
      quantityLeft: req.body.quantityLeft
    }
    
    Material.updateOne({_id: req.body.materialId}, updateObj, { runValidators: true })
      .then((item) => res.status(201).json({message:'OK', data: item}))
      .catch(e => {
        console.log(e)
        res.send(e)
      });
  }
}

module.exports = MaterialController