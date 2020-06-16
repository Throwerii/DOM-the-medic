const newElement = document.querySelector("main")
const newBody=document.querySelector('body')
const Kata1Heading = document.createElement("h1")
const thief = document.createElement("h1")
const newLink = document.createElement("p")
Kata1Heading.append("Steal Your Heart")
newElement.append(Kata1Heading)

let imgElement = document.createElement('img')
imgElement.src = 'images/persona 5.jpeg'
newElement.append(imgElement)
imgElement.className = 'potato'

let anchorElement = document.createElement('a')
anchorElement.href = 'https://en.wikipedia.org/wiki/Persona_5'
// newElement.append('Learn More Here')
anchorElement.innerText='Learn More Here'
newLink.append(anchorElement)
newElement.append(newLink)
//classList.add
let newButton=document.createElement('button')
newBody.append(newButton)
newButton.append('Press Me')

newButton.addEventListener("click", function(){
    newBody.append(thief)
    newElement.innerHTML=''
    console.log("Stole Your Page")
    thief.append('Stole Your Page')
    
})