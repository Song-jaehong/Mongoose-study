import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mainRouter from "./router/MainRouter";
import empRouter from "./router/EmployeeRouter";
import communityRouter from "./router/CommunityRouter";

const app = express();

// Server Settings...
app.set(`port`, process.env.PORT || 7001);
app.set("view engine", "pug");
app.use(morgan(`dev`));

app.use("/", mainRouter);
app.use("/emp", empRouter);
app.use("/community", communityRouter);

app.listen(app.get(`port`), () => {
  console.log(
    `🌈MongoDB Graphql - Server Start PORT NIMBER : `,
    app.get(`port`)
  );
});
