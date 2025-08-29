const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
	const url = "mongodb+srv://rudrarothe9_db_user:7hO7bGRWbC3e5PRm@cluster0.44sle2k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("ss_29aug25");
	const coll = db.collection("student");
	const doc = {"name": req.body.name, "company": req.body.company, "salary": req.body.salary};
	coll.insertOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});
app.listen(9000, () => {console.log("ready @ 9000"); });