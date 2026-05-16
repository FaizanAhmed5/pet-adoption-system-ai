const Adoption = require('../models/Adoption');

exports.createAdoptionRequest = async (req,res)=>{
  const data = await Adoption.create(req.body);
  res.json(data);
};

exports.getAllAdoptions = async (req,res)=>{
  const data = await Adoption.find().populate('user pet');
  res.json(data);
};

exports.updateAdoptionStatus = async (req,res)=>{
  const data = await Adoption.findByIdAndUpdate(
    req.params.id,
    {status:req.body.status},
    {new:true}
  );
  res.json(data);
};
