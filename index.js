import express from "express"

const app = express();

app.get('/' , (req , res)=>{
    req.json("Random Jokes API");
})

app.get('/api/jokes/random' , (req , res)=>{
    const randomJokes = `https://official-joke-api.appspot.com/jokes/random/${Math.floor(Math.random()*1000)}`
    res.json(randomJokes);
})

app.listen(3000 , ()=>{
    console.log("Server Started");
})