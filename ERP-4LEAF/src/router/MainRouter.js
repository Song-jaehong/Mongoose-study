import express from "express";
import mainController from "../controller/MainController";

const mainRouter = express.Router();

mainRouter.get("/", mainController.mainPageController);

export default mainRouter;
