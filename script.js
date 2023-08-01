const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.create-btn');

let notes = document.querySelectorAll('.input-box');



function saveData(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function showTasks(){
  
        notesContainer.innerHTML=localStorage.getItem("notes");
 
}
showTasks();
createBtn.addEventListener('click', () => {

    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    // inputBox.className = "input-box"; we can use anyone to add class method
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    


});

notesContainer.addEventListener('click', function (e) {
    
        if (e.target.tagName === "IMG") { // or we can use e.target.tagName === "IMG"
            e.target.parentElement.remove();
            saveData();
        }
        else if (e.target.tagName === "P") {
            notes = document.querySelectorAll('.input-box');
               notes.forEach(nt => {
                nt.onkeyup=function(){
                    saveData();
                }
                });
        
        }

        
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


 