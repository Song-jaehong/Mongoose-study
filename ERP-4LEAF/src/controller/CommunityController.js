import communityRouter from "../router/CommunityRouter";

const communityNoticeController = (req, res) => {
  res.render("notice");
};

const communityEventController = (req, res) => {
  res.render("event");
};

const communityController = {
  communityNoticeController,
  communityEventController,
};

export default communityController;
