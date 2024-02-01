import dotenv from "dotenv";
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(cors()); // CORS to enable run our backend in other ports also

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// To check the database connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database!');
  }
});

app.use(express.json());
app.post('/wayne_ent', (req, res) => {
  const formData = req.body.formData;

  const sql = 'INSERT INTO clubs (form_data) VALUES (?)';

  connection.query(sql, [JSON.stringify(formData)], (err, result) => {
    if (err) {
      console.error('Error saving form data:', err);
      res.status(500).json({ error: 'Internal Server Error', message: err.message });
    } else {
      console.log('Form data saved successfully');
      res.status(200).json({ success: true });
    }
  });
});

app.get('/clubs', (req, res)=>{
   connection.query('SELECT * from clubs', (err, result)=>{
    if(err){
      res.send(err);
    }else if(result){
      res.send(result);
    }})
})


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});