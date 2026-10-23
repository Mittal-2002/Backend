//server create karna 
// server config karna 

const express = require("express")

const app = express()

app.use(express.json())

const notes = [
    // {
    //     title: "test title 1",
    //     description: "test description 1"
    // }
]

app.post("/notes",(req,res)=>{
    notes.push(req.body)
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    console.log(req.params.index)
    delete notes[req.params.index] 
    res.send("note deleted successfully")
})

// patch /notes/:index
// req.body = {description :- "sample modified description"}

app.patch("/notes/:index", (req,res) => {
    notes[req.params.index].description = req.body.description
    res.send("Note updated successfully")
})

module.exports = app