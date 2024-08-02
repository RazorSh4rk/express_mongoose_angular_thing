const goose = require("mongoose");

goose.connect("mongodb://localhost:27017/practice0");

goose.connection.on("connected", () => {
    console.log("connected");
});
goose.connection.on("disconnected", () => {
    console.log("disconnected");
});
goose.connection.on("disconnected", (err) => {
    console.log("error", err);
});

process.on("SIGINT", async () => {
    await goose.disconnect();
    process.exit(0);
});

const Course = goose.Schema(
    {
        title: String,
        grades: [Number]
    }
)

const Student = goose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        student_id: {
            type: Number,
            required: true
        },
        courses: [Course]
    }
)

goose.model("Student", Student, "data")

