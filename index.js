import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
 
var listItem=[];

app.get("/", (req, res) => {
    var today = new Date().toLocaleDateString('en-us', { day:"numeric", month:"long", weekday:"long" });
    res.render("index.ejs", {Today: today, item: listItem});
});

app.post("/", (req, res) => {
    var newItem = req.body.listItem;
    listItem.push(newItem);
    res.redirect("/");
});
 

app.listen (port, () => {
    console.log("Listens successfully at port:", port);
});