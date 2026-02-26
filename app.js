const drills = [
{
id:1,
name:"Follow Shot Control",
desc:"Pocket the ball and control cue ball follow.",
image:"https://i.imgur.com/1qKQZ9y.png"
},
{
id:2,
name:"Clean Pocketing",
desc:"Pocket balls without touching rails.",
image:"https://i.imgur.com/2r5k3qP.png"
},
{
id:3,
name:"Thin Cut",
desc:"Thin cut sending cue ball to target.",
image:"https://i.imgur.com/3aH8QxP.png"
}
]

let xp = 0
let streak = 0

const list = document.getElementById("drillList")

const modal = document.getElementById("drillModal")
const title = document.getElementById("drillTitle")
const desc = document.getElementById("drillDesc")
const image = document.getElementById("drillImage")
const dots = document.getElementById("attemptDots")

let attempts = []

function renderDrills(){

drills.forEach(d=>{

const div = document.createElement("div")
div.className = "drill"

const button = document.createElement("button")
button.textContent = "Start Drill"

button.addEventListener("click",()=>openDrill(d))

div.innerHTML = `<h3>#${d.id} ${d.name}</h3>`
div.appendChild(button)

list.appendChild(div)

})

}

function openDrill(drill){

title.textContent = drill.name
desc.textContent = drill.desc
image.src = drill.image

attempts = []

renderDots()

modal.classList.remove("hidden")

}

function renderDots(){

dots.innerHTML = ""

for(let i=0;i<10;i++){

const d = document.createElement("div")
d.className = "dot"

if(attempts[i]) d.classList.add(attempts[i])

dots.appendChild(d)

}

}

function score(type){

if(attempts.length >= 10) return

attempts.push(type)

renderDots()

if(type === "good") xp += 10
if(type === "ok") xp += 5

document.getElementById("xp").innerText = xp

}

document.getElementById("good").onclick = ()=>score("good")
document.getElementById("ok").onclick = ()=>score("ok")
document.getElementById("bad").onclick = ()=>score("bad")

document.getElementById("close").onclick = ()=>modal.classList.add("hidden")

renderDrills()
