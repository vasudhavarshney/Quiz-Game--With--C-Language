require("dotenv").config();
require("./Database");
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const routes = require("./routes");

const PORT = process.env.PORT || 3333;

app.use(
  cors({ origin: ['http://localhost:3000','http://localhost:3000/'],credentials: true })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Facilita el envio de archivos
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
); // Liberamos a los archivos estáticos
app.use(routes);

app.listen(PORT);
