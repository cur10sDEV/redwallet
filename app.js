const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/index.htm"));
});

app.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/contact.htm"));
});

app.post("/contact", (req, res) => {
	res.redirect("/contact");
});

app.get("/lea-registration", (req, res) => {
	res.sendFile(path.join(__dirname + "/public/registration.htm"));
});

app.post("/lea-registration", (req, res) => {
	res.redirect("/lea-registration");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
