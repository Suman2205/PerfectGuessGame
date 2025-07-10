
let upper;
let rand;
document.addEventListener("DOMContentLoaded", () => {
    const ruleIcon = document.querySelector(".material-symbols-outlined");
    const ruleBox = document.getElementById("rule-box");
    
    if (ruleIcon && ruleBox) {
        ruleIcon.addEventListener("mouseenter", () => {
            ruleBox.style.display = "block";
        });
        ruleIcon.addEventListener("mouseleave",()=>{
            ruleBox.style.display="none";
        })
    }
    const page = window.location.pathname;
    if (page.includes("index1.html")) {
        let n=1;
        let btn=document.getElementById("submit");
        const form = document.getElementById("game");
        let easy=document.getElementById('easy');
        console.log(easy);
        let medium=document.getElementById('medium');
        let hard=document.getElementById('hard');
        easy.addEventListener("click",function(){
            btn.disabled=false;
            upper=100;
            rand=Math.floor(Math.random()*upper)+1;
            easy.style.border="5px solid aqua";
            medium.style.pointerEvents = "none";
            medium.style.opacity = "0.5";
            medium.style.cursor = "not-allowed";
            hard.style.pointerEvents = "none";
            hard.style.opacity = "0.5";
            hard.style.cursor = "not-allowed";
        })
        medium.addEventListener("click",function(){
            btn.disabled=false;
            upper=500;
            rand=Math.floor(Math.random()*upper)+1;
            medium.style.border="5px solid aqua";
            easy.style.pointerEvents = "none";
            easy.style.opacity = "0.5";
            easy.style.cursor = "not-allowed";
            hard.style.pointerEvents = "none";
            hard.style.opacity = "0.5";
            hard.style.cursor = "not-allowed";
        })
        hard.addEventListener("click",function(){
            btn.disabled=false;
            upper=1000;
            rand=Math.floor(Math.random()*upper)+1;
            hard.style.border="5px solid aqua";
            easy.style.pointerEvents = "none";
            easy.style.opacity = "0.5";
            easy.style.cursor = "not-allowed";
            medium.style.pointerEvents = "none";
            medium.style.opacity = "0.5";
            medium.style.cursor = "not-allowed";
        })

        if (form) {
            btn.disabled=true;
            form.addEventListener("submit", () => {
                localStorage.setItem("rand", rand);
                localStorage.setItem("upper",upper );
                localStorage.setItem("n",n);
            });
        }
    }
    else if(page.includes("index2.html")){
        let n=document.getElementById("n");
        let isModeSelected=false;
        let isPlayerSelected=false;
        let btn=document.getElementById("submit");
        const form = document.getElementById("game");
        let easy=document.getElementById('easy');
        console.log(easy);
        let medium=document.getElementById('medium');
        let hard=document.getElementById('hard');
        easy.addEventListener("click",function(){
            isModeSelected=true;
            upper=100;
            rand=Math.floor(Math.random()*upper)+1;
            easy.style.border="5px solid aqua";
            medium.style.pointerEvents = "none";
            medium.style.opacity = "0.5";
            medium.style.cursor = "not-allowed";
            hard.style.pointerEvents = "none";
            hard.style.opacity = "0.5";
            hard.style.cursor = "not-allowed";
            updateSubmit();
        })
        medium.addEventListener("click",function(){
            isModeSelected=true;
            upper=500;
            rand=Math.floor(Math.random()*upper)+1;
            medium.style.border="5px solid aqua";
            easy.style.pointerEvents = "none";
            easy.style.opacity = "0.5";
            easy.style.cursor = "not-allowed";
            hard.style.pointerEvents = "none";
            hard.style.opacity = "0.5";
            hard.style.cursor = "not-allowed";
            updateSubmit();
        })
        hard.addEventListener("click",function(){
            isModeSelected=true;
            upper=1000;
            rand=Math.floor(Math.random()*upper)+1;
            hard.style.border="5px solid aqua";
            easy.style.pointerEvents = "none";
            easy.style.opacity = "0.5";
            easy.style.cursor = "not-allowed";
            medium.style.pointerEvents = "none";
            medium.style.opacity = "0.5";
            medium.style.cursor = "not-allowed";
            updateSubmit();
        })
        function updateSubmit(){
            if(isModeSelected && isPlayerSelected){
                btn.disabled=false;
            }
            else{
                btn.disabled=true;
            }
        }
        n.addEventListener("input",()=>{
            const value = parseInt(n.value);
            if (!isNaN(value) && value > 1) {
                isPlayerSelected=true;
            } else {
                isPlayerSelected= false;
            }
            updateSubmit();
        })
        if (form) {
            form.addEventListener("submit", () => {
                let n=document.getElementById("n").value;
                localStorage.setItem("rand", rand);
                localStorage.setItem("upper",upper );
                localStorage.setItem("n",n);
            });
        }
    }
    else if (page.includes("indexMain.html")) {
        rand = parseInt(localStorage.getItem("rand"));
        upper = parseInt(localStorage.getItem("upper"));
        const result={};
        let winner=[];
        let wincount=Infinity;
        let n = parseInt(localStorage.getItem("n"));
        console.log(n);
        let display = document.getElementById("display");
        let enter = document.getElementById("enter");
        let back=document.getElementById("back");
        let digitButtons = [];
        for (let i = 0; i <= 9; i++) {
            digitButtons.push(document.getElementById("num" + i));
        }
        display.innerText = "";
        let count = 0;
        let num = 0;
        let turn=0;
        function enableInputs(){
            digitButtons.forEach(btn => {
            btn.style.pointerEvents = "auto";
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            });
            enter.style.pointerEvents = "auto";
            enter.style.opacity = "1";
            enter.style.cursor = "pointer";
            back.style.pointerEvents = "auto";
            back.style.opacity = "1";
            back.style.cursor = "pointer";
        }
        function disableInputs(){
            digitButtons.forEach(btn => {
            btn.style.pointerEvents = "none";
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
            });
            enter.style.pointerEvents = "none";
            enter.style.opacity = "0.5";
            enter.style.cursor = "not-allowed";
            back.style.pointerEvents="none";
            back.style.opacity="0.5";
            back.style.cursor="not-allowed";
        }
        digitButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
            if (!/^\d*$/.test(display.innerText)) {
            display.innerText = "";
            }
            num = num * 10 + index;
            display.innerText += index;
            });
        });
        back.addEventListener("click",()=>{
            num=parseInt(num/10);
            display.innerText=display.innerText.slice(0,-1);
        })
        disableInputs();
        document.getElementById("name").addEventListener("input",()=>{
            display.innerText="Start guessing..."
            enableInputs();
        })
        enter.addEventListener("click", () => {
        count++;
        let message = "";
        if (rand < num) {
            message = "Guess a lower one";
        } 
        else if (rand > num) {
            message = "Guess a higher one";
        } 
        else {
            let name=document.getElementById("name").value;
            message = `${name} correctly guessed in ${count} tries`;
            result[`${name}`]=count;
            if(wincount>count){
                wincount=count;
                winner=[`${name}`];
            }
            else if(wincount==count){
                winner.push(`${name}`);
            }
            turn++;
            disableInputs();
            console.log(turn);
            console.log(n);
            if(turn<n){
                let next=document.createElement("button");
                next.innerText="Next Player Turn";
                
                next.addEventListener("click",()=>{
                    num=0;
                    count=0;
                    display.innerText="";
                    enableInputs();
                    document.getElementById("name").value="";
                    rand=Math.floor(Math.random()*upper)+1;
                    next.remove();
                })
                document.querySelector(".MainGame").appendChild(next);
            }
            else{
                setTimeout(()=>{
                    document.getElementById("name").value = null;
                    document.getElementById("name").disabled = true;
                    document.getElementById("name").remove();
                    document.querySelector(".numbers").remove();
                    display.remove();
                    display.innerText = "";
                    display.style.pointerEvents="none";
                    display.style.opacity="0.5";
                    display.style.cursor="not-allowed";
                    let announcement=document.createElement("h1");
                    if(winner.length==1){
                        announcement.innerText=`${winner} wins the game with ${wincount} tries`;
                    }
                    else{
                        announcement.innerText = `It's a draw! ${winner.join(", ")} win with ${wincount} tries`;
                    }
                    document.querySelector(".MainGame").appendChild(announcement);
                    if(n>1){
                        let resultTitle = document.createElement("h2");
                        resultTitle.innerText = "All Players' Results:";
                        document.querySelector(".MainGame").appendChild(resultTitle);
                        let resultList = document.createElement("ul");
                        for (let player in result) {
                            let item = document.createElement("li");
                            item.innerText = `${player} - ${result[player]} tries`;
                            resultList.appendChild(item);
                        }
                        document.querySelector(".MainGame").appendChild(resultList);
                    }
                },1000);
            }
        }
        display.innerText = message;
        num = 0; 
        });
    }
});

