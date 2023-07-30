import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
    var today = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
    res.render("index.ejs", {Today: today});
});

app.listen (port, () => {
    console.log("Listens successfully at port:", port);
});