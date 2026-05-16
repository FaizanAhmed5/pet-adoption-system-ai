const Pet = require('../models/Pet');

exports.createPet = async (req,res)=>{
  const pet = await Pet.create(req.body);
  res.json(pet);
};

exports.getPets = async (req,res)=>{
  res.json(await Pet.find());
};

exports.getPetById = async (req,res)=>{
  res.json(await Pet.findById(req.params.id));
};

exports.updatePet = async (req,res)=>{
  res.json(await Pet.findByIdAndUpdate(req.params.id, req.body, {new:true}));
};

exports.deletePet = async (req,res)=>{
  await Pet.findByIdAndDelete(req.params.id);
  res.json({message:'deleted'});
};
