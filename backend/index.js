const express = require("express");
require("./db")
const cors = require("cors")
const router = require("./router").router

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api", router)

app.get("/ping", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.listen("3000", () => {
    console.log("app started on 3000")
})

