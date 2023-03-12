import Cat from "../models/Cat.js";

/* CREATE */
export const createCat = async (req, res) => {
  try {
    const { pictureUrl, name, age, gender, personality, description } =
      req.body;
    const newCat = new Cat({
      pictureUrl,
      name,
      age,
      gender,
      personality,
      description,
    });
    await newCat.save();
    const cat = await Cat.find();
    res.status(201).json(cat);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getCats = async (req, res) => {
  try {
    const cat = await Cat.find();
    res.status(200).json(cat);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
