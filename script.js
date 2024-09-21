var input= document.getElementById("inp");
var text = document.querySelector(".text");


function Add(){
    if(input.value==""){
        alert("PLEASE ENTER TASK")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value}<i class="ri-delete-bin-6-line"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }

    }
}