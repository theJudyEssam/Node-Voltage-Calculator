
let parent = document.getElementsByClassName("wrapper2")[0]
let submitbtn = document.getElementById("submit")
let resubmit = document.getElementById("resubmit")
let resistance = document.getElementsByClassName("resistances")[0]
let current= document.getElementsByClassName("current")[0]
let parent3 = document.getElementsByClassName("wrapper3")[0]
let error = document.getElementsByClassName("error")

let nodes = document.getElementsByClassName("node")[0]

nodes.addEventListener("input", function(){
   
    const value =nodes.value;
    console.log(typeof value);

    let grid = "";
    for(let i = 0; i < nodes.value;i++){
        grid += "auto ";
    }
   
    let parent = document.getElementsByClassName("wrapper2")[0];
    parent.style.gridTemplateColumns = grid;
    // let resistance = document.getElementsByClassName("resistances")[0]
    // let current= document.getElementsByClassName("current")[0]

        resistance.style.display= "block"
        current.style.display = "block"
    for(let i= 1; i <= nodes.value;i++){
        for(let j = 1; j <=nodes.value;j++){
            create_resistance("R"+i+j)}
    }
   
    for(let i = 1; i<=nodes.value;i++){
        create_current("I"+i)
    }
    nodes.disabled = true

    let submitbtn = document.getElementById("submit")
    submitbtn.style.display = "block"
    sendDataToServer(value);
    // resubmit.style.display = "block"
})



resubmit.addEventListener("click", function(){
   nodes.disabled = false
    nodes.value = ""
    parent.innerHTML = ""
    resistance.style.display = "none"
    parent3.innerHTML = ""
    current.style.display = "none"
    submitbtn.style.display = "none"
    // resubmit.style.display = "none"

})




function create_resistance(text){


    
    let parent = document.getElementsByClassName("wrapper2")[0]
    let div = document.createElement("div");
    div.classList.add("r-input")

    let label = document.createElement("label")
    label.innerHTML = text
    
    let input= document.createElement("input")
    input.type = "text"
    input.required = true
    input.name = text 


    div.appendChild(label)
    div.appendChild(input)
    parent.appendChild(div)

}

function create_current(text){
   
    let parent3 = document.getElementsByClassName("wrapper3")[0]
    let div = document.createElement("div");
    div.classList.add("r-input")

    let label = document.createElement("label")
    label.innerHTML = text
    
    let input= document.createElement("input")
    input.type = "text"
    input.required = true
    input.name = text

    div.appendChild(label)
    div.appendChild(input)
    parent3.appendChild(div)
}


function sendDataToServer(value) {
    fetch('/processValue', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: value })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        console.log('Server response:', data);
        // Handle server response if needed
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors if any
    });
}