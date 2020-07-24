var list = document.getElementById("list");

function addTodo(){
    var todo = document.getElementById("input");


    var li = document.createElement("li")
    li.setAttribute("class","lie")

//div

    var div = document.createElement("div");
    var divtext = document.createTextNode(todo.value);
    // console.log(divtext)
    div.setAttribute("class","divbtn");
    div.appendChild(divtext);

//delete

    var delbtn = document.createElement("button");
    var deltext = document.createTextNode("DeletE");
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.appendChild(deltext);
    div.appendChild(delbtn)
    console.log(div)

//edit

var editbtn = document.createElement("button");
var edittext = document.createTextNode("EdiT")
editbtn.setAttribute("class","btn");
editbtn.setAttribute("onclick","editItem(this)")
editbtn.appendChild(edittext);
div.appendChild(editbtn);

li.appendChild(div)
list.appendChild(li)
console.log(list)



todo.value = ""
}

function deleteitem(a){
    console.log("a", a)
    a.parentNode.parentNode.remove()
}

function editItem(a){
    var val = prompt("enter name value" ,a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = ""
}