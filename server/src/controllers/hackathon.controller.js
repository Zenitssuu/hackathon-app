import { Contest } from "../models/contest.models.js";
import { uploadOnCloudinary } from "../util/Cloudinary.js";

const addItem = async (req, res) => {
  try {
    
    console.log(req.body);
    
    const { title, startDate, endDate, description, level, status } =
      req.body;

    if (!title || !startDate || !endDate || !description || !level) {
      // console.log(title);
      // console.log(startDate);
      // console.log(level);
      // console.log(endDate);
      // console.log(description);           
      return res.status(500).json({ messgae: "all fields required" });
    }

    const isPresent = await Contest.findOne({ title });

    const featuredImageLocalPath = req.file?.path;

    // if (!featuredImageLocalPath) {
    //   return res.json(errorHandler(404, "featured Image for movie required"));
    // }

    // const featuredImageUrl = await uploadOnCloudinary(featuredImageLocalPath);

    if (isPresent) {
      return res.status(404).json({ message: "hackathon already exists" });
    }

    const newContest = await Contest.create({
      title,
      description,
      startDate,
      endDate,
      level,
      status,
      // isCompleted: completed,
      // image: featuredImageUrl,
    });
    return res.status(200).json({ data: newContest });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const allContest = await Contest.find();
    return res.status(200).json({ messgae: "done", data: allContest });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};
const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Contest.findById({ id });

    if (!item) return res.json({ messgae: "no record found" });

    return res.status(200).json({ data: item });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Contest.findByIdAndDelete({ id });

    if (!item) return res.json({ messgae: "no record found" });

    return res.status(200).json({ data: item });
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message });
  }
};
const updateItem = async (req, res) => {};

export { addItem, getItem, getItems, deleteItem, updateItem };
