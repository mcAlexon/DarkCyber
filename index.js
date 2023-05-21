var standart = document.getElementById("button__STANDART");
var vip = document.getElementById("button__VIP");
var list1 = document.getElementById("list-1");
var list2 = document.getElementById("list-2");

list1.style.display = "flex";
list2.style.display = "none";
function changeColor(button,color){
    button.style.color=color;
}
standart.addEventListener("click",function(){
    changeColor(standart,"white");
    changeColor(vip,"gray");
    list1.style.display="flex";
    list2.style.display="none";
})
vip.addEventListener("click", function(){
    changeColor(standart, "gray");
    changeColor(vip, "white");
    list2.style.display="flex";
    list1.style.display="none";
  });
