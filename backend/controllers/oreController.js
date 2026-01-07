const OreModel = require("../models/oreModel");

const getAllOres = async (req, res) => {
  try {
    const ores = await OreModel.find();
    res.status(200).json({ message: "Ores retrieved successfully", ores });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOreById = async (req, res) => {
  try {
    const ore = await OreModel.findById(req.params.id);
    if (!ore) {
      return res.status(404).json({ message: "Ore not found" });
    }
    res.status(200).json({ message: "Ore retrieved successfully", ore });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOre = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (OreModel.findOne({ name: req.body.name })) {
      return res
        .status(400)
        .json({ message: "Ore with this name already exists" });
    }
    const newOre = new OreModel(req.body);
    const savedOre = await newOre.save();
    res.status(201).json({ message: "Ore created successfully", savedOre });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOre = async (req, res) => {
  try {
    const updatedOre = await OreModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedOre) {
      return res.status(404).json({ message: "Ore not found" });
    }
    res.status(200).json({ message: "Ore updated successfully", updatedOre });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOre = async (req, res) => {
  try {
    const deletedOre = await OreModel.findByIdAndDelete(req.params.id);
    if (!deletedOre) {
      return res.status(404).json({ message: "Ore not found" });
    }
    res.status(200).json({ message: "Ore deleted successfully", deletedOre });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllOres,
  getOreById,
  createOre,
  updateOre,
  deleteOre,
};
