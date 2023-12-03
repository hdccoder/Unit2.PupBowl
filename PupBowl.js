//let cp1button = document.querySelector("#CP1")
//let cp2button= document.querySelector("#CP2")
//const pupNum1 = document.querySelector("#pupNum1")
//const pupNum2 = document.querySelector("#pupNum2")
//const pupContainer = document.querySelector(".PuppyContainer")


//let pup1Vote =0
//let pup2Vote = 0 


//cp1button.addEventListener ("click", () => {
// pupNum1.innerHTML = pup1Vote++
//})
//cp2button.addEventListener ("click", () => {
// pupNum2.innerHTML = pup2Vote++
//})


/////////////////////////////////////////////////////////////////////////////////////
const allPupsDiv = document.querySelector("#allPupsDiv")
const singlePupDiv = document.querySelector("#singlePup")


let pups = []

window.addEventListener("hashchange",() => {
   render ()

})
async function getPups () {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    console.log(response)
    const data = await response.json()
    //console.log(data)
    pups = data.data.players

    render()
}

function  render() {
    const pupList = pups.map((pupz) => {
        return`<div class="pupt"><a href=#${pupz.name} class="pupItem"> ${pupz.name} </a></div>`
    
    }) 
    allPupsDiv.innerHTML = "<h1>Pup Roster<h1>" + pupList.join("")
    
    
    const name = window.location.hash.slice(1)
    //console.log(name)

   const singlePup = pups.find((pup) => {
        return pup.name === name 
        
    })
     if (singlePup){

    singlePupDiv.innerHTML = `
    <h2>${singlePup.name}</h2>
    <img class="chsnpup" src=${singlePup.imageUrl} />
    <h3> Breed: ${singlePup.breed}</h3>
    <h3> Position: ${singlePup.status}</h3>
    <div> <a class="return" href=#>  Return To Rooster  </a> </div>

    `
    } else {
        singlePupDiv.innerHTML =  ""
    }
   
}



getPups()