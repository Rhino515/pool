const drills = [
{ id:1, name:"Follow Shot Control"},
{ id:2, name:"Clean Pocketing"},
{ id:3, name:"Thin Cut"},
{ id:4, name:"High Follow"},
{ id:5, name:"Two Rail Target"},
{ id:6, name:"Landing Zone"},
{ id:7, name:"Stop Shot"},
{ id:8, name:"Soft Roll"},
{ id:9, name:"Side Rail Shape"},
{ id:10, name:"Rail Targets"},
{ id:11, name:"Stun Shot"},
{ id:12, name:"Stun Draw"},
{ id:13, name:"Draw Control"},
{ id:14, name:"Soft Draw"},
{ id:15, name:"Diamond Control"},
{ id:16, name:"Rail Progression"},
{ id:17, name:"Position Play"},
{ id:18, name:"Above Center"},
{ id:19, name:"Below Center"}
]

let xp = 0
let streak = 0

const drillContainer = document.getElementById("drills")

function renderDrills(){

drills.forEach(drill=>{

const div = document.createElement("div")
div.className = "drill"

div.innerHTML = `
<h3>#${drill.id} ${drill.name}</h3>
<button onclick="completeDrill()">Complete</button>
`

drillContainer.appendChild(div)

})

}

function completeDrill(){

xp += 50
streak += 1

document.getElementById("xp").innerText = xp
document.getElementById("streak").innerText = streak

updateRank()

}

function updateRank(){

let rank = "Beginner"

if(xp > 500) rank = "Intermediate"
if(xp > 1500) rank = "Advanced"
if(xp > 4000) rank = "Semi Pro"
if(xp > 8000) rank = "Pro"

document.getElementById("rank").innerText = rank

}

renderDrills()
