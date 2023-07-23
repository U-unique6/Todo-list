const inputBox=document.getElementById("inputBox");
const listContainer= document.getElementById("listContainer")
const Button=document.getElementById("btn");
    Button.onclick=function(e){
    if(inputBox.value === ''){
        alert("You must write your list");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
     
        let img= document.createElement("img");
        img.setAttribute("src" , "images/cross.png");
        li.appendChild(img);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
else if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    saveData();
}
}, false);
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();