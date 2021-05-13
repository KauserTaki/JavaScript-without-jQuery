//learnwebcode tutorials 13 May, 2021


//var listItems = document.getElementById("list").getElementsByTagName("li");
var listItems = document.querySelectorAll("#list li");

//var headLine = document.getElementById("headline");
var headLine = document.querySelector("#headline");

//var btn = document.getElementById("btn");
var btn = document.querySelector("#btn");

//var updatedList = document.getElementById("list");
var updatedList = document.querySelector("#list");
var subordinateCounter = 1;

updatedList.addEventListener("click", activateItem);

//  for(i = 0; i < listItems.length; i++){
//      listItems[i].innerHTML = "Sub-Ordinate";
//  }

// for(i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener("click", activateItem);
// }

// headLine.innerHTML = this.innerHTML;
//     for(i = 0; i < listItems.length; i++){
//         listItems[i].classList.remove("active");
//     }

//     this.classList.add("active");

function activateItem(e){
    //alert("Click Ditected!");
    if(e.target.nodeName == "LI"){
        headLine.innerHTML = e.target.innerHTML;
            for(i = 0; i < e.target.parentNode.children.length; i++){
                e.target.parentNode.children[i].classList.remove("active");
            }

        e.target.classList.add("active");
    }
}

btn.addEventListener("click", createNewItem);

function createNewItem(){
    updatedList.innerHTML += "<li>Sub Ordinate " + subordinateCounter++ + "</li>";
}