import express from "express";
import helmet from "helmet";
import router from "./router";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", router);

server.listen(3000, () => {
  console.log("Server online port: 3000");
});
