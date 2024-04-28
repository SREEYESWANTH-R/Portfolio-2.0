const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "localhost",
  user : "root",
  password: "root",
  database: "porto"
})

app.post('/contact',(req,res)=>{

  const{name, email, feedback} = req.body;
  const sql = "INSERT INTO contact_deatils (name, email, msg) VALUES(?,?,?)";
  db.query(sql,[name,email,feedback],
  (err,result)=> {
    if (err) {
        console.error('invalid details:', err);
        res.status(500).json({ error: 'Error occurred during registration' });
    } else {
        console.log('feedback sent successfully');
        res.status(200).json({ message: 'User registered successfully' });
    }
})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
