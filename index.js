import Express from "express";

const app = Express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.send("Hello World! From Docker & Node!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});