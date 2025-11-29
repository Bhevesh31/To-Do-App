const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const lightDarkBtn = document.querySelector(".dark-btn");
const mainContainer = document.querySelector(".main-container");
const body = document.querySelector("body");
const clickMe = document.querySelector(".click-me");
const themeBtn = document.querySelector(".theme-btn");
const heading = document.querySelector("#heading");
const container = document.querySelector(".container");
const html = document.querySelector("html");


function addTask(){
    if(taskInput.value === ''){
        alert("Please enter a task");
    } else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = '';
    saveData();
}

addTaskBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
};

function showList(){
    taskList.innerHTML = localStorage.getItem("data");
}

showList();
    
themeBtn.addEventListener('click',()=>{
    console.log("clicked");
    
    if(lightDarkBtn.classList.contains("dark-btn")){
        lightDarkBtn.classList.add("light-btn");
        lightDarkBtn.classList.remove("dark-btn");
        mainContainer.style.backgroundColor = "#1e1e1e";
        html.style.backgroundColor = "#1e1e1e"
        heading.style.color = "#e2dbc2ff";
        themeBtn.style.border = "3px solid white";
        container.style.backgroundColor = "#1c4381ff";
        

    }
    else{
        lightDarkBtn.classList.add("dark-btn");
        lightDarkBtn.classList.remove("light-btn");
        mainContainer.style.backgroundColor = " #dfd09bff";
        html.style.backgroundColor = "#dfd09bff"
        heading.style.color = "black";
        themeBtn.style.border = "3px solid black";
        container.style.backgroundColor = "#16404D"
    }
})


