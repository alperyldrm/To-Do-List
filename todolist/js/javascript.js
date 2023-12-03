function newElement(){
    var newTask = document.querySelector("#task").value; //searchteki taski alma
    var trimmedTask = newTask.trim() // boşluklardan arındırma
    let ulDOM = document.querySelector("ul#list");
    let liDOM = document.createElement('li');
    if(trimmedTask === ""){
            //uyarı eklenecek
    }else{
        liDOM.innerHTML = newTask
        ulDOM.append(liDOM)
        document.querySelector("#task").value = "" //searchü temizleme,
        const DLTSPN = document.createElement("span");         // Delete butonu ekleme  
        DLTSPN.innerHTML = "&times;";
        DLTSPN.classList.add("close");
        DLTSPN.addEventListener("click", () => removeElement(liDOM));
        liDOM.appendChild(DLTSPN);
        liDOM.addEventListener("click", () => {         // Tıklanan li'ye checked classı ekleme
        if (liDOM.classList.contains("checked")) liDOM.classList.remove("checked");
        else liDOM.classList.add("checked");
  });
    }
}
  

document.querySelectorAll('#list > li').forEach((item) => {
item.addEventListener("click", () => {
    if (item.classList.contains('checked')) item.classList.remove('checked');
    else item.classList.add("checked");
  });
});

const removeElement = (element) => {
    element.remove();
  };