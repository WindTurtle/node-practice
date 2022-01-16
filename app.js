const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const app = express();

app.use(adminRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
