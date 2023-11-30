let cp1button = document.querySelector("#CP1")
let cp2button= document.querySelector("#CP2")
const pupNum1 = document.querySelector("#pupNum1")
const pupNum2 = document.querySelector("#pupNum2")
let countDsply1 = document.querySelector(".counter-dsply")
let countDsply2 = document.querySelector(".counter-dsply2")
let pup1Vote = 0
let pup2Vote = 0
//let count = 0
//let count2 = 0
function updateDisplay1 (){
    countDsply1.innerHTML = pup1Vote
}
function updateDisplay2 (){
    countDsply2.innerHTML = pup2Vote
}

cp1button.addEventListener ("click", () => {
 pupNum1.innerHTML = pup1Vote++
 updateDisplay1()


})
cp2button.addEventListener ("click", () => {
 pupNum2.innerHTML = pup2Vote++
 updateDisplay2()
})

async function fetchPuppies (){
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    console.log(response)
    const data = await response.json
    console.log(data)
}

