const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const port = 8080
app.use(express.urlencoded());

const studentArray = require('./InitialData');

// we have to Parse JSON bodies (as sent by API clients/ users)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

//get data
app.get('/api/student', (req, res) => {
    res.json(studentArray);
});
//get a single data 
app.get('/api/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = studentArray.find((s) => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});
//save data  //post
app.post('/api/student', (req, res) => {
    const { name, currentClass, division } = req.body;
    if (!name || !currentClass || !division) {
        res.status(400).send('Incomplete details provided');
        return;
    }
    const newStudent = {
        id: studentArray.length + 1,
        name,
        currentClass: parseInt(currentClass),
        division
    };
    studentArray.push(newStudent);
    res.json(newStudent);
});
//update data
app.put('/api/student/:id', (req, res) => { 
    const id = parseInt(req.params.id);
    const { name } = req.body;
    const student = studentArray.find((s) => s.id === id);
    if (!student) {
        return res.status(400).send('Student not found');
    }
    if (!name) {
        return res.status(400).send('Name is required');
    }
    student.name = name;
    res.send(`Student with id ${id} has been updated`);
});
//delete data
app.delete('/api/student/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = studentArray.findIndex((s) => s.id === id);
    if (index === -1) {
        return res.status(404).send('Student not found');
    }
    studentArray.splice(index, 1);
    res.send(`Student with id ${id} has been deleted`);
});
app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;   

//how to run this is given below


// code TEMPLATE GIVEN IN Q  & all four files and pakages were given in Q
// const express = require('express')
// const app = express()
// const bodyParser = require("body-parser");
// const port = 8080
// app.use(express.urlencoded());

// // Parse JSON bodies (as sent by API clients)
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// // your code goes here


// app.listen(port, () => console.log(`App listening on port ${port}!`))

// module.exports = app;   


//---------------------------------------------

// Q : // (School Administration)
// With online schooling on the rise, every school needs software to store the information of the students. 
// New student records need to be added when admissions happen, 
// their details updated when students pass to the next class 
// and records need to be deleted when students leave

// Details
// A student record consists of the following structure.
// id
// name
// currentClass
// division

// The server should respond to GET, POST, PUT, DELETE request

/*------------------------------------------------------------------------
// HOW TO RUN  
//node index.js

//go to postman //to get data-------------
//1st case: paste : http://localhost:8080/api/student.
{

}
//to get single data---------------------
paste: http://localhost:8080/api/student/:id
GET -- params -- path -- type id and no. form 1 to 7 in and key and no.
{

}
//for post: write in body ----------------
{
     "id" : 3
    "name" : "Hussian"

}
//for post or to save daata-------------------
in body:
{
    "name" : "Minakshi",
    "currentClass" : 12,
    "division" : "C"
}

*/