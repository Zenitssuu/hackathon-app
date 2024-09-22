import { Router } from "express";
import {
  addItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/hackathon.controller.js";
import { userAuth } from "../middleware/Auth.js";
import { upload } from "../middleware/multer.js";

const router = Router();

router
  // .post("/add-contest", userAuth, upload.single("image"), addItem)
  .post("/add-contest", addItem)
  .get("/get-contests", getItems)
  .delete("/delete-contest/:id", deleteItem)
  .post("/update-contest/:id", updateItem)
  .get("/get-contest/:id", getItem);

export default router;
