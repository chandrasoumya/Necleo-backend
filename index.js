const express = require("express");
const app = express();
const cors = require("cors")
const port =process.env.port || 5000;
const ProjectsRouter = require("./db/router/projects");

app.use(express.json());
app.use(cors());

// database connection
require("./db/conn");

// CRUD operation
app.use(ProjectsRouter);

app.listen(port,()=>{
    console.log("server is live on "+port);
})
