const express = require('express');
const {todo} = require('./db')
const app = express();

app.use(express.json());
// app.use(bodyParser.json());
app.get('/todos', async(req, res) => {
    try{
        const todos = await todo.find({});
        if(!todos){
            //data is not exist
            res.status(404).json({
                msg : "Data not found"
            })
        }
        else{
            res.json({
                todos
            })
        }

    }
    catch(error){
        res.status(505).json({
            msg : error
        })
    }
})

app.post('/create-todo', async(req, res) =>{
    //create the todos
    const {title, descrption} = req.body;

    try{
        await todo.create({
            title,
            descrption
        })
        res.json({
            msg :"To do created"
        })
    }
    catch(error){
        res.status(411).json({
            msg : "Error"
        })
    }
    //write the logic of creatig a todo
})

app.put('/update-todo', async(req,res) =>{
    //update the todo

    const {id} = req.body;
    try{
        await todo.updateOne({
            _id : id
        }, {
            isComplate : true
        })
        res.json({
            msg : "Task complated"
        })
    }
    catch(error){
        res.status(505).json({
            msg : "Server Error"
        })
    }

})
app.listen(3000, ()=>{
    console.log("Server is running");
})