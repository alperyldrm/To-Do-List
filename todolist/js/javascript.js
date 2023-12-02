let newTaskDOM = document.querySelector('#liveToastBtn');
//newTaskDOM.addEventListener("click", newElement);

let completeTaskDOM = document.querySelector("li")
completeTaskDOM.addEventListener("click", completeTask);


function newElement(){
    var newTask = document.querySelector("#task").value; //searchteki taski alma
    var trimmedTask = newTask.trim() // boşluklardan arındırma
    let ulDOM = document.querySelector("ul#list");
    let liDOM = document.createElement('li');
    if(trimmedTask === ""){
            //uyarı eklenecek
    }else{
        liDOM.innerHTML = newTask
        liDOM.className = "Unchecked"
        ulDOM.append(liDOM)
        document.querySelector("#task").value = "" //searchü temizleme
    }
}

function completeTask(){
    this.style.setProperty("text-decoration", "line-through");
    this.style.backgroundColor = "blue"
}