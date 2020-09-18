import express from "express";
import empController from "../controller/EmployeeController";

const empRouter = express.Router();

empRouter.get("/List", empController.empListController);
empRouter.get("/information", empController.empDetailImformationController);

export default empRouter;
