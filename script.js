// Digital Library

let todoInput = document.getElementById("input");

let todoInput2 = document.getElementById("input2");

let addButton = document.getElementById("btn");

let todoArray = [];

// click button should
addButton.addEventListener("click", function(){
    let put1 = todoInput.value;
    let put2 = todoInput2.value;

    // for some reason
    if(put1 === "" || put2 === ""){
        alert("Please enter both title and author");
        return;
    }

    // logical check
    addNewTeg(put1, put2);

    // clear input fields
    todoInput.value = "";
    todoInput2.value = "";
});

// Function to add new book
function addNewTeg(text, text2) {
    let noteDiv = document.createElement("div");
    noteDiv.setAttribute("id", "result");

    
    // add p and 2 buttons teg
    let pTeg = document.createElement('p');
    
    noteDiv.appendChild(pTeg);
    
    // for read
    let readBtn = document.createElement('button');
    readBtn.innerHTML = "I'm reading";
    
    noteDiv.appendChild(readBtn);
    readBtn.setAttribute("id", "read");
    
    // reading
    readBtn.addEventListener("click", function(){
        readBtn.innerHTML = "Read";
        readBtn.value = "I'm reading";
    });
    
    // for remove
    let delBtn = document.createElement('button');
    delBtn.innerHTML = "Delete";
    
    noteDiv.appendChild(delBtn);
    delBtn.setAttribute("id", "del");
    
    // delete
    delBtn.addEventListener("click", function() {
        noteDiv.remove();
    });
    
    // let result = "${pTeg} by ${text2} - ${readBtn}";
    
    let result = text + " by " + text2 + " - Unread"; 
    pTeg.innerHTML = result;
    
    document.getElementById("result-case").appendChild(noteDiv);
    
    
    return result;
}
