const express = require(`express`);
const path = require(`path`);
const morgan = require(`morgan`);
const nunjucks = require(`nunjucks`);
const Emp = require("./schemas/employees");

const connect = require("./schemas");

const app = express();
app.set(`port`, process.env.PORT || 3002);
app.set(`view engine`, `html`);

nunjucks.configure(`views`, {
  express: app,
  watch: true,
});

connect();

app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, `public`)));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res, next) => {
  try {
    const employees = await Emp.find({});

    console.log(employees);
  } catch (e) {
    console.log(e);
  }
  res.send("<h1>Hello MongoDB</h1>");
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} Not exist Router`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== `production` ? err : {};
  res.status(err.status || 500);
  res.render(`error`);
});

app.listen(app.get(`port`), () => {
  console.log(app.get(`port`), `Hole Position This`);
});

// 전 직원을 전부 디비에 추가하고,
// "/team/solution-dev" 에선 , 솔류션 개밡팀 직원들이 터미널에 출력되고,
// "/team/taq-dev" 에선 , 기술개발팀 직원들이 터미널에 출력되고,
// "/team/solution-design에선, 솔루션 디자인팀"
// "/team/admin" 에선, 기획행정본부 직원들이 터미널에 출력되도록 한다.
