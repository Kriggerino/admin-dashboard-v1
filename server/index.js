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
app.use(cors(
    {
        origin: ["http://127.0.0.1:5173"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));
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

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Error: "You are no Authenticated"});
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) return res.json({Error: "Token wrong"});
            req.role = decoded.role;
            req.id = decoded.id;
            next();
        } )
    }
}


app.get('/dashboard',verifyUser, (req, res) => {
    return res.json({Status: "Success", role: req.role, id: req.id})
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users Where email = ?";
    con.query(sql, [req.body.email], (err, result) => {
        if(result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password, (err, response)=> {
                if(err) return res.json({Error: "password error"});
                if(response) {
                    const token = jwt.sign({role: req.body.role, id: result[0].id}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success", id: result[0].id})
                } else {
                    return res.json({Status: "Error", Error: "Wrong Email or Password"});
                }
                
            })
            
        } else {
            return res.json({Status: "Error", Error: "Wrong Email or Password"});
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = "Delete FROM users WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "delete employee error in sql"});
        return res.json({Status: "Success"})
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO users (`email`,`username`,`password`, `address`, `extra`, `role`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
        if(err) return res.json({Error: "Error in hashing password"});
        const values = [
            req.body.email,
            req.body.name,
            hash,
            req.body.address,
            req.body.extra,
            'user'
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: err});
            return res.json({Status: "Success"});
        })
    })
})

app.get('/getUser', (req, res) => {
    const query = "SELECT * FROM users";
    con.query(query, (err, result) => {
        if(err) return res.json({Error: "Get user error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})

app.get('/get/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM users where id = ?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Error: "Get employee error in sql"});
        return res.json({Status: "Success", Result: result})
    })
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE users set role = ?, username = ?, email = ? WHERE id = ?";
    con.query(sql, [req.body.role,req.body.username, req.body.email, id], (err, result) => {
        if(err) return res.json({Error: "update user error in sql"});
        return res.json({Status: "Success"})
    })
})


app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
})

app.listen(8081, ()=> {
    console.log("Running");
})