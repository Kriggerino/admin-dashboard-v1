const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(3002, ()=>{
    console.log('Server is running on port 3002');
})

//Database Info
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'plantdb',
})
// //Route to server
// app.post('/register', (req, res)=>{
//     //Variables from the form
//     const sentEmail = req.body.Email;
//     const sentUsername = req.body.Username;
//     const sentPassword = req.body.Password;

//     const query='INSERT INTO users(email, username, password) VALUES (?,?,?)'

//     const values = [sentEmail, sentUsername, sentPassword];

//     db.query(query, values, (err, results)=>{
//         if(err){
//             res.send(err);
//         } else {
//             console.log('User successfully created!');
//             res.send({message: "User added."});
//         }
//     })
// })

app.post('/login', (req, res)=>{
    const sentLoginUsername = req.body.LoginUsername;
    const sentLoginPassword = req.body.LoginPassword;

    const query='SELECT * FROM users WHERE username=? && password=?'
    const values = [sentLoginUsername, sentLoginPassword]
    db.query(query, values, (err, results)=>{
        if(err){
            res.send({error:err});
        }
        if(results.length > 0){
            res.send(results);
        }
        else {
            res.send({message: 'Credentials not match!'})
        }
    })
})

app.get('/getUser', (req, res) => {
    const query = "SELECT * FROM users";
    db.query(query, (err, result) => {
        if(err) return res.json({Error: "Get user error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})
