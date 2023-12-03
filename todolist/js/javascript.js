const TODOLIST = localStorage.getItem("todolist");
const TOAST = document.querySelectorAll("#liveToast");

if (TODOLIST) ulDOM.innerHTML = JSON.parse(TODOLIST);

function newElement(){
    const newTask = document.querySelector("#task").value; //searchteki taski alma
    var trimmedTask = newTask.trim() // boşluklardan arındırma
    let ulDOM = document.querySelector("ul#list");
    let liDOM = document.createElement('li');

    if(trimmedTask === ""){
        $(TOAST[1]).toast('show')
    }else{
        liDOM.innerHTML = newTask
        ulDOM.append(liDOM)
        document.querySelector("#task").value = "" //searchü temizleme,
        const DLTSPN = document.createElement("span");         // Delete butonu ekleme  
        DLTSPN.innerHTML = "&times;";
        DLTSPN.classList.add("close");
        DLTSPN.addEventListener("click", () => removeElement(liDOM));
        liDOM.appendChild(DLTSPN);
        saveToLocalStorage(ulDOM);
        $(TOAST[0]).toast('show')
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
// Listener to check class and save to local storage
document.querySelectorAll("#list > li").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("checked")) item.classList.remove("checked");
      else item.classList.add("checked");
      saveToLocalStorage(ulDOM);
    });
  });

const removeElement = (element) => {
    element.remove();
  };

  // Add and event listener to input field to create a new list item on enter key press
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") newElement();
  });

  function saveToLocalStorage(item) {
  localStorage.setItem("todolist", JSON.stringify(item.innerHTML));
}