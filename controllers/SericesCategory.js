const Category = require("../models/ServiceCategory");

exports.index = async (req, res) => {
  try {
    const categorylist = await Category.find({});
    res.status(200).json(categorylist);
  } catch (er) {
    res.json({ message: er.message });
  }
};
exports.create = async (req, res) => {
  Category.findOne({ name: req.body.name }, function (error, exist) {
    if (exist && !error) {
      res.status(201).json({ message: req.body.name + " already exist" });
    } else {
      const { name, descriptions } = req.body;
      let newCategory = new Category({ name, descriptions });
      newCategory.save();

      res.status(200).json({
        category: newCategory,
      });
    }
  });
};

exports.categoryedit = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    return res.status(200).json(category);
  } catch (er) {
    res.json({ message: er.message });
  }
};
exports.edit = async (req, res) => {
  const category = await Category.findById(req.params.id);
  const { name, descriptions } = req.body;
  if (!category)
    return res
      .status(404)
      .json({ success: false, message: "Record not found" });
  try {
    category.name = name;
    category.descriptions = descriptions;
    category.save();
    return res.status(201).json({ success: true, category: Category });
  } catch (er) {
    return res.status(500).json({ success: false, error: er.message });
  }
};
exports.details = async (req, res) => {
  try {
    await Category.findById(req.params.id, (err, category) => {
      if (!err) {
        res.status(201).json({
          success: false,
          category: category,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, error: er.message });
  }
};
exports.delete = async (req, res) => {
  try {
    Category.findByIdAndRemove(req.params.id, (err, category) => {
      if (!err) {
        res.status(201).json({
          success: true,
          category: category,
        });
      }
    });
  } catch (er) {
    res.status(500).json({ success: false, error: er.message });
  }
};
