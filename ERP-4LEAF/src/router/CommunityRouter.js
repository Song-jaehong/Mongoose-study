import express from "express";
import communityController from "../controller/CommunityController";

const communityRouter = express.Router();

communityRouter.get("/Notice", communityController.communityNoticeController);
communityRouter.get("/Event", communityController.communityEventController);

export default communityRouter;
