let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turno=true;
let newbtn=document.querySelector("#newgame");
let movecount=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno){
            box.innerText='O';
            turno=false;
           
        }
        else{
            box.innerText='X'
            turno=true
          
        }
         box.disabled=true;
         movecount++;
        checkWinner()
       

    })
})
function checkWinner(){
    for(let pattern of winPatterns){
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
   
    if(box1!=""&&box1===box2&&box2===box3){
        alert("winner");
         boxes.forEach((box) => {
        box.disabled = true;
        return;
    });
} 
    }
    if(movecount==9){
    alert("draw");
    
}
   
}
function reset(box){
    movecount=0;
    turno=true;
    box.forEach((b)=>{
        b.innerText="";
        b.disabled=false;
    })
   
}
resetbtn.addEventListener("click",()=>{
    reset(boxes);
})
newbtn.addEventListener("click",()=>{
    turno=true;
    movecount=0;
    boxes.forEach((box)=>{
        box.innerText=" "
        box.disabled=false;
    })
})