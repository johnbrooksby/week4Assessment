const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const { getCompliment, getFortune, addPrayerRequest, getPrayerList, editPrayer } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/prayer", addPrayerRequest)
app.get("/api/prayerlist", getPrayerList)
app.put("/api/prayerlist", editPrayer)

app.listen(4000, () => console.log("Server running on 4000"));
