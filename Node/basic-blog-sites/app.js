const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes')

const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://tutorial:CEaWLbfGxfwIiza6@atlascluster.ksvakm2.mongodb.net/MongoDB-tutorial?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engines
app.set("view engine", "ejs");

//// middleware & static files ////
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//parse URL-encoded form data from incoming requests and expose it in the req.body object
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "How to train your felbeast",
    snippet: "Lorem ipsum dolor sit amet consectetur",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ut natus corrupti.",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.use(blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
