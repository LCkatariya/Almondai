const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());



app.post("/contacts",async(req,res)=>{
    try{
        
        const { name , email , subject , message } = req.body;
        const newContact = await pool.query(
            "INSERT INTO contact (name , email , subject , message ) VALUES($1 , $2 , $3 , $4) RETURNING *",
            [name , email , subject , message]
            );
        res.json(newContact.rows[0]);
        
    }catch(err){
        console.error(err.message);
    }
});


app.listen(5000, () =>{
    console.log("server has started on port 5000");
});





