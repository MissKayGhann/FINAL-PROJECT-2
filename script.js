"use strict"

let SaveTask = document.getElementById("saveForm")
let Tasks = []

function Save() {
    let toDo = {}
    toDo.subject = document.getElementById("todo-subject").value
    toDo.content = document.getElementById("todo-content").value
    toDo.complete = document.getElementById("complete-by").value
    toDo.status = document.getElementById("todo-status-dropdown").value

    console.log (toDo)
    Tasks.push (toDo)
    // renderToDo (toDo)
    // if (Tasks.length< 5) {
    //     insertTableRow(toDo)
    // }
    localStorage.setItem("Tasks",JSON.stringify(Tasks))
    renderTasks()
    
}

Tasks = JSON.parse(localStorage.getItem("Tasks"))
console.log("Tasks")
if (Tasks ==null){
    Tasks=[]
}
renderTasks()

function renderTasks () {
    document.getElementById("holder").innerText=""
    for (let i=0; i<Tasks.length; i++) {
        renderToDo(Tasks[i], i)
    }
}

function renderToDo (toDo, i) {
    let vessel = document.createElement ("div")
    vessel.className="vessel"
    document.getElementById("holder").appendChild(vessel)

    let subject = document.createElement("h3")
    vessel.appendChild(subject)
    subject.innerText = toDo.subject

    let content = document.createElement("h2")
    vessel.appendChild(content)
    content.innerText = toDo.content

    let complete = document.createElement("p")
    vessel.appendChild(complete)
    complete.innerText = toDo.complete

    let statusDropDown = document.createElement("select");
    let selectOption = document.createElement("option");
    selectOption.value = "Not Done";
    selectOption.text = "Not Done";
    statusDropDown.appendChild(selectOption)
    vessel.appendChild(statusDropDown)

    selectOption = document.createElement("option");
    selectOption.value = "In Progress";
    selectOption.text = "In Progress";
    statusDropDown.appendChild(selectOption)

    selectOption = document.createElement("option");
    selectOption.value = "Completed";
    selectOption.text = "Completed";
    statusDropDown.appendChild(selectOption)
    statusDropDown.value = toDo.status 
    console.log (toDo.status)
    statusDropDown.className = "status-box"

    statusDropDown.oninput = () => {
        alert (i + statusDropDown.value)
        Tasks[i].status = statusDropDown.value
        localStorage.setItem("Tasks",JSON.stringify(Tasks))
    }
    
    let closeToDo = document.createElement("span")
    let text = document.createTextNode("\u00D7")
    closeToDo.className = ("close")
    closeToDo.appendChild(text)
    vessel.appendChild(closeToDo)
    closeToDo.onclick = () => {
        Tasks.splice(i, 1)
        localStorage.setItem("Tasks",JSON.stringify(Tasks))
        renderTasks()
    } 

}

let SaveTheNote = document.getElementById("saveNotes")
let NotesSaver = []

function saveNotes() {
    let toNote = {}
    toNote.subjectTwo = document.getElementById("notes-subject").value
    toNote.contentTwo = document.getElementById("notes-content").value

    console.log (toNote)
    NotesSaver.push (toNote)
  
    localStorage.setItem("NotesSaver",JSON.stringify(NotesSaver))
    renderNotes()
    
}

NotesSaver = JSON.parse(localStorage.getItem("NotesSaver"))
console.log("NotesSaver")
if (NotesSaver ==null){
    NotesSaver=[]
}
renderNotes()

function renderNotes () {
    document.getElementById("notes-holder").innerText=""
    for (let i=0; i<NotesSaver.length; i++) {
        renderToNotes(NotesSaver[i], i)
    }
}

function renderToNotes (toNote, i) {
    let vesselTwo = document.createElement ("div")
    vesselTwo.className="vessel-two"
    document.getElementById("notes-holder").appendChild(vesselTwo)

    let subjectTwo = document.createElement("h3")
    vesselTwo.appendChild(subjectTwo)
    subjectTwo.innerText = toNote.subjectTwo

    let contentTwo = document.createElement("p")
    vesselTwo.appendChild(contentTwo)
    contentTwo.innerText = toNote.contentTwo
    
    let closeToNotes = document.createElement("span")
    let textTwo = document.createTextNode("\u00D7")
    closeToNotes.className = ("closeTwo")
    closeToNotes.appendChild(textTwo)
    vesselTwo.appendChild(closeToNotes)
    closeToNotes.onclick = () => {
        NotesSaver.splice(i, 1)
        localStorage.setItem("NotesSaver",JSON.stringify(NotesSaver))
        renderNotes()
    } 
}


const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
const closeBttn = document.querySelector("#close-btn-1")
const themeToggle = document.querySelector(".theme-toggle")

menuBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", ()=> {
    sideMenu.style.display = "none";
})

themeToggle.addEventListener ("click", ()=> {
    document.body.classList.toggle("dark-theme-variables")

    themeToggle.querySelector('span').classList.toggle('active')
})


const formContain = document.querySelector(".form-container")
const addTask = document.querySelector("#add-task")


addTask.addEventListener("click", ()=> {
    formContain.style.display ="block";
})

closeBttn.addEventListener("click", ()=> {
    formContain.style.display = "none";
})

const taskHolder = document.querySelector(".outer-holder")
const allTasks = document.querySelector("#all-tasks")
const closeButton = document.querySelector(".close-button")

allTasks.addEventListener("click", ()=> {
    taskHolder.style.display = "block"
} )

closeButton.addEventListener("click", ()=> {
    taskHolder.style.display = "none"
})

const scheduleHolder = document.querySelector(".outer-schedule-holder")
const Schedule = document.querySelector("#schedule")
const closeButtonTwo = document.querySelector(".close-button-two")

Schedule.addEventListener("click", ()=> {
    scheduleHolder.style.display = "block"
})

closeButtonTwo.addEventListener("click", ()=> {
    scheduleHolder.style.display = "none"
})

const notesHolder = document.querySelector(".outer-notes-holder")
const Notes = document.querySelector("#notes")
const closeButtonThree = document.querySelector(".close-button-three")

Notes.addEventListener("click", ()=> {
    notesHolder.style.display = "block"
})

closeButtonThree.addEventListener("click", ()=> {
    notesHolder.style.display = "none"
})

const formContainTwo = document.querySelector(".form-container-two")
const addNote = document.querySelector("#add-note")
const closeButtonFour = document.querySelector(".close-btn-four")


addNote.addEventListener("click", ()=> {
    formContainTwo.style.display ="block";
})

closeButtonFour.addEventListener("click", ()=> {
    formContainTwo.style.display = "none";
})


// function insertTableRow(toDo) {
//     const myTable = document.getElementById("table")
//     const row = myTable.insertRow();
//     const cellSubject = row.insertCell();
//     const cellSnippet = row.insertCell();
//     const cellDate = row.insertCell();
//     const cellStatus = row.insertCell();

//     let statusDropDown = document.getElementById("todo-status-dropdown");
//     let selectOption = document.createElement("option");
//     selectOption.value = "Not Done";
//     selectOption.text = "Not Done";
//     statusDropDown.appendChild(selectOption)
//     // let Select = document.querySelector("select");

//     cellSubject.innerHTML = toDo.subject
//     cellSnippet.innerHTML = toDo.content
//     cellDate.innerHTML =toDo.complete
//     cellStatus.innerHTML = toDo.Status   
// }

