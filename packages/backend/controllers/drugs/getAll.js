const { Drug } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const drugs = await Drug.find();
    res.status(200).json(drugs);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
