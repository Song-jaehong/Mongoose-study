const empListController = (req, res) => {
  res.render("emplist");
};

const empDetailImformationController = (req, res) => {
  res.render("empdetailinformation");
};

const empCotroller = {
  empListController,
  empDetailImformationController,
};

export default empCotroller;
