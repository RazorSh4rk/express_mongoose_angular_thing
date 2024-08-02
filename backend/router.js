const express = require("express");
const goose = require("mongoose");

const Student = goose.model("Student");

const router = express.Router();

router.get("/all", async (req, res) => {
    const itemsPerPage = 5;

    let page = req.query["page"];
    if (!page) page = 0;
    else {
        page = parseInt(page);

        if (isNaN(page))
            page = 0;
    }

    const skippedNumber = page * itemsPerPage;

    Student.find().sort({ name: 1 }).skip(skippedNumber).limit(itemsPerPage).exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
});

router.get("/:id", (req, res) => {
    const studentId = req.params.id;

    if (!studentId) {
        res.status(400).json({ error: "missing id" });
        return;
    }

    Student.findOne({ student_id: studentId }).exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(400).json({ error: err });
        });
});

router.post("/student", (req, res) => {
    const body = req.body;
    const newStudent = new Student(body);
    newStudent.save()
        .then(result => { res.status(200).json(result); })
        .catch(err => { res.status(400).json(err); });
});

router.patch("/student/:id", (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    Student.updateOne({ _id }, body)
        .then(result => { res.status(200).json(result); })
        .catch(err => { res.status(400).json(err); });
});

module.exports = { router };