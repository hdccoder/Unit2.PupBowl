let cp1button = document.querySelector("#CP1")
let cp2button= document.querySelector("#CP2")
const pupNum1 = document.querySelector("#pupNum1")
const pupNum2 = document.querySelector("#pupNum2")
const pupContainer = document.querySelector(".PuppyContainer")


let pup1Vote =0
let pup2Vote = 0 


cp1button.addEventListener ("click", () => {
 pupNum1.innerHTML = pup1Vote++
})
cp2button.addEventListener ("click", () => {
 pupNum2.innerHTML = pup2Vote++
})
/////////////////////////////////////////////////////////////////////////////////////


async function render () {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    console.log(response)
    const data = await response.json
    console.log(data)
}

