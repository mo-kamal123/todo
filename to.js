document.querySelector('#bush').onclick = function (){
    if (document.querySelector('#newtask input').
    value.length == 0){
        alert("Enter your task please ..!")
    } else {
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                    <span id= "taskname">
                        ${
                            document.querySelector('#newtask input').value
                        }
                    </span>
                    <button class="delete">Delete</button>
            </div>`;
                var current = document.querySelectorAll('.delete');
                for (var i=0 ; i < current.length ; i++){
                    current[i].onclick = function(){
                        this.parentNode.remove();
                    }
                }
                var tasks =document.querySelectorAll('.task');
                for(var i=0; i<tasks.length; i++) {
                        tasks[i].onclick = function () {
                            this.classList.toggle('completed')
                        }
                }
                document.querySelector('#newtask input').value = "";
    }
}

let body = document.querySelector("body");
let colors = ["#d161ff", "#52baec", "#8052ce", "#50e5a7"];
setInterval(() => {
    let random = Math.floor(Math.random() * colors.length);
    let randomon = Math.floor(Math.random() * colors.length);
    // console.log(random);
    // console.log(randomon);
    body.style.backgroundColor = colors[random]; 
}, 5000);
