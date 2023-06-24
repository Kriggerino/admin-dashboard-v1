import require from 'requirejs';
const express= require('express')
const mysql = require('mysql')
const cors = require('cors')
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());




//Database Info
const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'plantdb',
})

con.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    } else {
        console.log("Connected");
    }
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users Where email = ? AND  password = ?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if(err) return res.json({Status: "Error", Error: "Error in running query"});
        if(result.length > 0) {
            // const id = result[0].id;
            // const token = jwt.sign({role: "admin", id}, "jwt-secret-key", {expiresIn: '1d'});
            // res.cookie('token', token);
            return res.json({Status: "Success"})
        } else {
            return res.json({Status: "Error", Error: "Wrong Email or Password"});
        }
    })
})

app.get('/getUser', (req, res) => {
    const query = "SELECT * FROM users";
    con.query(query, (err, result) => {
        if(err) return res.json({Error: "Get user error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})


app.listen(8081, ()=> {
    console.log("Running");
})