const div1 = document.querySelector(".item2");
    div1.addEventListener("click", () => {
        const audio = new Audio('audio1.mp3');
        audio.play()
    });
const div2 = document.querySelectorAll(".item2")[1];
    div2.addEventListener("click",()=>{
        const audio = new Audio('audio2.mp3');
        audio.play();
    });
    const div3 = document.querySelectorAll(".item2")[2];
    div3.addEventListener("click",()=>{
        const audio = new Audio('audio3.mp3');
        audio.play();
    });
    const div4 = document.querySelectorAll(".item2")[3];
    div4.addEventListener("click",()=>{
        const audio = new Audio('audio4.mp3');
        audio.play();
    });
    const div5 = document.querySelectorAll(".item2")[4];
    div5.addEventListener("click",()=>{
        const audio = new Audio('audio5.mp3');
        audio.play();
    });
     const div6 = document.querySelectorAll(".item2")[5];
    div6.addEventListener("click",()=>{
        const audio = new Audio('audio6.mp3');
        audio.play();
    });
for(let i = 0;i<9;i++)
        {
            document.querySelectorAll(".item3")[i].addEventListener("click",()=>{
              const audio = new Audio('audio7.mp3');
                audio.play();  
            })
        }