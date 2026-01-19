
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

// app.get('/', (req,res)=>{
    // const data =  fs.readFileSync('data.json', 'utf-8')
    // res.sendFile('C:/Users/kodecode/Documents/html/task_manager/index.html');
    // const jd = JSON.parse(data)
    // res.send(data)
// })

app.post('/add-task', async (req, res)=>{
 
    
    const body = req.body;
    console.log(req.body);
    
    const file =await fs.readFile('./data.json', 'utf-8');
   
    const dani = JSON.parse(file);
    
    dani.push(body);
   
    
     fs.writeFile('./data.json', JSON.stringify(dani));
})

app.listen(PORT,()=>
console.log('start listiening')
);
