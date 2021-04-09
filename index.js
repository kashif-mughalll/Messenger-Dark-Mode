var InputBarWidth = 17;

function InputBarAnimation(){
    document.getElementById("Hid1").style.display = "none";
    document.getElementById("Hid2").style.display = "none";
    document.getElementById("Hid3").style.display = "none";
    document.getElementById("messagesContainerTray").id = "messagesContainerTray2";
    document.getElementById("InputBar").style.width = "25rem";

    var IntervalId = setInterval(() => {
        if(InputBarWidth < 25){
            InputBarWidth += 0.25;
            document.getElementById("InputBar").style.width = InputBarWidth + "rem";
        }else{
            clearInterval(IntervalId);
        }
    }, 8);
}

document.getElementById("InputBar").addEventListener('click',()=> {
    InputBarAnimation();
})


