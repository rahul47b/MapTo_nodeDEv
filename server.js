import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routers/routes";
dotenv.config();
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = 8080;
const app = express();

app.use(cors({ origin: true }));
app.options(
  "*",
  cors({ origin: true, optionsSuccessStatus: 200, credentials: true })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, Content-Disposition, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Content-Type", "application/json");
  return next();
});

app.use("api/v1", router);

// simple route
app.get("/nodeDev", (req, res) => {
  res.json({ message: "PONG!.. from roadToMap_Dev server." });
});

app.listen({ port: PORT }, () => {
  console.info(`🚀 server ready at ${process.env.SERVER_URL}`);
});
