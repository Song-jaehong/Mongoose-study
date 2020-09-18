const mainPageController = (req, res) => {
  console.log("Aceept MainPageController!");
  res.render("main");
};

const mainController = {
  mainPageController,
};

export default mainController;
