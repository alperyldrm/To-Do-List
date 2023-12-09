const TODOLIST = localStorage.getItem("todolist");
const TOAST = document.querySelectorAll("#liveToast");

if (TODOLIST) ulDOM.innerHTML = JSON.parse(TODOLIST);

function newElement(){
    const newTask = document.querySelector("#task").value; //searchteki taski alma
    var trimmedTask = newTask.trim() // boşluklardan arındırma
    let ulDOM = document.querySelector("ul#list"); //ul elementini seçme
    let liDOM = document.createElement('li'); // bir li elementi oluşturma

    if(trimmedTask === ""){
        $(TOAST[1]).toast('show')
    }else{
        liDOM.innerHTML = newTask //li elementinin içine newtaskı ayzma
        ulDOM.append(liDOM) //li elementini ul elementine ekleme
        document.querySelector("#task").value = "" //searchü temizleme,
        const DLTSPN = document.createElement("span");         // Delete butonu oluşturma  
        DLTSPN.innerHTML = "&times;"; // delete butonuna çarpı tuşu ekleme
        DLTSPN.classList.add("close"); //bu tuşun görevinin close olduğunu class olarak ekleme
        DLTSPN.addEventListener("click", () => removeElement(liDOM)); // çarpıya tıklanırsa removeelement fonksiyonunu çağırma
        liDOM.appendChild(DLTSPN); // lidom'un içine oluşturulan delete butonunu ekleme
        saveToLocalStorage(ulDOM); //uldom local storage'ına kydetme
        $(TOAST[0]).toast('show') // toast bildirimi gösterme
        liDOM.addEventListener("click", () => {         // li'ye tıklanırsa bu fonksiyon çalışacak
        if (liDOM.classList.contains("checked")) liDOM.classList.remove("checked"); // checked varsa checkeddan çıkarma işlevi
        else liDOM.classList.add("checked"); // checked yoksa checked ekleme 
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