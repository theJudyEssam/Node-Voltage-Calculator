const express = require('express')
const app = express()
const path = require('path');
const math =require('mathjs');
const bodyParser = require('body-parser')



app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(bodyParser.json());

function makearray(rows, cols) {  // this function takes the num of columns and rows and makes an array, to be fair i got this off of google :)
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr.push([]);
        for (var j = 0; j < cols; j++) {
            arr[i].push(0); 
        }
    }
    return arr;
}

function put_resistances(data, arr){

    for(let i = 1; i <= stored_value; i++){
        for(let j= 1; j <= stored_value;j++){
            let val =  data["V"+i+j]


        if(val!=0 ){
        if(val.includes("+"))
            {
            let numbers = val.split("+").map(Number)
            let result = 0;
        
            for (let i = 0; i < numbers.length;i++){
                if(numbers[i]!=0){
                    result+=1/numbers[i]
                }
        
            }
            console.log("res is " +  result)
            val = result
        }
        else{
            val = 1 / val;
        }}

        arr[i-1][j-1] = eval(val)
        console.log(data["V"+i+j])
        }
    }
}

function put_currents(data, arr){
    for(let i = 1;i <=stored_value;i++){
        arr[i-1][0] = data["I"+i]
    }
}


let stored_value = null;

app.post('/processValue', (req, res) => {  // I am using this post method to get the number of nodes that the user inputed.
    stored_value = req.body.value;
    res.json({ message: 'Value received successfully' });
});




app.get('/', (req, res)=>{ // this just renders the homepage
    res.render('index')
})


app.post('/answer', (req, res)=>{
    let data= req.body //this returns a map with all the values that the user entered, this is what we will be storing in a matrix


    if (stored_value !== null) {
        let resistance_matrix = makearray(stored_value, stored_value, data);
        let current_matrix = makearray(stored_value, 1)
        put_resistances(data, resistance_matrix)
        put_currents(data, current_matrix)
        console.log(resistance_matrix)
        const x = math.lusolve(resistance_matrix, current_matrix);
        console.log(x)
        res.render('answer', { nodes: stored_value , answer:data});
    } else {

        res.render('error')
    }
})





app.listen(3000)